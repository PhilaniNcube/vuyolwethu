import { Fragment, useEffect } from 'react'
import Navbar from '../components/Layout/Navbar'
import analytics from '../utils/analytics'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.page()
  }, [])

  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
