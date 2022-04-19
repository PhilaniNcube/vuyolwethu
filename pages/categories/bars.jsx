import React from 'react'

const bars = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="flex flex-col items-start justify-center py-12 px-4 md:px-6 lg:px-20 2xl:container 2xl:mx-auto">
        <h1 className="text-xl font-medium leading-6 text-gray-800 md:text-2xl md:leading-8 lg:text-4xl lg:leading-9">
          Alimunium Burglar Bars
        </h1>
        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-6 md:gap-6 lg:mt-8 lg:grid-cols-3 xl:gap-8">
          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/bars-2.jpg"
                alt="burglar bars"
                className="aspect-video  w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/bars-4.jpg"
                alt="burglar bars"
                className="aspect-video  w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/bars-6.jpg"
                alt="burglar bars"
                className="aspect-video  w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/bars-7.jpg"
                alt="burglar bars"
                className="aspect-video  w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/bars-3.jpg"
                alt="burglar bars"
                className="aspect-video  w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/bars-9.jpg"
                alt="burglar bars"
                className="aspect-video  w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default bars
