import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'
import  EmailProvider from 'next-auth/providers/email'

export const authOptions = {
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
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