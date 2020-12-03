import { useState } from 'react'
import List from './list';
import { useTransition, animated } from 'react-spring'

const NavMobile = () => {
  const [click, setclick] = useState(false)

  const handleClick = () => {
    setclick(!click);
  }

  const maskTransitions = useTransition(click, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const menuTransitions = useTransition(click, null, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  })

  return (
    <div  className="flex md:hidden">
      <div className="my-auto flex" >
        {/* {
          click ?
            (<img src="/cancel.svg" className="w-auto h-6 pt-2 cursor-pointer transisi" />) : (<img src="/menu.svg" className="w-auto h-6 cursor-pointer mt-1 transisi" />)
        } */}
        <img src="/menu.svg" className="w-auto h-6 cursor-pointer mt-1 transisi md:hidden" onClick={handleClick} />
      </div>

      {
        maskTransitions.map(({ item, key, props }) =>
          item &&
          <animated.div
            key={key}
            style={props}
            className="fixed left-0 w-full h-full z-50 md:hidden"
            onClick={() => setclick(false)}
          >
          </animated.div>
        )
      }

      {
        menuTransitions.map(({ item, key, props }) =>
          item &&
          <animated.div
            key={key}
            style={props}
            className="fixed bg-white top-0 left-0 w-3/5 h-full z-50 shadow"
          >
            <List />
          </animated.div>
        )
      }

    </div>
  )
}

export default NavMobile;