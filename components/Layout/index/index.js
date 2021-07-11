import React from "react";
import Navbar from "../../Navbar/navbar";

function Layout({ children }) {
  return (

    <div className="flex flex-col items-center pt-24 lg:pt-22 w-full lg:w-10/12 mx-auto pb-8 px-2">
		<Navbar />
		{children}
	</div>

  );
}

export default Layout;