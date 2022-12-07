import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/footer'
import BrandNavBar from '../components/NavBar'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>
      El Picante | Cevichería Gourmet
    </title>
  </Head>
  <BrandNavBar/>
  <Component {...pageProps} />
  <Footer/>
  </>

}

export default MyApp
