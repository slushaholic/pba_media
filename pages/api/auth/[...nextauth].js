import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
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
            session.accessToken = token.accessToken
            return session
        }
    },
    secret: "toast",
    debug: true
}

export default NextAuth(authOptions)