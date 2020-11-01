import Navbar, {penambahan} from "../components/Navbar/navbar"
import { motion } from "framer-motion"


const Product = () => {
  
  return (
    <div 
    className="flex items-center pt-24 w-3/4 my-0 mx-auto "
    >
      <Navbar />
    
      <div className="grid md:grid-cols-2  lg:grid-cols-3 self-center gap-6 items-center justify-items-center my-0 mx-auto">
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu1.jpg" alt="bestMenu-img" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu2.jpg" alt="bestMenu-img" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu3.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu4.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu5.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu6.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu7.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu8.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu9.jpg" alt="bestMenu-img"/>
        </div>
      </div>
    </div>
  )
}

export default Product
