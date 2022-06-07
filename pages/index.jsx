import Head from 'next/head'
import { Fragment } from 'react'
import Video from '../components/Home/Video'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home | Vuyolwethu Aluminium</title>
        <meta charSet='UTF-8' />
        <meta name="description" content="Manufacturing and installation of aluminium windows, doors, security gates and burglar bars"/>
        <meta name="keywords" content="aluminium windows, doors, security gates, building, painting, paving"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.vuyolwethubaytrading.co.za" />
      </Head>
      <Video />
    </Fragment>
  )
}
