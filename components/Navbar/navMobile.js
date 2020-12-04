import { useState } from 'react'
import List from './list';
import { useTransition, animated } from 'react-spring'

const NavMobile = (props) => {
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
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
  })

  return (
    <div className="flex md:hidden">
      <div className="my-auto flex" >
        <img src="/menu.svg" className="w-auto h-6 cursor-pointer md:hidden" onClick={handleClick} />
      </div>

      {
        maskTransitions.map(({ item, key, props }) =>
          item &&
          <animated.div
            key={key}
            style={props}
            className="z-50 md:hidden"
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
            className="fixed bg-white top-0 left-0 w-full h-1/2 z-50 shadow"
          >
            <List onClicked={handleClick} onSet={click}/>
          </animated.div>
        )
      }

    </div>
  )
}

export default NavMobile;