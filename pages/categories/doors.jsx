import React from 'react'
import Head from 'next/head'

const doors = () => {
  return (
    <div className="overflow-y-hidden">
       <Head>
      <title>Aluminium Doors | Vuyolwethu Aluminium</title>
        <meta charSet='UTF-8' />
        <meta name="description" content="We offer a variety of services such as aluminium windows, doors, sliding doors, folding security gates and burglars. We do repairs on aluminium, plumbing, painting, and electrical repairs."/>
        <meta name="keywords" content="aluminium windows, doors, security gates, building, painting, paving"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col items-start justify-center py-12 px-4 md:px-6 lg:px-20 2xl:container 2xl:mx-auto">
        <h1 className="text-xl font-medium leading-6 text-gray-800 md:text-2xl md:leading-8 lg:text-4xl lg:leading-9">
          Aluminium Doors
        </h1>
        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-6 md:gap-6 lg:mt-8 lg:grid-cols-5 lg:gap-3">
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-1.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-2.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-3.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-4.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-6.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-7.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-8.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-9.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-10.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full">
              <img
                src="/images/door-11.jpg"
                alt="aluminium gates"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default doors
