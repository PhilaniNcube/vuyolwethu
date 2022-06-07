import React from 'react'
import Head from 'next/head'

export default function MyApp() {
  return (
    <div className="h-[100vh]">
      <Head>
      <title>Contact | Vuyolwethu Aluminium</title>
        <meta charSet='UTF-8' />
        <meta name="description" content="Contact us"/>
        <meta name="keywords" content="aluminium windows, doors, security gates, building, painting, paving"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="py-12 lg:py-0 xl:container xl:mx-auto">
        <div className="items-strech mx-4 flex h-full flex-col items-center justify-center lg:flex-row">
          <div className="lg:w-full 2xl:w-3/5">
            <h1 className="w-11/12 text-3xl font-bold uppercase text-gray-800 lg:text-5xl">
              Get in touch
            </h1>
            <p className="mt-3 text-base leading-normal text-gray-600 md:w-8/12 lg:mt-4 2xl:w-7/12">
              <span className="font-bold">Address:</span> 55 Mpenzu Street
              Motherwell, Gqeberha, 6211
            </p>
            <p className="mt-3 text-base leading-normal text-gray-600 md:w-8/12 lg:mt-4 2xl:w-7/12">
              <span className="font-bold">Cell:</span> 081 833 7421
            </p>
            <p className="mt-3 text-base leading-normal text-gray-600 md:w-8/12 lg:mt-4 2xl:w-7/12">
              <span className="font-bold">Email:</span> sizila93@gmail.com
            </p>
            <p className="mt-3 text-base leading-normal text-gray-600 md:w-8/12 lg:mt-4 2xl:w-7/12">
              <span className="font-bold">Email:</span>{' '}
              info@vuyolwethutrading.co.za
            </p>
          </div>
          <div className="mt-2 flex w-full flex-col justify-center bg-lime-600 px-5 py-5 md:mt-6 md:px-7 md:py-7 lg:mt-0 lg:w-full lg:py-12 lg:px-20 2xl:w-2/5">
            <h2 className="text-lg font-semibold text-gray-50">
              Send us a message
            </h2>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full"
            >
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEBFORMS_ACCESS_KEY}
              ></input>
              <div className="flex flex-col space-y-3">
                <input
                  className="mt-4 rounded-md border border-gray-300 p-4 text-base text-gray-600 focus:border-gray-700 focus:outline-none md:mt-6"
                  type="text"
                  aria-label="Name"
                  placeholder="Enter your Name"
                />
                <input
                  className="mt-4 rounded-md border border-gray-300 p-4 text-base text-gray-600 focus:border-gray-700 focus:outline-none"
                  type="email"
                  aria-label="Email"
                  placeholder="Enter your email"
                />
              </div>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              ></input>
              <textarea
                name=""
                id=""
                aria-label="Your message"
                placeholder="Message"
                className="mt-4 h-48 w-full resize-none rounded-md border border-gray-300 p-4 text-base text-gray-600 focus:border-gray-700 focus:outline-none md:mt-6 lg:h-36 xl:h-48 2xl:h-56"
              ></textarea>
              <button className="mt-4 rounded-md bg-white p-4 text-base font-medium leading-4 text-lime-600  focus:outline-none focus:ring-2  focus:ring-offset-2 md:mt-5">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
