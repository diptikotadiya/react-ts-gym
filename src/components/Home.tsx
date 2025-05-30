//import {useState,useEffect} from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import excs1 from '../assets/excercise1.jpg'
import excs2 from '../assets/excercise2.jpg'
import personalTrainer from '../assets/personalTrainer.jpg'
//import maskImage from '../assets/maskImage.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from './Container'
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import { NextArrow, PrevArrow } from './CustomArrow'; // Adjust the import path as necessary
import Button from './Button'
import Input from './Input'
import {SubmitHandler, useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addMembers } from './store/memberSlice'



export type singleImageDiv = {
  image : string,
  title : string
}
type FormValuesType = {
  name : string,
  email : string,
  mobile : string,
  choose : string
}
function Home() {

 const dispatch = useDispatch();

  const { register,handleSubmit,reset } = useForm<FormValuesType>({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      choose: '',
    },
  });

 // Type provided here
 const onSubmit: SubmitHandler<FormValuesType> = (data) => {
  console.log(data); // This will log the form data
  dispatch(addMembers({...data}))
  reset()
};
 
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,//
  };

  const slider : string[] = [slider1, slider2,slider3]

  const imagesDiv : singleImageDiv[]  = [
    {
      image: image1,
      title: 'Body Composition Assessment'
    },
    {
      image: image2,
      title: 'Open 7 Days A Week'
    },
    {
      image: image3,
      title: 'Complimentary Valet Parking'
    },
    {
      image: image4,
      title: 'Clean, Comfortable and Safe'
    }
  ] 
  return (

    <div>

      <Container>
      
      {/* slider*/}
      
       <Slider {...settings} className='w-full h-auto md:h-[300px] lg:h-[800px]'>
        {slider.map((item,index) => (
          <div key={index}>
            <img src={item} className='w-full h-auto md:h-[300px] lg:h-[800px]'/>
          </div>
        ))}
      </Slider>
  
      {/* second black section */}

      <div className='bg-black text-white flex flex-col space-y-2 text-center p-5 lg:p-20'>
        <h2 className='text-l lg:text-2xl font-light'> 
          Experience the Fitness Wave
          At Mumbai's Friendliest Gym IN ANDHERI WEST!
        </h2>
        <h1 className='text-4xl lg:text-6xl font-bold italic'>
          Join Waves Gym Today
        </h1>
        {/* react-hook-form*/}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col lg:flex-row py-5 justify-center space-y-5 lg:space-y-0 lg:space-x-5'>
            {/* using Input Component */}
            <Input 
            placeholder='Name'
            //value={user.name} 
            {...register('name',
              
            )} 
             />
            <Input
            placeholder='Email'
            {...register('email',
             
            )} 
            // handleChange={(e)=>handleChange(e,'name')}
            />
            <Input 
            placeholder='Mobile'
            {...register('mobile',
              
            )} 
            // value={user.choose}
            />
            <Input 
            placeholder='Choose One'
            {...register('choose',
              
            )} 
            // value={user.choose}
            />
          </div>
          <div className='w-full'>
            <Button
            classname='lg:text-3xl font-bold'
            type ='submit'>
              Get Started
            </Button>
          </div>
        </form>
      </div>

      {/* third section */ }

      <div className='flex flex-col lg:flex-row px-5 py-10 lg:p-20'>
        {/*left */}
        <div className='w-full lg:w-3/5 flex flex-col space-y-5 lg:space-y-10'>
          <div className='flex flex-col space-y-5 lg:space-y-7'>
            <h5 className='text-lg font-light'>
              YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE. YOUR PERSONAL TRAINING SHOULD REFLECT THAT!
              </h5>
            <h2 className=' text-orange-600 text-4xl lg:text-6xl  font-bold italic rounded'>
              Certified Personal Trainers
            </h2>
            <p className='text-lg font-light'>
              Get fit fast with Waves Gym’s <b className='font-black'>certified personal trainers</b>. Enjoy cardio, strength, and weight training with top equipment. <b className='font-black'>Join now</b> and make ‘Impossible’ ‘I’m Possible’!
            </p>
            <div className='flex justify-center'>
              <Button type='button' classname=''>Book A Free Session</Button>
            </div>
          </div>
        {/*right */} 
        </div>
        <div className={`w-full lg:w-2/5 mt-5 lg:mt-0`}>
          <img src={personalTrainer} className='rounded-full  overflow-hidden object-cover '/>
        </div>
      </div>

      {/*forth section*/}
      <div className='relative flex flex-col lg:flex-row px-5 py-10 lg:p-20 bg-black text-white'>
        {/*left*/}
        <div className='w-full lg:w-2/5 flex flex-col space-y-5 lg:space-y-10'>
          <h5 className='text-lg font-light'>
            EXPERIENCE THE FITNESS WAVE
          </h5>
          <h2 className=' text-orange-600 lg:text-6xl text-4xl  font-bold italic rounded'>
            1500 Sq.ft Open Air CrossFit Studio
          </h2>
          <p className='text-lg font-light'>
            Our rooftop open air CrossFit studio will help you push your limits and get you to your fitness goals.
          </p>
        </div>

        {/*right*/}
        <div className='w-full lg:w-3/5 flex flex-col space-y-5 lg:space-y-10 p-10'>
          <div className='w-full h-auto lg:w-[400px] h-[500px] lg:absolute lg:top-[-80px] '>
            <img src={excs1} className='rounded-full'/>
          </div>
          <div className='w-full h-auto lg:w-[400px] lg:h-[500px] lg:absolute lg:top-[80px] lg:right-0'>
            <img src={excs2} className='rounded-full'/>
          </div>
        </div>
         </div>

         {/*fifth section*/}
          <div className='w-full flex flex-col p-5 lg:p-20 space-y-5 lg:space-y-7'>
            <h5 className='text-lg font-light'>
              EXPERIENCED AND INTERNATIONALLY CERTIFIED TARINERS
            </h5>
            <h2 className=' text-orange-600 text-4xl lg:text-6xl font-bold italic rounded'>
              The Best Fitness Experience
            </h2>
            <p className='text-lg font-light'>
              We’re committed to bringing you the best workout experience.
            </p>
            
            <div className='w-full  flex flex-col lg:flex-row '>
            {
            imagesDiv.map((item : singleImageDiv,index:number) =>(
              <div key={index} className='w-full lg:w-1/4 p-2 border-1px-gray-200 shadow-lg transition-transform duration-300 hover:scale-110'>
                <div  className='w-full'>
                  <img src={item.image} className='object-cover h-[250px] w-full rounded'/>
                </div>
                <div className='w-full h-[50px] mt-5 text-center text-lg font-normal'>
                  <h5>{item.title}</h5>
                </div>
              </div>
            ))
            }
            </div>
         </div>

        {/*sixth section*/}
        { /* <div className='w-full  flex flex-col lg:flex-row px-5 lg:px-20 lg:pb-20'>
          {
            imagesDiv.map((item : singleImageDiv,index:number) =>(
              <div key={index} className='w-full lg:w-1/4 p-2 border-1px-gray-200 shadow-lg'>
                <div  className='w-full'>
                  <img src={item.image} className='object-cover h-[250px] w-full rounded'/>
                </div>
                <div className='w-full h-[50px] mt-5 text-center text-lg font-normal'>
                  <h5>{item.title}</h5>
                </div>
              </div>
            ))
          }
         </div>*/}

         {/* seventh section*/}
         <div className='bg-black w-full py-10 px-5 lg:p-20 '>
            <h5 className=' text-orange-600 text-4xl lg:text-6xl font-bold italic rounded'>
              Experience The Waves Gym
            </h5>
           
            <h3 className='text-lg font-light text-white pt-5'>
              Experience The Best Group Exercise Classes In Mumbai
            </h3>
            

         </div>
      </Container>
  </div>
  )
}

export default Home
