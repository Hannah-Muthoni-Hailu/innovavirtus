import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Building Products for the Web.
            <strong className="font-extrabold bg-gradient-to-r from-teal-300 via-blue-500 to-teal-900 bg-clip-text text-3xl text-transparent sm:block sm:text-5xl"> Increase Leads and Sales. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            We understand the need for businesses to build an online presence and our mission is to help you acheive that with the best web based products on the market.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-teal-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-teal-700 focus:outline-none focus:ring active:bg-white sm:w-auto"
              href="#services"
            >
              Book a Service
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-700 shadow hover:text-white hover:bg-teal-700 focus:outline-none focus:ring active:text-teal-700 sm:w-auto"
              href="#portfolio"
            >
              View our Work
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero