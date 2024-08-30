import React from 'react'
// import { FaSearch } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { BsCart } from "react-icons/bs";

function Header() {
  return (
<header className="text-white body-font px-10" style={{background: "#333333"}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex flex-col title-font font-medium items-center text-white mb-4 md:mb-0">
      
      {/* <p className=" text-3xl">PURE CYCLES</p>
        <span className='text-xs'>Los Angeles, California</span> */}
        <img src='../../images/Pure_Cycles.png' className='w-48' alt='Pure Cycle Logo'/>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 font-bold text-md hover:text-gray-900 hover:bg-white p-2 hover:underline items-stretch">Single Speed</a>
      <a className="mr-5 font-bold text-md hover:text-gray-900 hover:bg-white p-2 hover:underline ">City Bikes</a>
      <a className="mr-5 font-bold text-md hover:text-gray-900 hover:bg-white p-2 hover:underline ">Commuter Bikes</a>
      <a className="mr-5 font-bold text-md hover:text-gray-900 hover:bg-white p-2 hover:underline ">Gravel Bikes</a>
      <a className="mr-5 font-bold text-md hover:text-gray-900 hover:bg-white p-2 hover:underline ">All Bikes</a>
      <a className="mr-5 font-bold text-md hover:text-gray-900 hover:text-white p-2 hover:underline ">Accessories</a>
    </nav>
    <div className='flex gap-3'>
    <button className="inline-flex items-center text-2xl mt-4 md:mt-0 hover:text-yellow-200">
    <GoSearch  />
    </button>
    <button className="inline-flex items-center text-2xl mt-4 md:mt-0 hover:text-yellow-200">
    <BsCart />
    </button>
  
    </div>
  </div>
</header>


  )
}

export default Header