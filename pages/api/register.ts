import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../lib/connectDB"
import User from "../models/userModels"
import bcrypt from "bcrypt"

interface ResponseData {
    error?: string
    msg?: string
}



const validateForm = async (
    username: string,
    password: string
) => {
    if (username.length < 3) {
        return {error: "Username must have 3 or more characters"}
    }
    
    
    await connectDB()
    
    const usernameUser = await User.findOne({username: username})
    

    if (usernameUser) {
        
        return { error: "Username already exists"}
    }

    if (password.length < 5) {
        console.log("password is not long enough")
        return {error: "Password must have 5 or more characters"}
    }
    console.log("null was returned")
    return null
    console.log("something is wrong")
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method !== "POST") {
        return res  
            .status(200)
            .json({ error: "This API call only accepts POST methods"})
    }
    console.log("/api/register has been called")

    const {username, password} = req.body
    const errorMessage = await validateForm(username, password)
    if (errorMessage) {
        return res.status(400).json(errorMessage as ResponseData)
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = new User({
        username,
        hashedPassword

    })
    console.log("test")
    newUser.save().then(() => res.status(200).json({msg: "Successfuly created new user: " + newUser}))
        .catch((err: string) => res.status(400).json({ error: "Error on /api/register" + err}))
}