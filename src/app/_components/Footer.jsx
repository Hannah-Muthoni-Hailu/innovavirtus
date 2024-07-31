import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
                <Image src="/logo.svg" alt='logo' width={50} height={60}/>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                Build with us! Get your brand recognized online.
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="https://www.termsfeed.com/live/58409b5a-b4ad-4c91-bf04-3e220d06ceca"> Privay Policy </a>
                </li>

                <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Terms and Services </a>
                </li>

                <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Advertising Disclosure </a>
                </li>
                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer
