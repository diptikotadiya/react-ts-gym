import  { useState } from 'react'
import gymlogo from '../assets/gym-logo.png'
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export type bttns = {
  name : string,
  slug : string
}
export const headerbttns : bttns[] =  [
  {name : 'Home',
     slug : '/'
  },
  {
    name: 'Personal Training',
    slug: '/personal-training'
  },
  {
    name : 'Activities',
    slug : '/activities'
  },
  {
    name : 'Recovery Therapy',
    slug : '/recovery-therapy'
   
  }
]
 const Header = ()=>{
  const navigate = useNavigate();
  const [flyout,setFlyout] = useState<boolean>(false)
  //const [hamMenu,setHamMenu] = useState(false)
  
  return (
  <div className='fixed left-0 top-0 w-full bg-black text-white p-2 lg:p-5 flex flex-row justify-between z-20'>
    
    {/*left section*/}
    <div onClick = {()=>{navigate('/')}}className='flex flex-row'>
      <img src={gymlogo} className='size-[50px] lg:w-[70px] lg:h-[70px] '/>
    </div>

    {/*right section*/}
    <div className='flex flex-row my-auto'>
      <div className={`${flyout ? 'block' : 'hidden'} absolute top-[66px] right-0 bg-white text-black  w-full  lg:static lg:bg-black lg:text-white lg:flex lg:flex-row  `}>
        {headerbttns.map((item : bttns,index:number )=> (
          <div key={index} className='flex lg:mr-5 text-lg  border-b-2 lg:border-0 p-2 lg:text-xl  font-light cursor-pointer' onClick={()=>{navigate(item.slug);setFlyout(!flyout)}}>
            {item.name}
          </div>
        ))}
      </div>
      {/* menu icon*/}
      <div onClick={()=>setFlyout(!flyout)}>
        <IoMdMenu className='lg:hidden w-[30px] h-[30px]'/>
      </div>
    </div>
  </div>
  )
}

export default Header

