import React from "react";
import ChlidComponent from "./ChlidComponent";
import CardDemo from "./CardDemo";
import ChildProps from "./ChildProps";

/**

    * Props:  properties là thuộc tính của thẻ, là một đối tượng đặc biệt của react, nó giúp chúng ta truyền dữ liệu từ component cha xuống component con
    Đối với thẻ <component props="value" /> thì props là thuộc tính, value là giá trị của thuộc tính đó, chúng ta có thể truyền bất kì dữ liệu gì vào props, kể cả function
    Bước 1: Xây dựng giao diện
    Bước 2: Xác định dữ liệu cần truyền
    Bước 3: Truyền dữ liệu từ component cha xuống component con thông qua props
    Bước 4: Sử dụng props trong component con


    //Props là giá trị không được gán  lại

    //So sánh  sự khác biệt state và props
    Đều là giá trrij binding lên giao diện
    State: có thể gán lại thông  qua phương thức setState
    Props: sẽ cố điịnh không thể gá nlaji giá trị mới

 */
const PropDemo = () => {
  const arrProduct = [
    {
      id: 1,
      name: "Chiếc xe 1",
      price: 500000,
      img: "/img/products/black-car.jpg",
    },
    {
      id: 2,
      name: "Chiếc xe 2",
      price: 400000,
      img: "/img/products/red-car.jpg",
    },
    {
      id: 3,
      name: "Chiếc xe 3",
      price: 700000,
      img: "/img/products/silver-car.jpg",
    },
  ];

  return (
    <>
      <div className="text-white bg-dark text-center p-4 fs-4">PropDemo</div>
      <input
        className="form-control w-25 mx-auto"
        placeholder="Nhập tên của bạn"
      />
      <ChlidComponent title="Cybersoft" view="95" />
      <ChlidComponent title="BC91" view="100" />
      <h3> Product List</h3>
      <div className="row">
        <div className="col-4">
          <CardDemo product={arrProduct[0]} />
        </div>
        <div className="col-4">
          <CardDemo product={arrProduct[1]} />
        </div>
        <div className="col-4">
          <CardDemo product={arrProduct[2]} />
        </div>
      </div>
      <hr/>
      <h1>ChildProp</h1>
      <ChildProps />
      <h1>Childrean 12314</h1>
      <ChildProps />
    </>
  );
};

export default PropDemo;
