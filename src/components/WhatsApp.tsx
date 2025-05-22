//import React from 'react'
import { BiLogoWhatsappSquare } from "react-icons/bi";
//import { Link } from 'react-router-dom';

function WhatsApp() {
  return (
    <div className='flex fixed right-1 bottom-1  '>
      <a
      href="https://wa.me/+9712958990?text=Hello%20I%20have%20a%20question%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      >
      <BiLogoWhatsappSquare  className='  w-[70px] h-[70px] text-green-500 z-10 rounded-2'/>
      </a>
    </div>
  )
}

export default WhatsApp
