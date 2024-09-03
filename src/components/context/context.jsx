import { createContext, useEffect, useState } from "react";
import Data from '../../Data'

export const DataContext = createContext();

export const DataProdiver = (props) => {
  const [products, setProducts] = useState(Data);
  const [cart, setCart] = useState(()=>{
    const saveDataCart = localStorage.getItem('datacart');
    const parsedCart = JSON.parse(saveDataCart)
    return parsedCart || [] ;
  })

  
  useEffect(()=>{
    localStorage.setItem('datacart',JSON.stringify(cart))
  },[cart])

  const addCart = (id) => {
    const check = cart.every(item => {
      return item._id !== id;
    })

    if (check) {
      const Data = products.filter((product) => {
        return product._id === id;
      })
      setCart([...cart, ...Data])
    } else {
      alert('you have this product');
    }
  }

  const increase = (id) => {
    cart.forEach(item => {
      if (item._id === id) {
        item.count += 1
      }
    })
    setCart([...cart])
  }

  const decrease = (id) => {
    cart.forEach(item => {
      if (item._id === id) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
    })
    setCart([...cart])
  }

  const removeProduct = (id)=>{
    if(window.confirm('Are you want to delete this product ?')){
      cart.forEach((item,index) =>{
          if(item._id === id){
            cart.splice(index,1)
          }
    })
    setCart([...cart])
  }}   

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
    increase: increase,
    decrease: decrease,
    removeProduct:removeProduct,
  }

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}