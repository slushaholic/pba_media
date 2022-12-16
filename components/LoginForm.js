import React, { useState } from "react"
import { loginUser } from '../lib/auth'
import { getCsrfToken, getProviders, signIn, getSession} from 'next-auth/react'
import { useRouter } from 'next/router'
 



export default function LoginForm({getCsrfToken, providers}) {
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)
    const router = useRouter()
    const signInUser = async (e) => {
      event.preventDefault()

      let options = {redirect:false, username, password}
      const res = await signIn("credentials", options)
      setMessage(null)

      if (res?.error) {
        setMessage(res.error)
      }

      //return router.push('/')

      console.log(username,password)
    }

    

    

    
        return(
            <>
        <link
    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');\n\n        .font-family-karla {\n            font-family: karla;\n        }\n    "
    }}
  />
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
    <div className="w-full md:w-1/2 flex flex-col">
      <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p className="text-center text-3xl">Welcome.</p>
        <form
          className="flex flex-col pt-3 md:pt-8"
          
          action="/api/auth/signin/credentials"
          
        >
          <div className="flex flex-col pt-4">
            <label htmlFor="email" className="text-lg">
              Username
            </label>
            <input
              
              placeholder="Username"
              value={username}
              onChange={e=>setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              
              placeholder="Password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="text-center pt-12 pb-12">
          <p>
            {message}
            </p>
          </div>
          <button
            onClick={(e)=>signInUser()}
            className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            >Log In</button>
        </form>
        <div className="text-center pt-12 pb-12">
          <p>
            Don't have an account?{" "}
            <a href="register" className="underline font-semibold">
              Register here.
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</>
        )
    }

