import '../styles/globals.css'
import Link from 'next/link'
import SideBar from '../components/sidebar'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <><title> Hive Media</title>
    <div className='h-screen w-screen flex flex-column'>
        <SideBar />
        <Footer />
        <div className='w-full'>
           <Component {...pageProps} />
        </div>
    </div>
    </>    
  )
}

export default MyApp
