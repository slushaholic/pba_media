import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import connectDB from "../../../lib/connectDB"
import { MongoDBAdapter} from "@next-auth/mongodb-adapter"
import User from "../../../models/userModel"
import mongoose from "mongoose"
import { compare} from "bcrypt"
import clientPromise from "../../../lib/mongodb"
import { DefaultSession } from "next-auth"

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
      async authorize(credentials, req) {
        console.log("authorize");
        
        await connectDB();
    
        // Find user with the email
        const user:any = await User.findOne({
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
        console.log(JSON.stringify(user))
        return user;
      }
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/login"
  },
  callbacks: {
    
    async jwt({ token, user, account, profile}) {
        if (account) {
            token.accessToken = account.access_token 
            token.user = user
        }
        return token
    },
    async session ({ session, token, user}) {
        session.user = <DefaultSession["user"]>token.user
        console.log(session);
        
        

      
        return session
    }
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

