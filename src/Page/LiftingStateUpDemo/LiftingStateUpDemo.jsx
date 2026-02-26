import React, { useState } from "react";
import PhoneItem from "./PhoneItem";

const LiftingStateUpDemo = () => {
  const dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
 
  //dữ liệu phone ban đầu sẽ là sản phẩm đầu tiên trong mảng dataPhone
  const [phoneDetail,setPhoneDetail] = useState({
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    })

  return (
    <>
      <h3 className="text-white bg-dark text-center p-4">LiftingStateUpDemo</h3>
      <div className="container">
        <div className="row">
          {dataPhone.map((phone, index) => {
             return <div className="col-md-4" key={phone.maSP}>
            {/* <div className="card">
              <img src={phone.hinhAnh}  alt="..." height={350}/>
              <div className="card-body">
                <h3 className="card-title">{phone.tenSP}</h3>
                <p className="card-text">{phone.giaBan.toLocaleString()}đ</p>
                <button className="btn btn-success" onClick={() => setPhoneDetail(phone)}>
                  Xem chi tiết sản phẩm
                </button>
              </div>
            </div> */}

            <PhoneItem phone={phone} handleStateDetailPhone={setPhoneDetail}/>
          </div>
          })}

          
        </div>
        <hr/>

        <div className="mt-2">
          <h3>Chi tiết sản phẩm</h3>
          <div className="row">
            <div className="col-md-4">
              <h3>{phoneDetail.tenSP}</h3>
              <img src={phoneDetail.hinhAnh} alt="..." height={300} />
            </div>
            <div className="col-md-8">
              <h3>Thống tin kĩ thuật</h3>
              <table className="table">
                <thead>
                  <tr>
                    <td>Màn hình</td>
                    <td>{phoneDetail.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{phoneDetail.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{phoneDetail.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{phoneDetail.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>Ram</td>
                    <td>{phoneDetail.ram}</td>
                  </tr>
                  <tr>
                    <td>Bộ nhớ trong</td>
                    <td>{phoneDetail.rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiftingStateUpDemo;
