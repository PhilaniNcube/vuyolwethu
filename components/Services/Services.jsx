import React from 'react'
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
            We create employment opportunities in Gqeberha.We create quality
            designs. We conclude any job within allocated time frame.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <Carousel />
      </div>
    </section>
  )
}

export default Services
