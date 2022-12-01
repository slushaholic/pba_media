import '../styles/globals.css'
import Link from 'next/link'
import '../styles/navbar.css'
import SideBar from '../components/sidebar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <title>Hive Media</title>
      <SideBar />
        <Footer />
    <Component {...pageProps} />
    </>    
  ) 
}
export default MyApp