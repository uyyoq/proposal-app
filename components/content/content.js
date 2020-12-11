import React from "react"
import { motion } from "framer-motion"
import { useLottie } from "lottie-react";
import burgerAnimation from "./burgerAnimation.json";


const Content = () => {
  const options = {
    animationData: burgerAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="flex flex-col md:flex-row justify-between w-5/6 md:w-3/4 lg:w-5/6 mb-8">
      <div className="flex flex-col text-center md:text-left self-end">
        <motion.h1 className="font-poppins text-red-600 text-2xl md:text-4xl lg:text-6xl pb-3 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Lokal 
          <br />
          bumbunya,
           <br />
           International
           <br />
            Kualitasnya
        </motion.h1>
        <motion.p
          className="font-padauk text-yellow-600 text-sm md:text-md lg:text-xl pb-3 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hisana menyajikan makanan segar dan lezat. <br />
           daging yang juicy dan kulit yang crispy</motion.p>
      </div>
      <motion.div className="flex w-92 h-auto lg:mx-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {View}
        {/* <img src="/food.svg" className="w-58 lg:w-58 h-auto mx-auto" /> */}
      </motion.div>
    </div>
  )
}

export default Content