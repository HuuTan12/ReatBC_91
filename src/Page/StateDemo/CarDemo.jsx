import React, { useState } from "react";

/**
    * State: là một đối tượng đặc biệt của react, nó giúp chúng ta lưu trữ và quản lý dữ liệu của component
    Bước 1: Xây dựng giao diện
    Bước 2:Xác định dữ liệu thay đổi
    Bước 3: DataBinding
    Bước 4: Xây dựng sự kiện xử lí setState
 */

const CarDemo = () => {

    const [img, setImg] = useState("/img/products/black-car.jpg");

    const changImgCar = (color) => {
        setImg(`/img/products/${color}-car.jpg`);
    }

  return (
    <>
      <div className="text-white bg-dark text-center p-4 fs-4">CarDemo</div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-7">
            <img src={img} alt="..." className="w-100" />
          </div>
          <div className="col-5">
            <button className="btn btn-success me-2 mx-2" onClick={(e) => changImgCar("black")}>Black Car</button>
            <button className="btn btn-danger me-2" onClick={(e) => changImgCar("red")}>Red Car</button>
            <button className="btn btn-primary me-2" onClick={(e) => changImgCar("silver")}>Silver Car</button>
            <button className="btn btn-secondary me-2" onClick={(e) => changImgCar("steel")}>Steel Car</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDemo;
