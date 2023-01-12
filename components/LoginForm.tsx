import React, { useState } from "react"
import { loginUser } from '../lib/auth'
import { useRouter } from "next/router"
import { useSession, signIn, getProviders } from "next-auth/react"
import axios from "axios"
import Router from "next/router"




export default function LoginForm() {
  
    const {data: session} = useSession()
    const [authType, setAuthType] = useState("Login")
    const oppAuthType: { [key: string]: string} = {
      Login: "Register",
      Register: "Login"
    }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)
    const router = useRouter()

    const registerUser = async () => {
      const res = await axios 
        .post(
          "/api/register",
          { username, password},
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        )
        .then(async () => {
          await loginUser()
          Router.push("/")

        })
        .catch((error) => {
          setMessage(error)
        })
    }
    const loginUser = async () => {
      event?.preventDefault()
      const res: any = await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
        callbackUrl: `${process.env.NEXTAUTH_URL}`
      })

      res.error ? setMessage(res.error) : Router.push("/")
    }

    /*const signInUser = async (e) => {
      e.preventDefault()

      let options = {redirect:false, username, password}
      const res = await signIn("credentials", options)
      setMessage(null)

      if (res?.error) {
        setMessage(res.error)
      }

      //return router.push('/')

      console.log(username,password)
    }*/

    const formSubmit = (actions: any) => {
      //actions.setSubmitting(false)

      authType === "Login" ? loginUser() : registerUser()
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
      <p>
        {authType === "Login" ? "Not registered yet? " : "Already have an account? "}
        </p>
      <button onClick={() => setAuthType(oppAuthType[authType])}>{oppAuthType[authType]}</button>
      <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p className="text-center text-3xl">Welcome.</p>
        <form
          className="flex flex-col pt-3 md:pt-8"
          onSubmit={(actions) => {
            formSubmit(actions)
          }}

          
        >
          <div className="flex flex-col pt-4">
            <label htmlFor="username" className="text-lg">
              Username
            </label>
            <input
              
              id="username"
              name="username"
              placeholder="username"
              value = {username}
              onChange={e=>setUsername(e.target.value)}
              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              
              id="password"
              name="password"
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
          <div>
          
            
          </div>
          <button
            type="submit"
            className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            >{oppAuthType[authType] === "Login" ? "Register" : "Login"}</button>
        </form>
        <div className="text-center pt-12 pb-12">
          
        </div>
      </div>
    </div>
  </div>
</>
        )
    }
