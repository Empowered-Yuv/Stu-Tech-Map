import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"









const registerUser = asyncHandler(async (req, res) => {
    // Destructure user details from the request body
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
    const existedUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists");
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
});

export { registerUser };
