import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
import jwt from 'next-auth/jwt'
import connectDB from '../../../lib/connectDB'
import Users from '../../../models/userModel'
import bcrypt from 'bcrypt'
connectDB()
export const authOptions = {
    providers: [
        
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const username = credentials.username
                const password = credentials.password
                const user = await Users.findOne({username})
                if (!user) {
                    throw new Error("You haven't registered yet")
                }
                if (user) {return signInUser({password,user})}
            }
        })
    ],
    
    callbacks: {
        async jwt({ token, account}) {
            if (account) {
                token.accessToken = account.access_token 
            }
            return token
        },
        async session ({ session, token, user}) {
            console.log(session)
            session.accessToken = token.accessToken

            return session
        },
        
    },
    secret: process.env.NextAuth_SECRET,
    session: {
        strategy: 'jwt'
    },
    debug: true
}

const signInUser = async({password, user}) => {
    if(!user.password) {
        throw new Error("Please enter password")
    }
    const isMatch = await bcrypt.compare(password, user)
    if (isMatch) {
        throw new Error('Password not correct')
    }
    return user
}

export default NextAuth(authOptions)