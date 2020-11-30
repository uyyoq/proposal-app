import Link from 'next/link'


const Nivbir = () => {
  return (

    <body>
      <div className="flex w-full">
        <nav className="nav flex flex-wrap items-center justify-between px-4">
        
          <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
            <img src="/hisana-logo.svg" className="fill-current h-8 mr-2 w-" />
          </div>

          {/* <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span
              className="navicon bg-grey-darkest flex items-center relative"
            ></span>
          </label> */}

          <div
            className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto"
          >
            <div className="border-t md:border-none">
                <Link href="/product">
                <a className="ml-8 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Product</a>
              </Link>
            </div>

            <div className="border-t md:border-none">
            <Link href="/contact">
                <a className="ml-8 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Contact</a>
              </Link>
            </div>

            <div className="border-t md:border-none">
              <Link href="/chart">
                <a className="ml-8 text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Chart</a>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* <style jsx>
        {
          `
            @media (max-width: 767px) {
              .navicon {
                width: 1.125em;
                height: .125em;
              }
            
              .navicon::before,
              .navicon::after {
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                transition: all .2s ease-out;
                content: '';
                background: #3D4852;
              }
            
              .navicon::before {
                top: 5px;
              }
            
              .navicon::after {
                top: -5px;
              }
            
              .menu-btn:not(:checked) ~ .menu {
                display: none;
              }
            
              .menu-btn:checked ~ .menu {
                display: block;
              }
            
              .menu-btn:checked ~ .menu-icon .navicon {
                background: transparent;
              }
            
              .menu-btn:checked ~ .menu-icon .navicon::before {
                transform: rotate(-45deg);
              }
            
              .menu-btn:checked ~ .menu-icon .navicon::after {
                transform: rotate(45deg);
              }
            
              .menu-btn:checked ~ .menu-icon .navicon::before,
              .menu-btn:checked ~ .menu-icon .navicon::after {
                top: 0;
              }
            }
            
          `
        }

      </style> */}
    </body>

  )
}

export default Nivbir;