import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <header className="bg-white  shadow">
        <nav className="mx-auto flex max-w-6xl items-center px-6 md:h-20 lg:justify-between lg:px-0">
          <Link href="/" passHref>
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-16 cursor-pointer object-cover"
            />
          </Link>
          <div className="ml-12 flex flex-1 items-center justify-between">
            <ul className="hidden items-center font-semibold md:flex md:space-x-3">
              <Link href="/">
                <li className="text-md cursor-pointer text-gray-700 hover:text-lime-600 focus:text-lime-600">
                  Home
                </li>
              </Link>
              <Link href="/services">
                <li className="text-md cursor-pointer text-gray-700 hover:text-lime-600 focus:text-lime-600">
                  Services
                </li>
              </Link>
              <Link href="/products">
                <li className="text-md cursor-pointer text-gray-700 hover:text-lime-600 focus:text-lime-600">
                  Our Products
                </li>
              </Link>
              <Link href="/about">
                <li className="text-md cursor-pointer text-gray-700 hover:text-lime-600 focus:text-lime-600">
                  About Us
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-md cursor-pointer text-gray-700 hover:text-lime-600 focus:text-lime-600">
                  Contact Us
                </li>
              </Link>
            </ul>
            <nav className="flex items-center space-x-3">
              <Link
                href="https://www.facebook.com/Vuyolwethu-Aluminium-108004841649868/"
                passHref
              >
                <FaFacebook className="h-8 w-8 rounded-full text-xl text-lime-600" />
              </Link>
              <Link
                href="https://wa.me/27818337421?text=I'm%20interested%20in%20your%20products"
                passHref
              >
                <FaWhatsapp className="h-8 w-8 rounded-full bg-lime-600 p-1 text-xl text-white" />
              </Link>
            </nav>
          </div>

          <button
            onClick={() => setShow(!show)}
            className="flex items-center md:hidden"
          >
            {!show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          <div>
            {/*MOBILE USER MENU STARTS */}

            {show && (
              <div className="absolute top-16 left-4 z-50 flex w-1/2 min-w-[150px] max-w-[300px] flex-col space-y-2 rounded-sm bg-gray-50 px-4 py-4 shadow-lg md:hidden">
                <Link href="/">
                  <a
                    onClick={() => setShow(false)}
                    className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-400"
                  >
                    Home
                  </a>
                </Link>
                <Link href="/services">
                  <a
                    onClick={() => setShow(false)}
                    className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-400"
                  >
                    Services
                  </a>
                </Link>
                <Link href="/products">
                  <a
                    onClick={() => setShow(false)}
                    className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-400"
                  >
                    Our Products
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    onClick={() => setShow(false)}
                    className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-400"
                  >
                    About Us
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    onClick={() => setShow(false)}
                    className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-400"
                  >
                    Contact Us
                  </a>
                </Link>
              </div>
            )}

            {/*MOBILE USER MENU ENDS */}
          </div>
        </nav>
      </header>
    </Fragment>
  )
}

export default Navbar
