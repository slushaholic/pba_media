import Post from "../../models/postModel"
import connectDB from "../../lib/connectDB"
import type { NextApiRequest, NextApiResponse } from "next"

interface ResponseData {
    error?: string
    msg?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method !== "POST") {
        return res
            .status(200)
            .json({ error: "This API call only accepts POST methods" })
    }
    console.log("/api/newPost has been called")


    var currentTime = new Date()
    var date = String(currentTime.getDate())

    await connectDB()
    const {user, content} = req.body
    
    const newPost = new Post({
        user,
        content,
        date

    })
    newPost.save()
}