'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const CallBooking = ({ booking }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const bookingType = booking.substring(1).split('%2C');
  const partOne = bookingType[0];
  const partTwo = bookingType[1];

  const divStyles = {
    boxShadow: '1px 1px 20px #9DF7FB',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      service: `${partOne} ${partTwo}`,
    };

    emailjs.send(
      'service_wmto8vr', 
      'template_19lmzza', 
      emailParams, 
      'CkbflwMcZCLfFfFh4'
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Your email has been sent');
        window.location.reload();
      },
      (error) => {
        console.log(error.text);
        alert('An error occurred while sending the email');
      }
    );
  };

  return (
    <div className="bg-gray-50 w-[90%] mx-[5%] my-5 rounded-lg p-10" style={divStyles}>
      <h2 className="text-center font-bold text-[30px] mb-5">Book {partOne} {partTwo}</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          required
          className="w-full h-[40px] px-4 rounded-lg border border-gray-400 my-5 shadow-md shadow-gray-300"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full h-[40px] px-4 rounded-lg border border-gray-400 my-5 shadow-md shadow-gray-300"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile number"
          required
          className="w-full h-[40px] px-4 rounded-lg border border-gray-400 my-5 shadow-md shadow-gray-300"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message..."
          className="w-full h-[150px] px-4 pt-2 rounded-lg border border-gray-400 my-5 shadow-md shadow-gray-300"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
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
  );
};

export default CallBooking;
