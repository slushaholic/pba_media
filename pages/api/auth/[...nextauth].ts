import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import connectDB from "../../../lib/connectDB"
import { MongoDBAdapter} from "@next-auth/mongodb-adapter"
import User from "../../models/userModels"
import mongoose from "mongoose"
import { compare} from "bcrypt"
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
  
  darabase: process.env.MONGODB_URI,
}
export default NextAuth(authOptions)

