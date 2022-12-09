import '../styles/globals.css'
import Link from 'next/link'
import SideBar from '../components/sidebar'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <>
<<<<<<< Updated upstream
    <title>Hive Media</title>
    <div > 
    <SideBar />
        <Footer />
    <Component {...pageProps} />
    </div>
    </>    
  ) 
=======
    <title> Hive Media</title>
    <SideBar />
    <Footer />

    <Component {...pageProps} />
    </>
  )
>>>>>>> Stashed changes
}

export default MyApp
