import { createContext, useState } from "react";
import Data from '../../Data'

export const DataContext = createContext();

export const DataProdiver = (props) => {
  const [products, setProducts] = useState(Data);

  const value = {
    products: [products, setProducts]
  }

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}