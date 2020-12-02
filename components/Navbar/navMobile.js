const { defaults } = require("autoprefixer");
import { useState } from 'react'
import List from './list';



const NavMobile = () => {
  const [click, setclick] = useState(false)

  const handleClick = () => {
    setclick(!click);
  }

  let menu

  if (click) {
    menu = <div><List /></div>
  }
  return (
    <div>
      <div className="my-auto flex lg:hidden" onClick={handleClick} >
        {
          click ?
          (<img src="/cancel.svg" className="w-auto h-6 pt-2 cursor-pointer" />) :   (<img src="/menu.svg" className="w-auto h-6 cursor-pointer mt-1"/>)
        }
      </div>

      {menu}
    </div>
  )
}

export default NavMobile;