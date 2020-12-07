import Navbar, { penambahan } from "../components/Navbar/navbar"
import SwiperComp from "../components/Swiper/swiper"
import { motion } from "framer-motion"


const Product = () => {

  return (
    <div
      className="flex flex-col items-center pt-16 w-3/4 my-0 mx-auto pb-8">
      <Navbar />
      <SwiperComp />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 self-center gap-6 items-center justify-items-center mt-16 mx-4 md:mx-16 lg:mx-28">
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
    </div>
  )
}

export default Product
