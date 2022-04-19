import React from 'react'

const windows = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="flex flex-col items-start justify-center py-12 px-4 md:px-6 lg:px-20 2xl:container 2xl:mx-auto">
        <h1 className="text-xl font-medium leading-6 text-gray-800 md:text-2xl md:leading-8 lg:text-4xl lg:leading-9">
          Aluminium Windows
        </h1>
        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-6 md:gap-6 lg:mt-8 lg:grid-cols-3 xl:gap-8">
          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/windows-7.jpg"
                alt="aluminium windows"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/windows-9.jpg"
                alt="aluminium windows"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/windows-12.jpg"
                alt="aluminium windows"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/windows-13.jpg"
                alt="aluminium windows"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-start space-y-3 md:space-y-4">
            <div className="w-full">
              <img
                src="/images/windows-8.jpg"
                alt="aluminium windows"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default windows
