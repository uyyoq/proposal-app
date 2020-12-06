import Link from 'next/link'
import NavMobile from './navMobile'

const Navbar = () => {

  return (
    <div className="flex w-full relative">
      <nav className="fixed mx-auto shadow top-0 right-0 inset-x-auto z-10 w-full py-4 bg-white">

        <div className="flex justify-between w-9/12 md:w-8/12 mx-auto my-auto px-4 md:px-8 lg:px-4">
          <div className="flex justify-start ml-0">

            <Link href="/">
              <div className="flex lg:mx-0">
                <a>
                  <img src="/hisana-logo.svg" className="w-16 h-auto mx-auto cursor-pointer" />
                </a>
              </div>
            </Link>

            <div className="hidden md:flex my-auto">
              <Link href="/product">
                <a className="ml-8 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Product</a>
              </Link>

              <Link href="/contact">
                <a className="ml-8 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Contact</a>
              </Link>

              <Link href="/chart">
                <a className="ml-8 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Chart</a>
              </Link>
            </div>

            {/* // Dropdown navbar menu */}
            <div className=" hidden md:flex my-auto ml-8">
              <div className="dropdown inline-block relative cursor-pointer">
                <button className="text-red-600 hover:text-red-700 font-extrabold inline-flex">Dropdown</button>
                <ul className="dropdown-menu absolute hidden text-red-600  shadow-2xl pt-1 bg-white">
                  <li><a className="rounded-t py-2 px-4 hover:font-semibold hover: block whitespace-no-wrap" >Menu 1</a></li>
                  <li><a className=" py-2 px-4 block hover:font-semibold hover: whitespace-no-wrap" >Menu 2</a></li>
                </ul>
              </div>
            </div>

          </div>

          <NavMobile />
        </div>

        <style jsx>
          {
            `
          .dropdown:hover .dropdown-menu {
            display: block;
            
          }
          `
          }

        </style>

      </nav>
    </div>

  )
}

export default Navbar