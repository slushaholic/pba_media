import '../styles/globals.css'
import Link from 'next/link'
import '../styles/navbar.css'
import SideBar from '../components/sidebar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <title>Hive Media</title>
    <div > 
    <SideBar />
        <Footer />
    <Component {...pageProps} />
    </div>
    </>    
  ) 
}
export default MyApp