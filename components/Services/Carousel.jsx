import React, { useState } from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
  return (
    <div className="container mx-auto">
      <div className="flex h-full w-full items-center justify-center py-24 px-4 sm:py-8">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="hidden lg:block"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="relative flex w-full items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8"
                >
                  <Slide index={0}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/door-8.jpg"
                        alt="bars"
                        className="h-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/door.jpeg"
                        alt="door"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/door2.jpeg"
                        alt="doors"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/gate.jpg"
                        alt="sitting area"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="relative flex h-full w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/gallery-1.jpg"
                        alt="sitting area"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="relative flex h-full w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/gallery-2.jpg"
                        alt="sitting area"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="relative flex h-full w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/gallery-3.jpg"
                        alt="sitting area"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/gallery-4.jpg"
                        alt="sitting area"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/gallery-5.jpg"
                        alt="sitting area"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="hidden md:block lg:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="relative flex w-full items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8"
                >
                  <Slide index={0}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/window1.jpeg"
                        alt="bars"
                        className="h-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/door.jpeg"
                        alt="door"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/door2.jpeg"
                        alt="doors"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/gate.jpg"
                        alt="sitting area"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/window4.jpeg"
                        alt="window"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/window-bars-2.jpg"
                        alt="window bars"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/window-bars.jpg"
                        alt="sitting area"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="relative flex w-full items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="flex h-full w-full items-center justify-start transition duration-700 ease-out md:gap-6 lg:gap-8"
                >
                  <Slide index={0}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/window1.jpeg"
                        alt="bars"
                        className="h-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/door.jpeg"
                        alt="door"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/door2.jpeg"
                        alt="doors"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/gate.jpg"
                        alt="sitting area"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/window4.jpeg"
                        alt="window"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/window-bars-2.jpg"
                        alt="window bars"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                      <img
                        src="/images/window-bars.jpg"
                        alt="sitting area"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  )
}
