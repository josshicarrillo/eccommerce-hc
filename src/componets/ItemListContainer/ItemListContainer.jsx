
import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList"
import {getProducts } from "../../data/data"
import "./itemlistcontainer.css"


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  
  
  useEffect(() => {
    setLoading(true)
    getProducts().then(products => {
      setProducts(products)
      setLoading(false)
  console.log("data", products)
}) .catch(error => {
    console.error("Error al obtener productos:", error)
    setLoading(false)
})
        
  }, [])


  return (

    <div className="item-list-container">
      <h2 className="container-title">{saludo}</h2>
      
      {
        loading === true ? (<div>Cargando...</div>) : (<Itemlist products={products} />)
      }
    </div>
  )
}

export default ItemListContainer