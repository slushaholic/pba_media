import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import connectDB from "../../../lib/connectDB"
import { MongoDBAdapter} from "@next-auth/mongodb-adapter"
import User from "../../models/userModels"
import mongoose from "mongoose"
import { compare} from "bcrypt"
import clientPromise from "../../../lib/mongodb"

connectDB()

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        
        name: "Credentials",
        
        credentials: {
          username: {
            label: "Username",
            type: "text"
          },
          password: {
            label: "Password",
            type: "password"
          }
        },
        async authorize(credentials) {
            await connectDB();
    
            // Find user with the email
            const user = await User.findOne({
              username: credentials?.username,
            });
    
            // Email Not found
            if (!user) {
              throw new Error("User is not registered");
            }
    
            // Check hased password with DB hashed password
            const isPasswordCorrect = await compare(
              credentials!.password,
              user.hashedPassword
            );
    
            // Incorrect password
            if (!isPasswordCorrect) {
              throw new Error("Password is incorrect");
            }
    
            return user;
          },
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
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  
   


})

