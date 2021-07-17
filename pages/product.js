import Navbar, { penambahan } from "../components/Navbar/navbar"
import SwiperComp from "../components/Swiper/swiper"
import { motion } from "framer-motion"
import SectionCard from "../components/Section-Card/sectionCard"
import React from "react"


const Product = () => {

  return (
    <React.Fragment>
      <SwiperComp />
      
      <div className="w-full lg:w-10/12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </div>
      

      <div className="w-full lg:w-10/12 grid md:grid-cols-2 lg:grid-cols-3 self-center gap-6 items-center justify-items-center mt-16">
        <div>
          <motion.img  
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-auto h-auto" src="/bestMenu/bestmenu1.jpg" />
        </div>
        <div>
          <motion.img  
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-auto h-auto" src="/bestMenu/bestmenu2.jpg" />
        </div>
        <div>
          <motion.img  
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-auto h-auto" src="/bestMenu/bestmenu3.jpg" />
        </div>
        <div>
          <motion.img  
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-auto h-auto" src="/bestMenu/bestmenu4.jpg" />
        </div>
        <div>
          <motion.img  
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-auto h-auto" src="/bestMenu/bestmenu5.jpg" />
          </div>
        <div>
          <motion.img  
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-auto h-auto" src="/bestMenu/bestmenu6.jpg" />
        </div>
        <div>
          <motion.img  
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-auto h-auto" src="/bestMenu/bestmenu7.jpg" />
        </div>
        <div>
          <motion.img  
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-auto h-auto" src="/bestMenu/bestmenu8.jpg" />
        </div>
        <div className="md:hidden lg:grid">
          <motion.img  
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-auto h-auto" src="/bestMenu/bestmenu9.jpg" />
        </div>
      </div>

    </React.Fragment>
  )
}

export default Product
