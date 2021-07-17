import Navbar from "../components/Navbar/navbar"
import React from "react"
import { motion } from "framer-motion"
import Content from "../components/content/content"

// import axios from "axios";

const Home = () => {

  return (
    <React.Fragment>

      <Content />

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 self-center gap-6 items-center justify-items-center w-10/12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-auto h-auto" src="/promotion/promotion1.jpg" />
        </div>
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-auto h-auto" src="/promotion/promotion2.jpg" />
        </div>
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-auto h-auto" src="/promotion/promotion3.jpg" />
        </div>
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-auto h-auto" src="/promotion/promotion4.jpg" />
        </div>
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-auto h-auto" src="/promotion/promotion5.jpg" />
        </div>
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-auto h-auto" src="/promotion/promotion6.jpg" />
        </div>
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-auto h-auto" src="/promotion/promotion7.jpg" />
        </div>
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-auto h-auto" src="/promotion/promotion8.jpg" />
        </div>
        <div className="md:hidden lg:grid">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-auto h-auto" src="/promotion/promotion9.jpg" />
        </div>
      </motion.div>

    </React.Fragment>

  )

}

export default Home;