import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBasket  , FaBars , FaTimes } from "react-icons/fa";

function Header() {

     const [menu, setMenu] = useState(false);
     
     const toggleMenu = () => {
          setMenu(!menu);
     }

     return (
          <header className=''>
               <nav className='flex justify-center items-center border-b shadow-lg w-11/12 p-5 md:px-1 m-auto rounded-lg max-md:justify-around '>
                    <div className=" w-1/5 justify-center flex font-extrabold text-3xl text-green-900">
                         <Link to="/">ELVIN</Link>
                    </div>
                    {
                         menu &&
                         <ul  className='flex justify-between w-3/5  max-md:fixed max-md:top-24 max-md:border max-md:rounded max-md:shadow-lg max-md:h-5/6 max-md:flex-col max-md:justify-around max-md:w-11/12 '>
                              <li><Link className='mx-3 p-5 md:p-1 max-md:border-b max-md:block hover:font-semibold hover:border-b md:hover:border-b-green-500 hover:text-green-600' to="/">Home</Link></li>
                              <li><Link className='mx-3 p-5 md:p-1 max-md:border-b max-md:block hover:font-semibold hover:border-b md:hover:border-b-green-500 hover:text-green-600' to="/">Products</Link></li>
                              <li><Link className='mx-3 p-5 md:p-1 max-md:border-b max-md:block hover:font-semibold hover:border-b md:hover:border-b-green-500 hover:text-green-600' to="/">About us</Link></li>
                              <li><Link className='mx-3 p-5 md:p-1 max-md:border-b max-md:block hover:font-semibold hover:border-b md:hover:border-b-green-500 hover:text-green-600' to="/">contact</Link></li>
                              <li><Link className='mx-3 p-5 md:p-1 max-md:border-b max-md:block hover:font-semibold hover:border-b md:hover:border-b-green-500 hover:text-green-600' to="/"> login</Link></li>
                         </ul>
                    }
                    <div className="w-1/5 flex justify-center items-center max-md:justify-end ">
                         <span className=''>3</span>
                         <Link to="/">
                              <FaShoppingBasket  className='size-7 text-green-700' />
                         </Link>
                    </div>

                    <button className="menu md:hidden " onClick={()=>setMenu(!menu)}>
                         {menu ? <FaTimes className='size-8 text-green-900'/> :<FaBars className='size-8 text-green-900'  />}
                    </button>
               </nav>
          </header>

     )
}

export default Header