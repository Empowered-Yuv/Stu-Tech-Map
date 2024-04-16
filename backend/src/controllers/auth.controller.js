import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { Mentor } from "../models/mentor.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokensForUser = async (userId) => {
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

const generateAccessAndRefreshTokensForMentor = async (mentorId) => {
  try {
    const mentor = await Mentor.findById(mentorId);
    const accessToken = mentor.generateAccessToken();
    const refreshToken = mentor.generateRefreshToken();

    mentor.refreshToken = refreshToken;

    await mentor.save({
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

const loginMember = asyncHandler(async (req, res) => {
  //req body ---> data
  try {
    const { email, password } = req.body;

    // username or email
    if (!email) {
      throw new ApiError(400, "Email is required");
    }

    function isValidEmail(e) {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e);
    }

    let user, mentor;

    if (isValidEmail(email)) {
      // Input is an email, find user by email
      user = await User.findOne({ email });
      mentor = await Mentor.findOne({ email });
    } else {
      throw new ApiError(400, "Invalid Email");
    }

    //If user exists or not
    if (!(user || mentor)) {
      throw new ApiError(404, "Account doesnt exist!");
    }

    // password check
    let isPasswordValid
    if (user) {
      isPasswordValid = await user.isPasswordCorrect(password);
    } else {
      isPasswordValid = await mentor.isPasswordCorrect(password);
    }

    if (!isPasswordValid) {
      throw new ApiError(404, "Invalid user credentials");
    }

    // access token or refresh token generate
    //const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    //     member._id
    //   );

    let accessToken, refreshToken, member;
    if (user) {
      ({ accessToken, refreshToken } =
        await generateAccessAndRefreshTokensForUser(user._id));
      member = user;
    } else {
      ({ accessToken, refreshToken } =
        await generateAccessAndRefreshTokensForMentor(mentor._id));
      member = mentor;
    }

    // send cookies
    let loggedInMember;

    if (user) {
      loggedInMember = await User.findById(user._id).select(
        "-password -refreshToken"
      );
    } else {
      loggedInMember = await Mentor.findById(mentor._id).select(
        "-password -refreshToken"
      );
    }

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
            member: loggedInMember,
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

const getAvatar = async (id, isMentor) => {
  try {
    let user;
    if (!isMentor) {
      user = await User.findById(id).select("-password");
    } else {
      user = await Mentor.findById(id).select("-password");
    }

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const forgotPassword = asyncHandler(async (req, res) => {
  // data -> req.body

  try {
    const { email } = req.body;

    // username or email
    if (!email) {
      throw new ApiError(400, "Email is required");
    }

    function isValidEmail(e) {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e);
    }

    let user, mentor;

    if (isValidEmail(email)) {
      // Input is an email, find user by email
      user = await User.findOne({ email });
      mentor = await Mentor.findOne({ email });
    } else {
      throw new ApiError(400, "Invalid Email");
    }

    //If user exists or not
    if (!(user || mentor)) {
      throw new ApiError(404, "Account doesnt exist!");
    }

    const token = uuidv4(); // Generate a unique token
    let member
    if (user) {
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

      await user.save({
        validateBeforeSave: false,
      });

      member = user

    } else {
      mentor.resetPasswordToken = token;
      mentor.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

      await mentor.save({
        validateBeforeSave: false,
      });

      member = mentor
    }


    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Or any other SMTP service provider
      auth: {
        user: "stutechmap@gmail.com", // Your email address
        pass: "Stutechmap143", // Your email password
      },
    });

    const mailOptions = {
      from: 'stutechmap@gmail.com',
      to: member.email,
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n`
        + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
        + `http://localhost:4000/reset-password/${token}\n\n`
        + `If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {},
        "Password reset email sent"
      )
    )


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

export { loginMember, getAvatar, forgotPassword };
