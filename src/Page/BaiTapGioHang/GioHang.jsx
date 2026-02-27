import React from "react";

const GioHang = (props) => {
  const { arrGH, xoaSanPham, updateSoLuong } = props;
  return (
    <div className="gio-hang">
      <h2>Giỏ Hàng</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Hình Ảnh</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Giá Bán</th>
            <th>Thành Tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrGH.map((spGH, index) => {
            return <tr>
              <td>{spGH.maSP}</td>
              <td>
                <img
                  src={spGH.hinhAnh}
                  width={50}
                  alt="Hình ảnh sản phẩm"
                ></img>
              </td>
              <td>{spGH.tenSP}</td>
              <td>
                <input onInput={(e) =>{
                    updateSoLuong(e.target.value,spGH.maSP)}} 
                    type="number" value= {spGH.soLuong}></input>
               
                </td>
              <td>{spGH.giaBan.toLocaleString()}</td>
              <td>{spGH.soLuong * spGH.giaBan}</td>
              <td>
                <button className="btn btn-success" onClick={(e) => xoaSanPham(spGH.maSP)}>Xoá</button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GioHang;
