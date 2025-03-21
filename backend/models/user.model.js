import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      password:{
        type: String,
        required: true
      },
      name:{
        type: String,
        required: true
      },
      lastlogin:{
        type: Date,
        default: Date.now
      },
      isVerified:{
        type: Boolean,
        default: false
      },
      resetPasswordToken: String,
      resetPasswordExpires: Date,
      verificationToken: String,
      verificationTokenExpires: Date,
    },{timestamps: true});

export const User = mongoose.model('User', userSchema);