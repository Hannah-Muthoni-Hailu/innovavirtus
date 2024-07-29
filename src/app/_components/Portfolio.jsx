"use client"
import React, { useState } from 'react'
import { portfolio } from '../data/portfolioItems'
import tours from '../../../public/tours-and-travels.png'

const Portfolio = () => {
  const [data] = useState(portfolio);

  return (
    <div className='my-5'>
      <h2 className='font-extrabold text-[45px] text-center my-10'>Our Work</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 justify-around items-center px-10'>
        {data.map((item,index) => (
          <article key={index} className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all ease-in-out hover:shadow-teal-400">
            <img
              alt=""
              src={item.image.src}
              className="h-56 w-full"
            />
    
            <div className="p-4 sm:p-6">
              <a href={item.link}>
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
              </a>
    
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {item.description}
              </p>
    
              <a href={item.link} target='_blank' className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Live Preview
    
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
        
      </div>
      
    </div>
  )
}

export default Portfolio