import '../styles/globals.css'
import Link from 'next/link'
import '../styles/navbar.css'
import SideBar from "../components/sidebar"
import Footer from '../components/Footer'
import {SessionProvider} from 'next-auth/react'

import type { Session } from 'next-auth'
import type { AppProps } from 'next/app'

export default function MyApp({
   Component,
    pageProps: {session, ...pageProps}
   }: AppProps<{ session: Session}>) {
  return (
    <>
    <SessionProvider session={session}>
      <title>Hive Media</title>
        <SideBar />
          <Footer />
      <Component {...pageProps} />
    </SessionProvider>
    </>    
  ) 
}
