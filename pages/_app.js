import '../styles/globals.css'
import Link from 'next/link'
import SideBar from '../components/sidebar'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <><title> Hive Media</title>
    <div className='h-screen w-screen grid grid-cols-2'>
        <SideBar />
        <Footer />
    <Component {...pageProps} />
    </div>
    </>    
  )
}

export default MyApp
