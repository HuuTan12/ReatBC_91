import React, { useState } from 'react'
import GioHang from './GioHang';
import DanhSachSanPham from './DanhSachSanPham';

import lodash from 'lodash';

const maSanPham= [
  { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" },
  { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "./img/meizuphone.jpg" },
  { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraTruoc: "7 MP", cameraSau: "Chính 12 MP & Phụ 12 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg" }
];

const BaiTapGioHang = () => {

    const [arrGH, setarrGH] = useState([
        // { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraTruoc: "7 MP", cameraSau: "Chính 12 MP & Phụ 12 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg" ,soLuong:4}

    ]);
    
//State component đặt tại đâu thì phương thức xử lý sẽ được đặt tại đó, và dữ liệu sẽ được truyền từ component chứa state xuống component con thông qua props

const themGioHang = (spClick) => {
    let spGioHang = {...spClick,soLuong:1};
    //Kiểm tra sản phẩm có trong giỏ hàng chưa
    let sp = arrGH.find(spGH => spGH.maSP === spGioHang.maSP);
    if(sp){
      sp.soLuong += 1;
    }else{
      arrGH.push(spGioHang);
    }
    //Cập nhật state giỏ hàng
    setarrGH([...arrGH]); //redner lại giao diện với giỏ hàng mới
}

const xoaSanPham = (maSPClick) => {
    //Dựa vào mã sản phẩm được click để tìm ra sản phẩm đó trong giỏ hàng
    
    let arrNew = lodash.cloneDeep(arrGH);//chép ra arrObjj mới
    //dựa vào mã sp click để tìm ra index của sp đó trong arrGH

    const index = arrNew.findIndex(sp => sp.maSP === maSPClick);
    if(index != -1){
        //Cập nhật setState giỏ hàng mới
      arrNew.splice(index,1);
    }
    setarrGH(arrNew);
}

const updateSoLuong = (newValue,maSp) => {
    let arrNew = lodash.cloneDeep(arrGH);//chép ra arrObjj mới
    let spUpdate = arrNew.find(sp => sp.maSP === maSp);
    if(spUpdate && newValue > 0){
        spUpdate.soLuong = newValue;
        setarrGH(arrNew);
    }
}
  return (
    <div className="container">
        <h3 claaName="bg-dark text-white p-5 text-center">BaiTapGioHang</h3>
        <GioHang arrGH={arrGH} xoaSanPham={xoaSanPham} updateSoLuong={updateSoLuong}/>
        <DanhSachSanPham maSanPham ={maSanPham} themGioHang={themGioHang}/>
    </div>
  )
}

export default BaiTapGioHang