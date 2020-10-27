import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between bg-white shadow w-full top-0 right-0 z-10 p-4 md:px-20">
      <div className="flex">
        <div className="lg:mx-12">
          <img src="/hisana-logo.svg" className="w-16 h-auto mx-auto cursor-pointer" />
        </div>
        <div className="hidden lg:flex my-auto">
          <Link href="/bestMenu">
          <a className="mx-8  text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Best Menu</a>
          </Link>
          <Link href="/promotion">
          <a className="mx-8  text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Promotion</a>
          </Link>
        </div>
      </div>

      <div className="float-right my-auto">
        <img src="/menu.svg" className="w-auto h-6 cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navbar;