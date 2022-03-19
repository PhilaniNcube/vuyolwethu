import React from 'react'
import Link from 'next/link'

const Video = () => {
  return (
    <header className="relative -z-20 mb-12 flex min-h-screen items-center justify-center overflow-hidden">
      <div className="relative z-30 flex flex-col items-center justify-center rounded-xl p-5 text-2xl text-white">
        <div className="mx-auto max-w-6xl py-10 px-8 text-white md:px-0">
          <h1 className="text-4xl font-extralight text-white md:text-6xl">
            We turn your house <br />
            <span className="font-bold">into a home</span>
          </h1>
          <p className="text-md mt-6 w-4/6">
            Vuyolwethu Bay Trading is an emerging manufacturing company owned by
            Vuyolwethu Sizila .We manufacture aluminium window, doors and
            security gates. As a company, we always provide efficient and
            excellent quality service to ensure the growth of our company.
          </p>
          <Link href="/contact" passHref>
            <button className="text-md mt-6 rounded-lg bg-lime-600 px-10 py-2 font-medium">
              Learn more
            </button>
          </Link>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
            <div className="border-r-2 border-lime-600">
              <h2 className="text-3xl font-light uppercase">Values</h2>
              <p className="text-md mt-2">
                Vuyolwethu Bay Trading is committed to serve with integrity.
              </p>
            </div>
            <div className="px-0 md:px-8">
              <h2 className="text-3xl font-light uppercase">Goals</h2>
              <ul className="mt-2 list-disc pl-4 text-xs text-white">
                <li>
                  To manufacture and provide quality designsand professional
                  services to the province of the Eastern Cape
                </li>
                <li>To serve and deliver a standard of service in Gqeberha.</li>
                <li>
                  To empower local communities by creating employment
                  opportunities and partnering with local FET colleges by
                  offering internships to the youth in Gqeberha
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 min-h-full w-auto min-w-full max-w-none"
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  )
}

export default Video
