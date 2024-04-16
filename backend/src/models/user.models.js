import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    isMentor: {
        type:Boolean,
        default: false,
    },
    resetPasswordToken: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },
    refreshToken: {
        type: String,
    }
}, {
    timestamps: true
})


userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) return next()
    //to encrypt password only when it is first created or updated
    //not everytime

    this.password = await bcrypt.hash(this.password, 10)
    //how many times it should be encrypted means 10 rounds
    next()
})


userSchema.methods.isPasswordCorrect = async function(password) {
    //to check password is correct
    return await bcrypt.compare(password, this.password)
}



//we can add as many methods as we want
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        },
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        },
    )
}




export const User = mongoose.model("User", userSchema)