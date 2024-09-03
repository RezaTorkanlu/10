
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/context';
import {Link} from 'react-router-dom';
import formatCurrency from '../../util';
function Cart() {

  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const increase = value.increase;
  const decrease = value.decrease;
  const removeProduct = value.removeProduct
  const [totalPrice,setTotalPrice]=useState(0)

  useEffect(()=>{
    const getTotal = () =>{
      const res = cart.reduce((prev,item)=>{
        return prev + (item.count * item.price)
      },0)
      setTotalPrice(res);
    }
    getTotal();
  },[cart])
  
  if(cart.length === 0){
    return <h1 className='text-center text-4xl mt-10'>Your Shop Cart is Empty</h1>
  }
  return (
    <>
      {
        cart.map((product) => (
          <div className="grid grid-row-1 grid-cols-4 m-10 border-2 justify-center items-center p-5 shadow-lg max-lg:grid-cols-1" key={product._id}>
            <div className="bg-no-repeat bg-contain size-80 col-span-1 place-self-center bg-center" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
            <div className="col-span-3">
              <h2 className='font-bold text-2xl mb-3 max-md:my-5'>{product.title}</h2>
              <h3 className='text-emerald-600 font-bold text-2xl mb-3 select-none'>{formatCurrency(product.price)}</h3>
              <div className="">
                {
                  product && product.colors.map((color, index) => (
                    <button key={index} style={{ background: color }} className='size-10 mx-2'> </button>
                  ))
                }
              </div>
              <p className='mt-5 text-lg font-semibold'>{product.description}</p>
              <p className='my-5'>{product.content}</p>
              <div className="flex">
                <button className='size-10 bg-red-800 text-center rounded-xl mx-2 text-white' onClick={() => decrease(product._id)}>-</button>
                <p className='size-10 bg-slate-600 text-center rounded-xl mx-2 text-white justify-center items-center flex'>{product.count}</p>
                <button className='size-10 bg-green-800 text-center rounded-xl mx-2 text-white' onClick={() => increase(product._id)}>+</button>
              <button className=' mx-10 h-10 w-32 bg-red-900 rounded-lg text-white' onClick={()=>removeProduct(product._id)}>delete</button>
              </div>
            </div>
          </div>
        ))
      }
      <div className="flex justify-between items-center mx-52 py-20 max-sm:mx-10 text-white ">
        <p className='h-10 w-40 items-center justify-center flex bg-teal-700 rounded select-none'>Total Price : {formatCurrency(totalPrice)}</p>
        <button className='h-10 w-20 bg-rose-700 rounded shadow'>
          <Link to='/'>Buy</Link>
        </button>
      </div>
    </>
  )
}

export default Cart