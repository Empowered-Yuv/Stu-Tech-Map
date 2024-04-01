import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Mentor } from "../models/mentor.models.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";





const registerMentor = asyncHandler(async (req, res) => {
    // Destructure user details from the request body
    try {
      const { fullName, expertise, bio, email, password } = req.body;
  
      // Check if any required field is empty
      if (
        [fullName, expertise, bio, email, password].some(
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
  
    const existedUserEmail = await User.findOne({ email });
    if (existedUserEmail) {
      throw new ApiError(
        409,
        "Learner with this email id has already been signed up! You cannot be a mentor"
      );
    }
  
      // Check if user already exists with the provided email
      const existedMentorEmail = await Mentor.findOne({ email });
      if (existedMentorEmail) {
        throw new ApiError(
          409,
          "Mentor with this email id has already been signed up"
        );
      }
  
      let avatarUrl;
  
      // If avatar is provided, upload to Cloudinary
      if (req.file) {
        const result = await uploadOnCloudinary(req.file.path);
        avatarUrl = result.secure_url;
      } else {
        // If avatar is not provided, use default image URL
        avatarUrl = "https://ibb.co/RPZJkMy"; // Replace with your default image URL
      }
  
      // Create user in the database
      const mentor = await Mentor.create({
        fullName,
        expertise,
        bio,
        email,
        password,
        avatar: avatarUrl,
      });
  
      // Find the created user by ID and select fields to exclude
      const createdMentor = await Mentor.findById(mentor._id).select(
        "-password -refreshToken"
      );
  
      // Check if user creation was successful
      if (!createdMentor) {
        throw new ApiError(500, "Something went wrong while registering mentor");
      }
  
      // Return successful response
      return res
        .status(201)
        .json(new ApiResponse(200, createdMentor, "Mentor registered successfully"));
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
    registerMentor
  }