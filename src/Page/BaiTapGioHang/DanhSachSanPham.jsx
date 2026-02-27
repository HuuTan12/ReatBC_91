import React from 'react'
import SanPham from './SanPham'

const DanhSachSanPham = (props) => {
    const {maSanPham,themGioHang} = props;
  return (
    <div>
        <h2>Danh Sách Các Sản Phẩm</h2>
        <div className="row">
            {
                maSanPham.map((sanpham,index) => {
                    return <div className="col-md-4" key={index}>
                        <SanPham dataSP={sanpham} themGioHang={themGioHang}/>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default DanhSachSanPham