import Navbar from "../components/Navbar/navbar"
import React from "react"
import { motion } from "framer-motion"
import Content from "../components/content/content"

// import axios from "axios";

const Home = () => {

  // React.useEffect(() => {


  //   const newPost = {
  //     name: "morpheus",
  //     job: "leader",
  //     id: "26",
  //     createdAt: "2020-11-12T04:18:06.174Z"
  //   };

  //   const sendPostRequest = async () => {
  //     try {
  //       const res = await axios.post('https://reqres.in/api/users/2', newPost);

  //       if (res.status === 201 && res.data === "success") {

  //       }

  //     } catch (err) {
  //       // Handle Error Here
  //       console.error(err);

  //     }

  //   };

  //   sendPostRequest();

  // }, [])

  return (
    <div className="flex flex-col items-center pt-24 w-3/4 mx-auto pb-4">
      <Navbar />

        <Content />
      
      {/* <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, color: "red" }}
        transition={{ delay: 0.2 }}
        className="mx-auto text-center font-bold p-4">Enak,Lezat,Bergizi</motion.h1> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 self-center gap-6 items-center justify-items-center mx-4 md:mx-16 lg:mx-28">
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
      </div>
    </div >

  )

}

export default Home;