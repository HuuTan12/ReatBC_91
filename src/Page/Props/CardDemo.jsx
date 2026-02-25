import React from 'react'

//kỹ thuật optional chaining: giúp chúng ta truy cập vào thuộc tính của một đối tượng mà không cần phải kiểm tra xem đối tượng đó có tồn tại hay không, nếu đối tượng đó không tồn tại thì sẽ trả về undefined thay vì lỗi
// thêm dấu chấm hỏi

const CardDemo = (props) => {

    const {product} = props;

  return (
    <>
      <div className="text-white bg-dark text-center p-4 fs-4">CardDemo</div>
      <div className="card">
        <img src={product.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-title">{product?.name}</p>
            <p className="card-text">{product?.price}</p>
            <p className="card-desc">Some b card's content.</p>
            <button className="btn btn-primary">
                <i className="fa fa-cart-plus"></i> Add to cart
            </button>
            
        </div>
      </div>
    </>
  )
}

export default CardDemo