import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from '../models/user.models.js'
import { Mentor } from '../models/mentor.models.js'
import jwt from "jsonwebtoken"


// res ka use nhi ho raha toh uske jagah _ use kr sakte hai
export const verifyJWT = asyncHandler( async (req, _, next) =>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if (!token) {
            throw new ApiError(401, "Unauthorized Request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        let user
        if (!decodedToken?.isMentor) {
             user = await User.findById(decodedToken?._id).select(
                "-password -refreshToken"
            )
        }
        else {
            user = await Mentor.findById(decodedToken?._id).select(
                "-password -refreshToken"
            )
        }
    
        
        if (!user) {
            throw new ApiError("Account not found");
        }

        // Attach the user object to the request for further processing
        req.user = user;

        // Call the next middleware
        next();
    
      
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid at")
    }
} )

