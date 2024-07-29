import React from 'react'
import Contact from './_components/Contact'
import CallBooking from './_components/CallBooking';

const page = ({params}) => {
  const { links } = params;

  const renderContent = () => {
    if (links === '1') {
      return <Contact />;
    } else if (links[0] == '2'){
      return <CallBooking booking={links}/>
    }else {
      return <div>Content not found</div>; // Fallback for undefined links
    }
  };
  return (
    <div>
        {renderContent()}
    </div>
  )
}

export default page