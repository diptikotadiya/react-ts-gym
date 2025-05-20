//import React from 'react'
import Container from "../Container"
import coldWater from '../../assets/coldwaterTherapy.jpg'


function RecoveryTherpy() {
  return (
   <Container>
    <div>
        <img src={coldWater}  className="w-full md:h-[300px] lg:h-[600px] "/>
        <div className='text-4xl lg:text-6xl font-bold italic p-5 lg:p-10'>
            Optimize Your Performance & Accelerate Healing
        </div> 
        <div className=' px-5 lg:px-10 py-2 lg:py-5'>
                <p className="text-xl lg:text-2xl font-bold">Why Choose Our Recovery Therapy?</p>
                <p className=" text-m lg:text-lg font-light py-2 lg:py-5">
                    Our comprehensive Nomatec Package covers arms, hips, and legs therapy to ensure your entire body benefits. By improving circulation and reducing muscle tension, your recovery will never feel more effective or revitalizing.
                </p>
                <p className="text-xl lg:text-2xl font-bold">Ready to Feel the Difference?</p>
                <p className="text-m lg:text-lg font-light py-2 lg:py-5">
                    Book your appointment today and experience the rejuvenating effects of our recovery therapy. Whether you're an athlete looking to enhance performance or someone seeking relief from daily stress, our therapy is designed for everyone.
                </p>
        </div>
         <div className=' px-5 lg:px-10 py-2 lg:py-5'>
                <p className="text-orange-600 text-2xl lg:text-4xl font-bold italic">Single Session or Shareable Package—It’s Your Call</p>
                <div className='text-m lg:text-lg py-2 lg:py-5 font-light'>
                    <li className="py-2"><span className="font-bold">Single Session (₹499)  :  </span> Perfect if you need a quick recovery boost or want to try our therapy for the first time.</li>
                    <li className="py-2"><span className="font-bold">10-Session Package (₹1499)  :  </span> Share with a friend or use all on your own for continuous, convenient recovery—at an unbeatable value.</li>
                    <li className="py-2"><span className="font-bold">Duration  :  </span> 30-minute session to boost circulation, alleviate soreness, and improve flexibility.</li>
                    <li className="py-2"><span className="font-bold">Flexibility  :  </span> Split into two 15-minute sessions within a week</li>
            
                </div>
        </div>
    </div>
   </Container> )
}

export default RecoveryTherpy