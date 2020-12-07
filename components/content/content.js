import React from "react"
import { motion } from "framer-motion"

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start w-5/6 mb-6 md:mb-16">
      <div className="flex self-center">
        <motion.h1 className="font-roboto text-red-600 text-2xl  lg:text-4xl pb-3 font-extrabold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Di saat penuh
           <br />
          <span>ketidakpastian ini,</span>
          <br />
             kami pasti ada untukmu
        </motion.h1>
      </div>
      <motion.div className="flex w-58 h-auto bg-yellow-200 md:m-8 lg:m-0 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img src="/food.svg" className="w-58 lg:w-58 h-auto mx-auto" />
      </motion.div>
    </div>
  )
}

export default Content