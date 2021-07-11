import Link from 'next/link'


const List = (props) => {
  return (
    <div>
      <div className="my-auto flex justify-end mx-16 px-1 pt-6" >
        <img src="/cancel.svg" className="w-auto h-5 cursor-pointer md:hidden" onClick={props.onClicked} />
      </div>

      <div className="flex flex-col items-center py-8 absolute bg-white left-0 w-full font-padauk z-50 md:hidden">
        <Link href="/product">
          <a className="text-red-600 hover:text-red-700 font-extrabold cursor-pointer ">Product</a>
        </Link>

        <Link href="/contact">
          <a className="mt-3 text-red-600 hover:text-red-700 font-extrabold cursor-pointer ">Contact</a>
        </Link>

        <Link href="/chart">
          <a className="mt-3 text-red-600 hover:text-red-700 font-extrabold cursor-pointer ">Chart</a>
        </Link>

        <Link href="/covid-19">
          <a className="mt-3 text-red-600 hover:text-red-700 font-extrabold cursor-pointer ">Covid-19
              <span className="animate-ping absolute inline-flex h-2 w-2 ml-1 mb-1 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 ml-1 mb-1 bg-green-500"></span>
          </a>


        </Link>



        {/* <div className="flex my-auto mt-3 ">
          <div className="dropdown inline-block relative cursor-pointer">
            <button className="text-red-600 hover:text-red-700 font-extrabold inline-flex">Dropdown</button>
            <ul className="dropdown-menu absolute hidden text-red-600  shadow-2xl pt-1 bg-white">
              <li><a className="rounded-t py-2 px-4 hover:font-semibold hover: block whitespace-no-wrap" >Menu 1</a></li>
              <li><a className=" py-2 px-4 block hover:font-semibold hover: whitespace-no-wrap" >Menu 2</a></li>
            </ul>
          </div>
        </div> */}

      </div>



      <style jsx>
        {
          `
            .dropdown:hover .dropdown-menu {
              display: block;
            }

            .animate-ping {
              animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  
              @keyframes ping {
                75%, 100% {
                  transform: scale(2);
                  opacity: 0;
                }
              }
          `
        }

      </style>

    </div>
  )

}

export default List;