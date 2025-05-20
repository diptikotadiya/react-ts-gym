//import React from 'react'
import Container from "../Container"

import yoga from '../../assets/yoga2.jpg'
import zumba from '../../assets/zumba.jpg'

function Activities() {
  return (
    <Container>
        <div className='flex flex-col lg:flex-row p-10 lg:p-20'>
            {/* left section */}
            <div className='w-full lg:w-1/3 flex flex-col space-y-5 lg:space-y-10'>
                <div className="p-2 lg:p-5">
                    <div className='text-4xl lg:text-6xl font-bold italic '>
                        Yoga
                    </div>
                    <div className='text-xl lg:text-2xl font-bold my-5 lg:my-5'>
                        Join Us for a Fun and Engaging Fitness Experience!
                    </div>
                    <p className='text-m lg:text-lg font-light my-2'>
                        At Waves Gym, we believe that fitness should be fun and engaging. That's why we offer a wide range of activities to keep you motivated and excited about your fitness journey. From group classes to personal training sessions, we have something for everyone.
                    </p>
                    <p className='text-m lg:text-lg font-light my'>
                        Our experienced trainers are here to guide you every step of the way, ensuring that you get the most out of your workouts. Whether you're a beginner or an experienced athlete, our activities are designed to challenge and inspire you.
                    </p>
                </div>
            </div>
            {/* right section */}
            <div className={`p-2 lg:p-5 w-full lg:w-2/3 mt-5 lg:mt-0`}>
          <img src={yoga} className='overflow-hidden object-cover '/>
        </div>
        </div>
        <div className='flex flex-col lg:flex-row py-2 lg:py-5 px-10 lg:px-20'>
            {/* left section */}
            <div className={`p-2 lg:p-5 w-full lg:w-2/3 mt-5 lg:mt-0`}>
                <img src={zumba} className='overflow-hidden object-cover '/>
            </div>
            {/* right section */}
            <div className='w-full lg:w-1/3 flex flex-col space-y-5 lg:space-y-10'>
                <div className="p-2 lg:p-5">
                    <div className='text-4xl lg:text-6xl font-bold italic '>
                        Zumba
                    </div>
                    <div className='text-xl lg:text-2xl font-bold my-5 lg:my-5'>
                        Join Us for a Fun and Engaging Fitness Experience!
                    </div>
                    <p className='text-m lg:text-lg font-light my-2'>
                        At Waves Gym, we believe that fitness should be fun and engaging. That's why we offer a wide range of activities to keep you motivated and excited about your fitness journey. From group classes to personal training sessions, we have something for everyone.
                    </p>
                    <p className='text-m lg:text-lg font-light my'>
                        Our experienced trainers are here to guide you every step of the way, ensuring that you get the most out of your workouts. Whether you're a beginner or an experienced athlete, our activities are designed to challenge and inspire you.
                    </p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Activities