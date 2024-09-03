import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/context';
import formatCurrency from '../../util';

function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products, setProducts] = value.products;
  const addCart = value.addCart;
  const [index, setIndex] = useState(0)
  const Details = products.filter((product) => {
    return product._id === id;
  })
  
  
  return (
    <>
      {
        Details.map((product) => (
          <div className="grid grid-row-1 grid-cols-4 m-10 border-2 justify-center items-center p-5 shadow-lg max-lg:grid-cols-1" key={product._id}>
            <div className="bg-no-repeat bg-contain size-80 col-span-1 place-self-center bg-center" style={{ backgroundImage: `url(${product.images[index]})` }}></div>
            <div className="col-span-3">
              <h2 className='font-bold text-2xl mb-3 max-md:my-5'>{product.title}</h2>
              <h3 className='text-emerald-600 font-bold text-2xl mb-3 select-none'>{formatCurrency(product.price)}</h3>
              <div className="">
                {
                  product && product.colors.map((color,index)=>(
                    <button key={index} style={{background: color}} className='size-10 mx-2'> </button>
                  ))
                }
              </div>
              <p className='mt-5 text-lg font-semibold'>{product.description}</p>
              <p className='my-5'>{product.content}</p>
              <div className=" flex gap-5 max-md:justify-center ">
                {
                  product.images.map((img,index)=>(
                    <img className='size-16' src={img} key={index} onClick={()=>setIndex(index)}/>
                  ))
                }
              </div>
            <button className='text-white bg-green-900 w-2/6 max-sm:w-5/6 max-md:flex max-md:justify-center m-auto p-2 mt-2 rounded' onClick={()=>addCart(product._id)}>Add to shopping cart</button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Details