import React from "react"
import { motion } from "framer-motion"

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row item-start justify-start w-5/6 md:w-3/4 lg:w-5/6 mb-6 md:mb-12">
      <div className="flex self-center justify-center">
        <motion.h1 className="font-staatliches tracking-widest text-red-600 text-2xl  lg:text-4xl pb-3 font-extrabold"
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
      <motion.div className="flex w-58 h-auto bg-yellow-200 lg:mx-0 rounded"
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