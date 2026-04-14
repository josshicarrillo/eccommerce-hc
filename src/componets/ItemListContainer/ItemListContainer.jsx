
import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList"
import { getProducts, getProductById, addProduct, deleteProductById } from "../../data/api.js"
import "./itemlistcontainer.css"


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  
  /*const newProduct = {
    name: "Camisa",
    description: "Camisa elegante para ocasiones especiales",
    stock: 25,
    price: 40,
    image: "/image/PRODUCTO-2.jpg"
  }*/
  
  useEffect(() => {
    setLoading(true)
    getProducts().then(products => {
      setProducts(products)
      
  
}) .catch(error => {
    console.error("Error al obtener productos:", error)
  })
        .finally(() => {
            setLoading(false)
        })
    getProductById()
    .then((productsApi)=> console.log (productsApi))
      .catch(error => {
        console.error("Error al obtener productos:", error)
      })
  }, [])

  const clickEvento = () => {
    addProduct(newProduct).then((productsApi) => console.log(productsApi))
      .catch((error) => console.log(error))
  }

  const clickEventoBorrar = () => {
    deleteProductById()
    .then((productsApi) => console.log(productsApi))
      .catch((error) => console.log(error))
  }

  return (

    <div className="item-list-container">
      <h2 className="container-title">{saludo}</h2>
      <button onClick={clickEvento}>Agregar nuevo producto</button>
      <button onClick={clickEventoBorrar}>Borrar</button>
      
      {
        loading === true ? (<div>Cargando...</div>) : (<Itemlist products={products} />)
      }
    </div>
  )
}

export default ItemListContainer