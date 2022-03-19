import React, { Fragment } from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
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
          <div className="flex items-center space-x-10">
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
              <Link href="/contact">
                <li className="text-md cursor-pointer text-gray-700 hover:text-lime-600 focus:text-lime-600">
                  Contact Us
                </li>
              </Link>
            </ul>
            <nav className="flex items-center space-x-3">
              <FaFacebook className="h-8 w-8 rounded-full text-xl text-lime-600" />
              <FaInstagram className="h-8 w-8 rounded-full bg-lime-600 p-1 text-xl text-white" />
              <FaTwitter className="h-8 w-8 rounded-full bg-lime-600 p-1 text-xl text-white" />
              <FaWhatsapp className="h-8 w-8 rounded-full bg-lime-600 p-1 text-xl text-white" />
            </nav>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}

export default Navbar
