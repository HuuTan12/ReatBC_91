import React from 'react'

const SanPham = (props) => {
    const {dataSP,themGioHang} = props;
  return (
    <div className="card ">
        <img src={dataSP.hinhAnh} className="card-img-top" alt="Hình ảnh sản phẩm"></img>
        <div className="card-body">
            <h3 className="card-title">{dataSP.tenSP}</h3>
            <p className="card-text bg-danger badge fs-5">Giá: {dataSP.giaBan.toLocaleString()}đ</p> <br/>
            <button className="btn btn-success" onClick={(e) => themGioHang(dataSP)}>Thêm vào giỏ hàng<i className="fas fa-shopping-cart"></i></button>
        </div>
    </div>
  )
}

export default SanPham