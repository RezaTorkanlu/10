import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa";


function Header() {

     const [showNav, setShowNav] = useState(false)
     const toggleNav = () => {
          setShowNav(!showNav)
     }

     return (
          <header>
               <nav className='flex justify-center items-center border-b shadow-lg w-11/12 p-5 md:px-5 m-auto rounded-lg max-md:justify-around '>
                    <div className=" w-1/5 justify-center flex font-extrabold text-3xl text-green-900">
                         <Link to="/">ELVIN</Link>
                    </div>
                    {showNav ?
                         <ul className='flex justify-between w-3/5 max-md:fixed max-md:top-24 max-md:border max-md:rounded max-md:shadow-lg max-md:h-5/6 max-md:flex-col max-md:justify-around max-md:w-11/12 bg-white'>
                              <li><Link className='mx-3  max-md:p-5  max-md:border-b max-md:block  hover:text-green-600' onClick={toggleNav} to="/">Home</Link></li>
                              <li><Link className='mx-3  max-md:p-5  max-md:border-b max-md:block  hover:text-green-600' onClick={toggleNav} to="/products">Products</Link></li>
                              <li><Link className='mx-3  max-md:p-5  max-md:border-b max-md:block  hover:text-green-600' onClick={toggleNav} to="/">About us</Link></li>
                              <li><Link className='mx-3  max-md:p-5  max-md:border-b max-md:block  hover:text-green-600' onClick={toggleNav} to="/">contact</Link></li>
                              <li><Link className='mx-3  max-md:p-5  max-md:border-b max-md:block  hover:text-green-600' onClick={toggleNav} to="/"> login</Link></li>
                         </ul> :
                         <ul className='flex justify-between w-3/5 max-md:hidden '>
                              <li><Link className='mx-3  max-md:p-5 hover:text-green-600' onClick={toggleNav} to="/">Home</Link></li>
                              <li><Link className='mx-3  max-md:p-5 hover:text-green-600' onClick={toggleNav} to="/products">Products</Link></li>
                              <li><Link className='mx-3  max-md:p-5 hover:text-green-600' onClick={toggleNav} to="/">About us</Link></li>
                              <li><Link className='mx-3  max-md:p-5 hover:text-green-600' onClick={toggleNav} to="/">contact</Link></li>
                              <li><Link className='mx-3  max-md:p-5 hover:text-green-600' onClick={toggleNav} to="/">login</Link></li>
                         </ul>
                    }
                    <div className="w-1/5 flex justify-center items-center max-md:justify-end ">
                         <span className='ordinal'>3</span>
                         <Link to="/">
                              <FaShoppingBasket className='size-7 text-green-700' />
                         </Link>
                    </div>

                    <button className="md:hidden " onClick={toggleNav} >
                         {showNav ? <FaTimes className='size-8 text-green-900' /> : <FaBars className='size-8 text-green-900' />}
                    </button>
               </nav>
          </header>

     )
}

export default Header