'use client';

import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <header className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="#">
                    <span className="sr-only">Home</span>
                    <Image src="/logo.svg" alt='logo' width={50} height={60}/>
                    </a>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <a className="text-gray-500 transition hover:text-teal-500" href="#about"> About Us </a>
                        </li>

                        <li>
                        <a className="text-gray-500 transition hover:text-teal-500" href="#services"> Our Services </a>
                        </li>

                        <li>
                        <a className="text-gray-500 transition hover:text-teal-500" href="#portfolio"> Portfolio </a>
                        </li>

                        <li>
                        <a className="text-gray-500 transition hover:text-teal-500" href={'/pages/'+1}> Contact Us </a>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
