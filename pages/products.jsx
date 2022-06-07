import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Head from 'next/head'

const Products = () => {
  const [show, setShow] = useState('')
  const showText = (slide) => {
    setShow(slide)
  }

  const hideText = () => {
    setShow('')
  }

  return (
    <div className="container mx-auto w-full py-12 px-4 md:px-6 md:pl-6">
      <Head>
      <title>Products | Vuyolwethu Aluminium</title>
        <meta charSet='UTF-8' />
        <meta name="description" content="We replace your old wooden windows with new aluminium windows. Your old wooden door with our beautiful aluminium doors Secure your home with our folding security gates and aluminium burglar bars"/>
        <meta name="keywords" content="aluminium windows, doors, security gates, building, painting, paving"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col items-center lg:flex-row lg:space-x-12 2xl:space-x-0">
        <div className="lg:w-2/5 2xl:w-3/12">
          <p className="text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-10">
            Our Product Offerings
          </p>
          <p className="mt-4 text-base font-normal leading-5 text-gray-600 xl:leading-6">
            We replace your old wooden windows with new aluminium windows. Your
            old wooden door with our beautiful aluminium doors Secure your home
            with our folding security gates and aluminium burglar bars
          </p>

          <span className="mt-10 flex flex-row items-center justify-center space-x-2 py-3 text-lime-700 hover:text-gray-600">
            <p className="text-base font-semibold leading-none">
              Explore collection
            </p>
            <svg
              className="fill-stroke mt-0.5"
              width="28"
              height="8"
              viewBox="0 0 28 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464466C23.9763 0.269204 23.6597 0.269204 23.4645 0.464466C23.2692 0.659728 23.2692 0.976311 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.7308 23.9763 7.7308 24.1716 7.53553L27.3536 4.35355ZM0 4.5H27V3.5H0V4.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div className="w-full lg:w-9/12 lg:pl-0">
          <div className="mt-8 lg:mt-16">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              centeredSlides={true}
              loop={true}
              navigation={true}
              className="mySwiper"
              speed={500}
            >
              <SwiperSlide>
                <div className="carousel-cell">
                  <div className="relative h-full md:w-full">
                    <img
                      src="/images/one.jpg"
                      alt="window"
                      className="object-fit h-full w-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-cell">
                  <div className="relative h-full md:w-full">
                    <img
                      src="/images/door.jpeg"
                      alt="door"
                      className="object-fit h-full w-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-cell">
                  <div className="relative h-full md:w-full">
                    <img
                      src="/images/bars.jpeg"
                      alt="bars"
                      className="object-fit h-full w-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-cell">
                  <div className="relative h-full md:w-full">
                    <img
                      src="/images/four.jpg"
                      alt="window"
                      className="object-fit h-full w-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-cell">
                  <div className="relative h-full md:w-full">
                    <img
                      src="/images/gate.jpg"
                      alt="gate"
                      className="object-fit h-full w-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-cell">
                  <div className="relative h-full md:w-full">
                    <img
                      src="/images/six.jpg"
                      alt="window"
                      className="object-fit h-full w-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-cell">
                  <div className="relative h-full md:w-full">
                    <img
                      src="/images/seven.jpg"
                      alt="window"
                      className="object-fit h-full w-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <style>
          {`
            .carousel-cell {
                width: 100% !important;
                height: 600px !important;
                margin-right: 0px;
            }
			.swiper-slide {
				height: 600px !important;
				width: 100% !important;
			}

			.swiper-button-prev, .swiper-button-next {
				width: 50px;
				height: 50px;
				background-color: white;
				border-radius: 100%;
				top: 50% !important;
                left: 80% !important;
			}
			.swiper-button-prev {
				display: none !important;
			}
			:root {
				--swiper-theme-color: #27272a !important;
				--swiper-navigation-size: 25px;
				font-weight: 900;
			}
			.swiper-button-next:hover {
                background-color: #27272a !important;
                color: white !important;
            }

			.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
				opacity:1
			}

            @media (min-width: 600px) {
				.carousel-cell {
					width: 404px !important;
					height: 582px !important;
					margin-right: 30px !important;				
            	}
				.swiper-slide {
					margin-right: 30px !important;
					height: 582px !important;
					width: 404px !important;
				}
            }

			@media (min-width: 1024px) {
				.carousel-cell {
					width: 404px !important;
					height: 582px !important;
					margin-right: 30px !important;	
				}
				.swiper-slide {
					margin-right: 30px !important;
					height: 582px !important;
					width: 404px !important;
				}
            }
			
			`}
        </style>
      </div>
    </div>
  )
}

export default Products
