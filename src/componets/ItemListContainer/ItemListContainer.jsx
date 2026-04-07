
import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList"
import {getProducts } from "../../data/api.js"
import "./itemlistcontainer.css"


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  
 useEffect(() => {
   getProducts()
     .then((productsApi) => setProducts(productsApi))
        
  }, [])


  return (
    <div className="item-list-container">
      <h2 className="container-title">{saludo}</h2>
      <Itemlist products={products} />
      
      {
        loading === true ? (<div>Cargando...</div>) : (<ItemList products={products} />)
      }
    </div>
  )
}

export default ItemListContainer