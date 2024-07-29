import React from 'react';

const CallBooking = ({booking}) => {
    const bookingType = booking.substring(1).split("%2C");
    const partOne = bookingType[0];
    const partTwo = bookingType[1];

    const divStyles = {
        boxShadow: '1px 1px 20px #9DF7FB',
    };

    function handleSubmit(){
        setTimeout(()=>{
            alert('Your email has been sent')
        }, 1000);
        window.location.reload();
    }

  return (
    <div className="bg-gray-50 w-[90%] mx-[5%] my-5 rounded-lg p-10" style={divStyles}>
        <h2 className='text-center font-bold text-[30px] mb-5'>Book {partOne} {partTwo}</h2>
        <form action="">
            <input type="text" placeholder='Full name' required className='w-full h-[40px] px-4 rounded-lg border border-gray-400 my-5 shadow-md shadow-gray-300' />
            <input type="email" placeholder='Email' required className='w-full h-[40px] px-4 rounded-lg border border-gray-400 my-5 shadow-md shadow-gray-300' />
            <input type="tel" placeholder='Mobile number' required className='w-full h-[40px] px-4 rounded-lg border border-gray-400 my-5 shadow-md shadow-gray-300' />
            <textarea placeholder='Message...' className='w-full h-[150px] px-4 pt-2 rounded-lg border border-gray-400 my-5 shadow-md shadow-gray-300'></textarea>
            <div className="mt-4">
                <button
                onClick={handleSubmit}
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:bg-teal-500 hover:text-black"
                >
                Send Enquiry
                </button>
            </div>
        </form>
    </div>
  )
}

export default CallBooking