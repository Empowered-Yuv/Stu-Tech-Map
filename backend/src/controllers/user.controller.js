import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// import { v2 as cloudinary, uploader } from 'cloudinary'



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
      avatarUrl = "https://ibb.co/qFLnGy0"; // Replace with your default image URL
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








  


export 
{
  registerUser
}
