import React,{useContext} from 'react';
import {DataContext} from '../context/context'
import {Link} from 'react-router-dom';

function Products() {
  const value =useContext(DataContext);
  const[products,setProducts]=value.products;
  
  return (
    <div className='grid gap-5 m-20 grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 '>
      {
        products.map((product)=>(
          <div className="flex flex-col items-center border rounded-xl p-10 max-md:" key={product._id}>
            <Link to='/'>
              <img src={product.images[0]} alt="product-image" className=' h-52' />
            </Link>
            <div className="mt-5 flex flex-col">
              <h3 className='font-bold text-2xl mb-3'>
                <Link to='/'>{product.title}</Link>
              </h3>
              <p className='text-slate-500' >{product.description}</p>
              <h4 className='text-emerald-600 '>{product.price}$</h4>
              <button className='text-white bg-green-900 w-5/6 p-2 mt-2 place-self-center rounded '>Add to shopping cart</button>
            </div>
          </div>
        ))
      }      
    </div>
  )
}

export default Products