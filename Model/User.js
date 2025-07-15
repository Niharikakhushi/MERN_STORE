import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String, // ✅ remove quotes
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", UserSchema);
