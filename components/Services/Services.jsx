import React from 'react'
import Link from 'next/link'
import Carousel from '../Services/Carousel'

const Services = () => {
  return (
    <section>
      <div className="bg-lime-600 text-white">
        <div className="mx-auto max-w-6xl py-12">
          <h1 className="text-4xl font-extralight uppercase text-white md:text-6xl">
            Why choose <span className="font-bold">Us?</span>
          </h1>
          <p className="text-md mt-4">
            We specialize in quality, affordable, custom designs that will make
            your home standout in your city. We conclude any job within
            allocated time frame.
          </p>

          <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/categories/doors" passHref>
              <span className="cursor-pointer bg-gray-800 py-3 text-center text-sm text-white hover:bg-gray-700">
                View Aluminium Doors
              </span>
            </Link>
            <Link href="/categories/windows" passHref>
              <span className="cursor-pointer bg-gray-800 py-3 text-center text-sm text-white hover:bg-gray-700">
                View Aluminium Windows
              </span>
            </Link>
            <Link href="/categories/bars" passHref>
              <span className="cursor-pointer bg-gray-800 py-3 text-center text-sm text-white hover:bg-gray-700">
                View Aluminium Burglar Bars
              </span>
            </Link>
            <Link href="/categories/gates" passHref>
              <span className="cursor-pointer bg-gray-800 py-3 text-center text-sm text-white hover:bg-gray-700">
                View Aluminium Foldable Security gates
              </span>
            </Link>

            <span className="cursor-pointer bg-gray-800 py-3 text-center text-sm text-white hover:bg-gray-700">
              Painting
            </span>
            <span className="cursor-pointer bg-gray-800 py-3 text-center text-sm text-white hover:bg-gray-700">
              Paiving
            </span>
            <span className="cursor-pointer bg-gray-800 py-3 text-center text-sm text-white hover:bg-gray-700">
              Building
            </span>
            <span className="cursor-pointer bg-gray-800 py-3 text-center text-sm text-white hover:bg-gray-700">
              Installation
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <h2 className="mt-4 text-lg font-bold text-gray-700 md:text-3xl">
          We also do installation of Aluminium fixtures
        </h2>
        <Carousel />
      </div>
      <div className="mx-auto mt-10 max-w-6xl">
        <h2 className="mb-6 text-xl font-medium">Terms and Conditions</h2>

        <ol className="max-w-[80%] list-decimal pl-3">
          <li className="text-sm text-gray-600">
            Manufacturing of our products can take 1 to 5 business days
            depending on the size of the job.
          </li>
          <li className="text-sm text-gray-600">
            50% deposit is required before we commence manufacturing any our
            products.
          </li>
          <li className="text-sm text-gray-600">
            The remaining 50% shall be paid on delivery. Delivery will take
            place once balance has been paid.
          </li>
          <li className="text-sm text-gray-600">
            Delivery around Gqeberha is R300, outside of Gqeberha will be
            charged based on distance. Price might change without notice.
          </li>
          <li className="text-sm text-gray-600">
            Sand and cement must be provided by the customer for installations.
          </li>
          <li className="text-sm text-gray-600">
            Water and necessary power must be provided by the customer on
            installation.
          </li>
          <li className="text-sm text-gray-600">
            Damage caused by the third party, contractor or animal will be the
            owners responsibility.
          </li>
          <li className="text-sm text-gray-600">
            No instruction given by the client shall be biding to us on
            production or installation site.
          </li>
          <li className="text-sm text-gray-600">
            Removal of protection tape and plastic is the responsibility of the
            owner.
          </li>
          <li className="text-sm text-gray-600">
            Any defect on our product caused by us will be repaired or replaced.
          </li>
          <li className="text-sm text-gray-600">
            Any defect caused by the client, the client will be charged to
            replace or repair.
          </li>
          <li className="text-sm text-gray-600">
            Any product manufactured by us remains our property until it is
            fully paid.
          </li>
          <li className="text-sm text-gray-600">
            Installation period depends on the size of the job and the process.
          </li>
          <li className="text-sm text-gray-600">We charge R150 for a quote.</li>
          <li className="text-sm text-gray-600">
            Failure to pay on due date as per our agreement a 5% interest fee
            will be charged on your next payment.
          </li>
          <li className="text-sm text-gray-600">
            All costs and charges incurred by us as a result of the customer
            failure to comply with the agreed terms of payment, including legal
            costs, and collection of commission shall be borne by the customer.
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Services
