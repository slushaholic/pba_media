import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
import jwt from 'next-auth/jwt'

export const authOptions = {
    providers: [
        
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "J Smith",username: "jsmith", password: "toast", email: "jsmith@example.com"}

                if (user.username === credentials.username && user.password === credentials.password) {
                    return user
                } else {
                    return null
                    console.log(console.error())
                }
            }
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
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

export default NextAuth(authOptions)