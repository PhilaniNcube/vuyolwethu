import React from 'react'

const About = () => {
  return (
    <div className="py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto">
      <div className="relative">
        <div className="top-0 left-0 h-full w-full">
          <div
            className="flex h-full w-full flex-col items-center justify-center rounded-md border bg-gray-800 bg-opacity-70 bg-cover bg-center bg-no-repeat px-6 py-6 text-white bg-blend-multiply  sm:px-12 md:py-16"
            style={{ backgroundImage: 'url(/images/aluminium.jpg)' }}
          >
            <h2 className="text-3xl font-bold leading-7 lg:text-4xl lg:leading-9">
              About Us
            </h2>
            <p className="mx-auto mt-6 text-center text-xs font-normal leading-6 text-gray-200 md:text-base lg:w-8/12 xl:w-6/12">
              Vuyolwethu Aluminium is a division of Vuyolwethu Bay Trading Pty
              Ltd founded in 2016 by Vuyolwethu Sizila a young entrepreneur who
              has more than 10 years working experience in the aluminium
              industry. He started as a tradesman in 2010 working for an
              Aluminium company producing aluminium products such as the one
              Vuyolwethu Aluminium provides.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 sm:mt-7 lg:mt-14">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row">
          <div className="w-full lg:w-7/12 ">
            <h2 className="text-3xl font-bold leading-7 text-lime-800 lg:text-4xl lg:leading-9">
              What We Do
            </h2>
            <p className="mt-6 w-full text-base font-normal leading-6 text-gray-600 xl:w-9/12">
              We offer a variety of services such as aluminium windows, doors,
              sliding doors, folding security gates and burglars. We do repairs
              on aluminium, plumbing, painting, and electrical repairs.
            </p>
            <p className="mt-3 w-full text-base font-normal leading-6 text-gray-600 xl:w-9/12">
              We supply Nelson Mandela Bay and surrounding areas such as
              kariega,Humansdorp, Jeffreys Bay, as well as Buffalo City, Peddie
              AND Grahamstown.
            </p>
            <p className="mt-3 w-full text-base font-normal leading-6 text-gray-600 xl:w-9/12">
              Vuyolwethu Bay Trading Pty Ltd trading as Vuyolwethu Aluminium is
              a registered Aluminium manufacturing company based in Gqeberha
              formely known as Port Elizabeth. It is 100% black owned company
            </p>

            <h2 className="mt-10 text-3xl font-bold leading-7 text-lime-800 lg:text-4xl lg:leading-9">
              Our Vision and Mission:
            </h2>
            <p className="mt-3 w-full text-base font-normal leading-6 text-gray-600 xl:w-9/12">
              To turn your house into a home.
            </p>
            <h2 className="mt-10 text-3xl font-bold leading-7 text-lime-800 lg:text-4xl lg:leading-9">
              Our Goals
            </h2>

            <p className="mt-3 w-full text-base font-normal leading-6 text-gray-600 xl:w-9/12">
              To manufacture and provide quality designs and professional
              services to the province of the Eastern Cape and ultimately South
              Africa.
            </p>
            <p className="mt-3 w-full text-base font-normal leading-6 text-gray-600 xl:w-9/12">
              To serve and deliver a standard of service in Gqeberha and
              surrounding areas.
            </p>
            <p className="mt-3 w-full text-base font-normal leading-6 text-gray-600 xl:w-9/12">
              To empower local communities by creating employment opportunities
              and partnering with local FET colleges by offering internships to
              the youth in Gqeberha.
            </p>
            <p className="mt-3 w-full text-base font-normal leading-6 text-gray-600 xl:w-9/12">
              To bring about sustainable social impact through partnerships with
              relevant stakeholders and compete on a national level
            </p>

            <h2 className="mt-10 text-3xl font-bold leading-7 text-lime-800 lg:text-4xl lg:leading-9">
              Our Values
            </h2>

            <p className="mt-3 w-full text-base font-normal leading-6 text-gray-600 xl:w-9/12">
              Vuyolwethu Aluminium is committed to serve and deliver with
              integrity.
            </p>
          </div>
          <div className="mt-8 w-full cursor-pointer sm:mt-10 lg:mt-0 lg:w-5/12">
            <img
              className="block w-full rounded-lg object-cover"
              src="/images/gate.jpg"
              alt="Gate"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
