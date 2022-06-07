import  Head  from 'next/head'
import React, { Fragment } from 'react'
import Services from '../components/Services/Services'

const services = () => {
  return (
    <Fragment>
      <Head>
      <title>Services | Vuyolwethu Aluminium</title>
        <meta charSet='UTF-8' />
        <meta name="description" content="We specialize in quality, affordable, custom designs that will make your home standout in your city. We conclude any job within allocated time frame."/>
        <meta name="keywords" content="aluminium windows, doors, security gates, building, painting, paving"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Services />
    </Fragment>
  )
}

export default services
