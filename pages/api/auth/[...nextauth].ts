import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import connectDB from "../../../lib/connectDB"
import { MongoDBAdapter} from "@next-auth/mongodb-adapter"
import User from "../../../models/userModel"
import mongoose from "mongoose"
import { compare} from "bcrypt"
import clientPromise from "../../../lib/mongodb"

connectDB()

export default NextAuth({
  // Configure one or more authentication providers
  providers: [

    CredentialsProvider ({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

      }
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/login"
  },
  
  debug: process.env.NODE_ENV === "development",
  
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  
   


})

