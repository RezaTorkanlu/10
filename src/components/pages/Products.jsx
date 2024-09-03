import React, { useContext } from 'react';
import { DataContext } from '../context/context'
import { Link } from 'react-router-dom';
import formatCurrency from '../../util';

function Products() {
  const value = useContext(DataContext);
  const [products, setProducts] = value.products;
  const addCart = value.addCart;

  return (
    <div className='grid gap-5 m-20 grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 '>
      {
        products.map((product) => (
          <div className="flex flex-col items-center border rounded-xl p-10 shadow-lg" key={product._id}>
            <Link to={`/products/${product._id}`}>
              <img src={product.images[0]} alt="product-image" className=' h-52' />
            </Link>
            <div className="mt-5 flex flex-col">
              <h3 className='font-bold text-2xl mb-3'>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
              </h3>
              <p className='text-slate-500' >{product.description}</p>
              <h4 className='text-emerald-600 select-none'>{formatCurrency(product.price)}</h4>
              <button className='text-white bg-green-900 w-5/6 p-2 mt-2 place-self-center rounded ' onClick={()=>addCart(product._id)}>Add to shopping cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products