import '../styles/globals.css'
import Link from 'next/link'
import '../styles/navbar.css'
import SideBar from '../components/sidebar'
import Footer from '../components/Footer'
import {SessionProvider} from 'next-auth/react'

export default function MyApp({
   Component,
    pageProps: {session, ...pageProps}
   }) {
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
