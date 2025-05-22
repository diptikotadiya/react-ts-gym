//import React from 'react'
import Container from "../Container"
import personalTrainerPage from '../../assets/personalTrainerPage.png'

function PersonalTraining() {
  return (
    <div>
        <Container>
            <div>
              <img src={personalTrainerPage} className="w-full h-auto md:h-[300px] lg:h-[600px]"/>
            </div>
            <div className='text-4xl lg:text-6xl font-bold italic p-5 lg:p-10 '>
                Experience the Best Personal Training at Our Gym
            </div> 
            <div className=' px-5 lg:px-10 py-2 lg:py-5'>
                <div className="text-xl lg:text-2xl font-bold">Now Offering Online Personal Training Anywhere!</div>
                <p className=" text-m lg:text-lg font-light py-2 lg:py-5">
                    Our personal trainers are here to help you achieve your fitness goals,
                    whether you're looking to lose weight, build muscle, or improve your overall health.
                    With our personalized training programs, you'll receive one-on-one attention and
                    support to help you stay motivated and on track.
                </p>
                <p className="text-m lg:text-lg font-light py-2 lg:py-5">
                    Our trainers are experienced and certified, and they will work with you to create a
                    customized workout plan that fits your individual needs and goals. Whether you prefer
                    in-person training at our gym or online training from the comfort of your own home,
                    we've got you covered.
                </p>
            </div>

            <div className=' px-5 lg:px-10 py-2 lg:py-5'>
                <div className="text-xl lg:text-2xl font-bold py-2">
                    Why Choose Waves Gym Personal Trainers?
                </div>
                <div className='text-m lg:text-lg py-2 lg:py-5 font-light'>
                    <li className="py-2"><b>Customized Training Plans : </b> Our trainers will create a personalized workout plan just for you.</li>
                    <li className="py-2"><b>One-on-One Attention : </b> You'll receive individual attention and support from your trainer.</li>
                    <li className="py-2"><b>Flexible Scheduling : </b> We offer flexible scheduling options to fit your busy lifestyle.</li>
                    <li className="py-2"><b>Online Training : </b> Train from anywhere with our online personal training options.</li>
                    <li className="py-2"><b>Expert Guidance : </b> Our trainers are experienced and certified to help you reach your goals.</li>
                </div>
            </div>
                
        </Container>
    </div>
  )
}

export default PersonalTraining