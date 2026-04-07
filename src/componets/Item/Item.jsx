import {link} from "react-router"
import "./item.css"

const Item = ({product}) => {
  return (
    <div className="item-card">
      <div className="item-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="item-content">
        <p className="item-name">{product.name}</p>
        <p className="item-stock">Precio: ${product.price} </p>

        <link to={`/detail/${product.id}`}>
          <button>ver detalles</button>
        </link>

      </div>
    </div>
  )
}

export default Item