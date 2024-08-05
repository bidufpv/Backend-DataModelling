import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      min: [6, 'minimum length of password should be 6'],
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
