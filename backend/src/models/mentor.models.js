import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const mentorSchema = new Schema({
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
    refreshToken: {
        type: String,
    }
}, {
    timestamps: true
})


mentorSchema.pre("save", async function (next) {

    if (!this.isModified("password")) return next()
    //to encrypt password only when it is first created or updated
    //not everytime

    this.password = await bcrypt.hash(this.password, 10)
    //how many times it should be encrypted means 10 rounds
    next()
})


mentorSchema.methods.isPasswordCorrect = async function(password) {
    //to check password is correct
    return await bcrypt.compare(password, this.password)
}



//we can add as many methods as we want
mentorSchema.methods.generateAccessToken = function () {
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

mentorSchema.methods.generateRefreshToken = function () {
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




export const Mentor = mongoose.model("Mentor", mentorSchema)