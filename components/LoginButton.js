import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from "next/link"

export default function LoginButton() {
    const {data: session, } = useSession()
    
    console.log(session);
    if (session) {
        return (
            <>
            Signed in as {session.user.username}<br /> 
            <li><a className="text-[15px] ml-4 text-gray-200 font-bold" onClick={() => signOut()}>Log Out</a></li> 
            </>
        )
    }
    
    return (
        <>
        <ul>
            Not Signed in< br />
            <li><Link className="text-[15px] ml-4 text-gray-200 font-bold" href="/login">Login</Link></li> 
        </ul>
        </>
    )
}