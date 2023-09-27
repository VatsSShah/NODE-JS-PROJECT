import mongoose from "mongoose";
// Create a new Mongoose schema
const Schema = mongoose.Schema;
// Define a schema for User
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    sapid: { type: Number, required: true, unique: true },
    branch: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);