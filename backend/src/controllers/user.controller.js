import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"



const generateAccessAndRefreshTokens = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken

        await user.save({
            validateBeforeSave: false
        })

        return { accessToken, refreshToken }


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh tokens")
    }
}





const registerUser = asyncHandler(async (req, res) => {
    // Destructure user details from the request body
    try {
        const { username, email, fullName, password } = req.body;
    
        // Check if any required field is empty
        if ([fullName, email, username, password].some((field) =>  field?.trim() === "")) {
            throw new ApiError(400, "All fields are required");
        }
    
        // Validate email format
        if (!email.includes("@")) {
            throw new ApiError(400, "Invalid email id");
        }
    
        // Check if user already exists with the provided username or email
        const existedUserName = await User.findOne( { username } );
        if (existedUserName) {
            throw new ApiError(409, "Username already exists Please try different user name");
        }

        const existedUserEmail = await User.findOne( { email } );
        if (existedUserEmail) {
            throw new ApiError(409, "User with this email id has already been signed up");
        }
    
        // Get the avatar local path from the request files
        const avatarLocalPath = req.file?.avatar?.[0]?.path;
    
        // Upload avatar to Cloudinary if available
        let avatarUrl = "https://i.ibb.co/5THrMrM/icons8-user-94.png"; // Default avatar URL
        if (avatarLocalPath) {
            const uploadedAvatar = await uploadOnCloudinary(avatarLocalPath);
            avatarUrl = uploadedAvatar?.url || avatarUrl; // Update avatar URL if upload was successful
        }
    
        // Create user in the database
        const user = await User.create({
            fullName,
            avatar: avatarUrl,
            email,
            password,
            username: username.toLowerCase()
        });
    
        // Find the created user by ID and select fields to exclude
        const createdUser = await User.findById(user._id).select("-password -refreshToken");
    
        // Check if user creation was successful
        if (!createdUser) {
            throw new ApiError(500, "Something went wrong while registering user");
        }
    
        // Return successful response
        return res.status(201).json(
            new ApiResponse(200, createdUser, "User registered successfully")
        );
    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json(
                new ApiResponse(
                    error.statusCode,
                    error.data,
                    error.message
                )
            );
        } else {
            console.error(error);
            return res.status(500).json(
                new ApiResponse(
                    500,
                    'Server Error'
                )
            );
        }
    }
});




const loginUser = asyncHandler( async (req, res) => {
    //req body ---> data
    const {email, username, password} = req.body

    // username or email
    if (!(username || email)) {
        throw new ApiError(400, "usernname or email is required")
    }

    // find the user
    const user = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (!user) {
        throw new ApiError(404, "User doesnt exist!")
    }


    // password check
    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(404, "Invalid user credentials")
    }


    // access token or refresh token generate

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)


    // send cookies

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )


    const options = {
        httpOnly: true,
        secure: true
    }
    // when we add options cookes r modifiable at server only not for any frontend user


    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User Logged In Successfully"
        )
    )



})

export 
{
    registerUser,
    loginUser
}