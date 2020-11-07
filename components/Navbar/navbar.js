import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex w-11/12 md:w-full">
      <nav className="fixed mx-auto shadow top-0 inset-x-auto z-10 w-full py-4 bg-white" >

        <div className="flex justify-between w-11/12 lg:w-3/4 mx-auto my-auto px-4hx">
          <div className="flex justify-start ml-0">
            <div className="flex lg:mx-0">
              <img src="/hisana-logo.svg" className="w-16 h-auto mx-auto cursor-pointer" />
            </div>

            <div className="hidden lg:flex my-auto">
              <Link href="/promotion">
                <a className="ml-8 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Promotion</a>
              </Link>
              <Link href="/contact">
                <a className="ml-8 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Contact</a>
              </Link>
            </div>
          </div>

          <div className="my-auto">
            <img src="/menu.svg" className="h-6 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;