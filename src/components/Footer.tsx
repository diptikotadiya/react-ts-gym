//import React from 'react'
import gymLogo from '../assets/gym-logo.png'
import { bttns } from './Header'
import {headerbttns} from './Header'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import WhatsApp from './WhatsApp';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className='bg-black flex flex-col lg:flex-row mt-2 lg:mt-5 p-5 lg:p-20  text-lg text-white font-light border-y-4 border-orange-500 space-y-10 lg:space-y-0 lg:space-x-36  '>

      {/* first section */}
      <div className='lg:w-1/3 flex flex-col space-y-5 pb-5 border-1 border-b border-orange-500 lg:border-none'>
        <div className='px-1 flex space-x-5'>
          <img src={gymLogo} className='w-[50px] h-[50px]'/>
          <div className='text-2xl text-orange-500 italic font-black'>Waves Gym</div>
        </div>
        <h3>
          504-505,<br/>
          Morya Estate Commercial PRM LTD,<br/> 
          Oshiwara Link Road,<br/> 
          Andheri West,<br/> 
          Mumbai Suburban,<br/> 
          Maharashtra, 400053.
        </h3>
        <h4>
          <b className='font-black'>Phone :</b>  +9122 6678 7970<br/>
          <b className='font-black'>Email :</b>  info@wavesgym.com
        </h4>
      </div>

      {/* Middle Section*/}
      <div className='lg:w-1/3 flex flex-col space-y-5 pb-5 border-1 border-b border-orange-500 lg:border-none  '>
        <div className='text-2xl text-orange-500 italic font-black'>Sitemap</div>
        {headerbttns.map((item:bttns,index:number) =>(
          <div key={index} onClick={() => navigate(item.slug)} className='text-lg text-white font-light cursor-pointer'>
            {item.name}
          </div>
        ))}
      </div>

      {/* right section */}
      <div className='lg:w-1/3 flex flex-col space-y-5 pb-5 lg:border-none'>
        <div className='text-2xl text-orange-500 italic font-black'>Follow Us</div>
        <div className='flex flex-row space-x-5'>
          <a 
          href='https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=120&lwc=1348092'
          target='_blank'>
            <FaSquareFacebook className='h-[50px] w-[50px] text-orange-500'/>
          </a>
          
          <FaInstagramSquare className=' h-[50px] w-[50px] text-orange-500'/>
        </div>
       </div>
       <WhatsApp/>
    </footer>
  )
}
 export default Footer