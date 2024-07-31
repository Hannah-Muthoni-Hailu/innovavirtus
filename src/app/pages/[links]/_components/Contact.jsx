'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const divStyles = {
    boxShadow: '1px 1px 20px #9DF7FB',
  };

  const form = useRef();
  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);
    console.log("Selected Service:", selectedService);

    emailjs
      .sendForm('service_wmto8vr', 'template_19lmzza', form.current, {
        publicKey: 'CkbflwMcZCLfFfFh4',
      })
      .then(
        () => {
          alert('Your email has been sent!');
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('An error occurred!')
        },
      );
  };

  const getLabelClassName = (service) => {
    return `block w-full cursor-pointer rounded-lg border p-3 text-gray-600 hover:border-black ${
      selectedService === service ? 'border-black bg-black text-white' : 'border-gray-200'
    }`;
  };

  return (
    <div>
      <section className="bg-gray-50 w-[90%] mx-[5%] my-5 rounded-lg" style={divStyles}>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8">
            <div className="w-full">
              <h2 className='text-center font-bold text-[30px]'>We're on standby to answer all your questions</h2>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="inquiry"
                      className={getLabelClassName('inquiry')}
                      tabIndex="0"
                    >
                      <input 
                        className="sr-only" 
                        id="inquiry" 
                        type="radio" 
                        name="service" 
                        value="inquiry" 
                        onChange={handleServiceChange}
                      />
                      <span className="text-sm"> Inquiry </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="order"
                      className={getLabelClassName('order')}
                      tabIndex="0"
                    >
                      <input 
                        className="sr-only" 
                        id="order" 
                        type="radio" 
                        name="service" 
                        value="order" 
                        onChange={handleServiceChange}
                      />
                      <span className="text-sm"> Order </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="complaint"
                      className={getLabelClassName('complaint')}
                      tabIndex="0"
                    >
                      <input 
                        className="sr-only" 
                        id="complaint" 
                        type="radio" 
                        name="service" 
                        value="complaint" 
                        onChange={handleServiceChange}
                      />
                      <span className="text-sm"> Complaint </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:bg-teal-500 hover:text-black"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact
