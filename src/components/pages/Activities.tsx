import Container from "../Container";
import yoga from '../../assets/yoga2.jpg';
import zumba from '../../assets/zumba.jpg';
import {motion} from 'framer-motion';

function Activities() {
  return (
    <Container>

      {/* Yoga Section - image right on large screens */}
      <div className="flex flex-col lg:flex-row-reverse items-center p-5 lg:px-20 lg:py-10 gap-5 lg:gap-10">
        <div className="w-full lg:w-1/2">
          <img
            src={yoga}
            className="w-full h-[200px] lg:h-[500px] object-cover rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-110"
            alt="Yoga"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-orange-600 text-4xl lg:text-6xl font-bold italic">
            Yoga
          </h2>
          <p className="text-lg font-light lg:py-5 text-justify">
            Experience the benefits of our Yoga classes designed for all levels. Improve your flexibility, balance, and strength while reducing stress. Join our certified instructors for a rejuvenating session that nurtures both body and mind.
          </p>
        </div>
      </div>

      {/* Zumba Section - image left on large screens */}
      <div className="flex flex-col lg:flex-row items-center p-5 lg:px-20 lg:py-10 gap-10">
        <div className="w-full lg:w-1/2">
          <motion.img
            src={zumba}
            className="w-full h-[200px] lg:h-[500px] object-cover rounded-full shadow-lg "
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            transition={{duration:0.3}}
            alt="Zumba"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-orange-600 text-4xl lg:text-6xl font-bold italic">
            Zumba
          </h2>
          <p className="text-lg font-light lg:py-5 text-justify">
            Dance your way to fitness with our energetic Zumba sessions. Burn calories, boost your mood, and enjoy the rhythm with our expert-led classes designed for fun and fitness.
          </p>
        </div>
      </div>

    </Container>
  );
}

export default Activities;
