import React from 'react'

const ProductItem = (props) => {
  return (
    <div className="card">
        <img src={props.product.image} alt="..." />
        <div className="card-body">
          <h1 className="card-title">{props.product.name}</h1>
          <p className="card-text">{props.product.price}$</p>
            <button className="btn btn-success">Xem chi tiết</button>
        </div>
    </div>
  )
}

export default ProductItem