import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <nav className="fixed bg-white shadow w-full top-0 z-10 p-4">

        <div className="flex justify-between w-3/4 mx-auto my-auto">
          <div className="flex justify-start ml-0">
            <Link href="/">
              <div className="flex lg:mx-0">
                <a>
                  <img src="/hisana-logo.svg" className="w-16 h-auto mx-auto cursor-pointer" />
                </a>
              </div>
            </Link>

            <div className="hidden lg:flex my-auto">
              <Link href="/contact">
                <a className=" mx-8 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Contact</a>
              </Link>
              <Link href="/product">
                <a className=" text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Product</a>
              </Link>
            </div>
          </div>

          <div className="my-auto">
            <img src="/menu.svg" className="w-auto h-6 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;

