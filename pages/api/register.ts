import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../lib/connectDB"
import User from "../../models/userModel"
import bcrypt from "bcrypt"
import { randomUUID } from "crypto"

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

    const {username, password} = req.body
    const errorMessage = await validateForm(username, password)
    if (errorMessage) {
        return res.status(400).json(errorMessage as ResponseData)
    }
    //encrypts entered password as a hash string
    const hashedPassword = await bcrypt.hash(password, 12)
    //generates a random string for the userID
    const userid = randomUUID()
    //initializes a new user
    const newUser = new User({
        userid,
        username,
        hashedPassword
    })
    //saves user to the database
    newUser.save().then(() => res.status(200).json({msg: "Successfuly created new user: " + newUser}))
        .catch((err: string) => res.status(400).json({ error: "Error on /api/register" + err}))
}