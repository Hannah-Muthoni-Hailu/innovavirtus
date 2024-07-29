"use client"
import React from 'react'

const Services = () => {
  return (
    <div>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h2 className='font-extrabold text-[45px] text-center my-5'>Work With Us</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                FullStack Development
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700 h-[150px]">SEO optimized, responsive fullstack site with UI/UX design included</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 750$ </strong>
              </p>

              <a
                className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"
                href={'/pages/'+2+'Fullstack,Development'}
              >
                Book Service
              </a>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                Maintenance Services
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700 h-[150px]">Outsource your website maintenance to a team of seasoned experts for the lowest rates in the industry</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>

                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>

              <a
                className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"
                href={'/pages/'+2+'Maintenance,Services'}
              >
                Book Service
              </a>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                Wordpress Development
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700 h-[150px]">We will create a visually stunning, modern wordpress design and set it up with the best hosting service in the industry</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 500$ </strong>
              </p>

              <a
                className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"
                href={'/pages/'+2+'Wordpress,Development'}
              >
                Book Service
              </a>
            </div>          
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                Mobile - Website conversion
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700 h-[150px]">Convert your website into a mobile application and vice versa</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 350$ </strong>
              </p>

              <a
                className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"
                href={'/pages/'+2+'Website,Conversion'}
              >
                Book Service
              </a>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                AI chatbot intergration
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700 h-[150px]">Improve your website conversion rate by having an AI based chatbot to interact with your website's visitors</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 500$ </strong>
              </p>

              <a
                className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"
                href={'/pages/'+2+'Chatbot,Integration'}
              >
                Book Service
              </a>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                SEO optimization
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700 h-[150px]">Have your website appear on the first page of search engines and increase the number of eyes on your product</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 250$ </strong>
              </p>

              <a
                className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"
                href={'/pages/'+2+'SEI,optimization'}
              >
                Book Service
              </a>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
