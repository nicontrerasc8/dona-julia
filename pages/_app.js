import Head from 'next/head'
import { ToastBar, Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/footer'
import BrandNavBar from '../components/NavBar'
import { ContextProvider } from '../context/context'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>
      Nick&apos;s Burgers
    </title>
  </Head>
  <ContextProvider>
  <Toaster
  position="top-center"
  toastOptions={{
  
    success:{
        duration: 5000,
        style: {
            fontWeight: "600",
            fontSize: "clamp(calc(1rem + 10px), 2vmin, 2vmin)",
            border: "3px solid var(--main-green)",
        },
    }
  }}
  />
  <BrandNavBar/>
  <Component {...pageProps} />
  <Footer/>
  </ContextProvider>
  </>

}

export default MyApp
