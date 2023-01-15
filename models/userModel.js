import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: ObjectId
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
  image: {
    type: String,
  },
});



var User =  mongoose.model("User", userSchema);
export default User =  mongoose.model("User", userSchema);