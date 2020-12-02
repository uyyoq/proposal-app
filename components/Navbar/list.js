import Link from 'next/link'


const List = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-4 absolute bg-white left-0 menu w-full h-1/2 z-50 shadow">
        <Link href="/product">
          <a className="text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Product</a>
        </Link>

        <Link href="/contact">
          <a className="mt-3 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Contact</a>
        </Link>

        <Link href="/chart">
          <a className="mt-3 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Chart</a>
        </Link>

        <div className="flex my-auto mt-3">
          <div className="dropdown inline-block relative cursor-pointer">
            <button className="text-red-600 hover:text-red-700 font-extrabold inline-flex">Dropdown</button>
            <ul className="dropdown-menu absolute hidden text-red-600  shadow-2xl pt-1 bg-white">
              <li><a className="rounded-t py-2 px-4 hover:font-semibold hover: block whitespace-no-wrap" >Menu 1</a></li>
              <li><a className=" py-2 px-4 block hover:font-semibold hover: whitespace-no-wrap" >Menu 2</a></li>
            </ul>
          </div>
        </div>

      </div>



      <style jsx>
        {
          `
            .menu {
              top: 67px;
              opacity: 1;
              transition: all 0.5s ease;
            }
            .dropdown:hover .dropdown-menu {
              display: block;
            }
         
          `
        }

      </style>

    </div>
  )

}

export default List;