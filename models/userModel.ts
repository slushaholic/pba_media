import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userid: {
    type: String,
    required: true,
    unique: true

  }, 
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: 5,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});




export const User =  mongoose.models.User ?? mongoose.model("User", userSchema);
export default User