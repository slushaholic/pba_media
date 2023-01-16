import mongoose from "mongoose";

const Schema = mongoose.Schema

const postSchema = new Schema({
    userid: {
      type: String,
      required: true,
      
  
    }, 
    content: {
      type: String,
      required: true,
      
    },
    image: {
      type: String,
    },
  });
  
  
  
  
  export const Post =  mongoose.models.Post ?? mongoose.model("Post", postSchema);
  export default Post