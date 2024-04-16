import { Router } from "express";
import { loginMember, resetPassword } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getAvatar, forgotPassword } from "../controllers/auth.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const router = Router();

router.route("/login").post(loginMember);

router.route(
  "/get-avatar",
  verifyJWT,
  asyncHandler(
    async (req, res) => {
      try {
        const { id, isMentor } = req.user;

        const user = getAvatar(id, isMentor);

        if (!user) {
          return res
            .status(404)
            .json(new ApiResponse(404, {}, "Avatar not found"));
        }

        // Send the user data as the response
        res
          .status(200)
          .json(new ApiResponse(200, user.avatar, "Fetched Successfully"));
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
    })
  
);

router.route("/forgot-password").post(forgotPassword);

router.route("/reset-password").post(resetPassword);

export default router;
