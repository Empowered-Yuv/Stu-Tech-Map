import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// import { v2 as cloudinary, uploader } from 'cloudinary'

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({
      validateBeforeSave: false,
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // Destructure user details from the request body
  try {
    const { username, email, fullName, password } = req.body;

    // Check if any required field is empty
    if (
      [fullName, email, username, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }

    // Validate email format
    function isValidEmail(e) {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e);
    }

    if (!isValidEmail(email)) {
      throw new ApiError(400, "Invalid email id");
    }

    // Check if user already exists with the provided username
    const existedUserName = await User.findOne({ username });
    if (existedUserName) {
      throw new ApiError(
        409,
        "Username already exists Please try different user name"
      );
    }

    // Check if user already exists with the provided email
    const existedUserEmail = await User.findOne({ email });
    if (existedUserEmail) {
      throw new ApiError(
        409,
        "User with this email id has already been signed up"
      );
    }

    let avatarUrl;

    // If avatar is provided, upload to Cloudinary
    if (req.file) {
      const result = await uploadOnCloudinary(req.file.path);
      avatarUrl = result.secure_url;
    } else {
      // If avatar is not provided, use default image URL
      avatarUrl = "https://i.ibb.co/5THrMrM/icons8-user-94.png"; // Replace with your default image URL
    }

    // Create user in the database
    const user = await User.create({
      fullName,
      email,
      password,
      avatar: avatarUrl,
      username: username.toLowerCase(),
    });

    // Find the created user by ID and select fields to exclude
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    // Check if user creation was successful
    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering user");
    }

    // Return successful response
    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered successfully"));
  } catch (error) {
    if (error instanceof ApiError) {
      return res
        .status(error.statusCode)
        .json(new ApiResponse(error.statusCode, error.data, error.message));
    } else {
      console.error(error);
      return res.status(500).json(new ApiResponse(500, "Server Error"));
    }
  }
});

const loginUser = asyncHandler(async (req, res) => {
  //req body ---> data
  try {
    const { identifier, password } = req.body;

    // username or email
    if (!identifier) {
      throw new ApiError(400, "usernname or email is required");
    }

    function isValidEmail(e) {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e);
    }

    let user;

    if (isValidEmail(identifier)) {
      // Input is an email, find user by email
      user = await User.findOne({ email: identifier });
    } else {
      user = await User.findOne({ username: identifier });
    }

    //If user exists or not
    if (!user) {
      throw new ApiError(404, "User doesnt exist!");
    }

    // password check
    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(404, "Invalid user credentials");
    }

    // access token or refresh token generate
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    // send cookies
    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    // when we add options cookes r modifiable at server only not for any frontend user
    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          "User Logged In Successfully"
        )
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res
        .status(error.statusCode)
        .json(new ApiResponse(error.statusCode, error.data, error.message));
    } else {
      console.error(error);
      return res.status(500).json(new ApiResponse(500, "Server Error"));
    }
  }
});

export { registerUser, loginUser };
