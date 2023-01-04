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
      Anticuchería Doña Julia
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
        },
    },
    error:{
      duration: 5000,
      style: {
          fontWeight: "600",
          fontSize: "clamp(calc(1rem + 10px), 2vmin, 2vmin)",
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
