import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import connectDB from "./connectDB"
import { MongoDBAdapter} from "@next-auth/mongodb-adapter"
import userSchema from "../../models/userModels"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import clientPromise from "../../../lib/mongodb"

connectDB()


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          
        },
        async authorize(credentials, req) {
            const username = credentials.username
            const password = credentials.password
            const Users = mongoose.model('users',userSchema)
            const user = Users.findOne(username)
            if (!user) {
                throw new Error("Not Registered")
            }
            if (user) {
                return signInUser(password, user)
            }

        }
      })
  ],
  pages: {
    signIn: "/login"
  },
  secret: "secret",
  darabase: process.env.MONGODB_URI,
}
export default NextAuth(authOptions)

const signInUser = async({password, user}) => {
    if (!user.password) {
        throw new Error("No password entered")
    }
    const isMatch = await bcrypt.compare(password, user)
    if (!isMatch) {
        throw new Error('Wrong password')
    }

    return user
}