import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Video = () => {
  const router = useRouter()

  return (
    <header className="relative mb-12 flex min-h-screen items-center justify-center overflow-hidden">
      <div className="relative z-30 flex h-full flex-col items-center justify-center rounded-xl p-5 text-2xl text-white">
        <div className="mx-auto max-w-6xl py-10 px-8 text-white md:px-0">
          <h1 className="text-4xl font-extralight text-white md:text-6xl">
            We turn your house <br />
            <span className="font-bold">into a home</span>
          </h1>
          <p className="md:text-md mt-6 mb-4 w-4/6 text-sm">
            Vuyolwethu Aluminium is an emerging manufacturing company. We
            manufacture and install aluminium windows, doors, foldable security
            gates and burglars. As a company, we always provide efficient and
            excellent quality service to ensure the growth of our company.
          </p>

          <Link href="/contact">
            <a className="z-50 cursor-pointer rounded-lg bg-lime-600 px-10 py-2 text-base font-medium">
              Learn More
            </a>
          </Link>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
            <div className="border-r-2 border-lime-600">
              <h2 className="text-3xl font-light uppercase">Values</h2>
              <p className="md:text-md mt-2 text-sm">
                Vuyolwethu Bay Trading is committed to serve with integrity.
              </p>
            </div>
            <div className="px-0 md:px-8">
              <h2 className="text-sm font-light uppercase md:text-3xl">
                Goals
              </h2>
              <ul className="mt-2 list-disc pl-4 text-xs text-white">
                <li>
                  To manufacture and provide quality design and professional
                  service to the province of the Eastern Cape and ultimately
                  South Africa.
                </li>
                <li>
                  To serve and deliver a high standard of service quality in
                  Gqeberha and surrounding areas.
                </li>
                <li>
                  To empower local communities by creating employment
                  opportunities and partnering with local FET colleges by
                  offering internships to the youth in Gqeberha.
                </li>
                <li>
                  To bring about sustainable social impact through partnership
                  with relevant stakeholders and compete on a nation level.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        autoPlay
        loop
        muted
        className="pointer-events-none absolute z-10 h-full w-auto min-w-full max-w-none"
      >
        <img
          src="/images/screen.png"
          alt="background image"
          className="h-full w-full object-cover"
        />
      </div>
    </header>
  )
}

export default Video
