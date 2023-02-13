import Post from "../../models/postModel";
import connectDB from "../../lib/connectDB";
import type { NextApiResponse, NextApiRequest } from "next";
import mongoose from "mongoose";
import axios from "axios";

interface ResponseData {
    error?: string
    msg?: string
}

export default async function handler ( 
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method !== "GET") {
        return res
            .status(200)
            .json({ error: "This API call only accepts GET methods" })
    }

    connectDB();
    const tempPost:any = await Post.findOne({
        user: "tommy"
    })
    res.send(tempPost)
    return tempPost


}