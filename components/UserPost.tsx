import axios from "axios"
import Router from "next/router"
import Post from "../models/postModel"

export default function UserPost() {

    const getPost = async () => {
        var obj:Post  = await axios
        
        .get("/api/post",
        {headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }})
          .then (async () => {
            
          })
          .catch((error) => {
            console.log("This thing has an error yo")
            console.error(error)
          })

          return obj.content
       
    }
    

    return (
        <div className="bg-gray-100">
            <div className="inline-flex">
                <div className="pic">
                    <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        className="h-12 rounded-full"
                        title="image"
                    />            
                </div>
                <div className="Name">
                    <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
                </div>
            </div>
            <div className="float-right inline-flex my-2">
                <div className="like">
                    <p>Like</p>
                </div>
                <div className="comment mx-2">
                    <p>Comment</p>
                </div>
            </div>
            <div className="text container">
                <div className="text-sm p-1">
                    {JSON.stringify(getPost())}

                </div>
                <div className="rounded-md overflow-hidden w-full">
                    <img src="https://images.unsplash.com/photo-1612827788868-c8632040ab64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        className="object-siz-down max-w-full max-h-72"
                        title="image"
                    />
                </div>
            </div>
        </div>
    )
}