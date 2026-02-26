import React from "react";
import CardDemo from "./CardDemo";

const RenderWithMap = () => {
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

  let arrNumber = [1, 2, 3, 4, 5];

  let arrList = arrNumber.map((number, index) => {
    return <li>number</li>;
  });

  console.log(arrList);


  //cách 1: Dùng vòng lặp for để duyệt mảng tạo ra 1 mảng jsx
  const renderProduct = () => {
    //input là arrProduct
    const arrJSX = [];
    for (let prod of arrProduct) {
      //Mỗi lần duyệt lấy ra 1 sản phẩm sẽ tạo ra 1 thẻ jsx
      let tagJSX = (
        <div className="col-4" key={prod.id}>
          <CardDemo product={prod} />
        </div>
      );
      arrJSX.push(tagJSX);
    }
    return arrJSX;
  };


  // cách 2: Dùng hàm map để duyệt mảng tạo ra 1 mảng jsx

  const renderProductWithMap = () => {

    let arrJSX = arrProduct.map((prod,index) => {
        return <div className="col-4" key={prod.id}><CardDemo product={prod} /></div>
    })
  }
  //return về arrJSX
  //Nếu muốn render các thẻ jsx đồng cấp thì phải chứa mảng và 1 prop tên key không được trùng nhau
  return (
    <div className="container">
      <h3>Tên Sản Phẩm</h3>
      <div className="row">
        {/* {renderProduct()} */}
        {renderProductWithMap()}
        </div>
      <ul>
        {arrNumber.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>

      <h3>Table Product</h3>
      <table className="table">
        <thread>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
            </tr>
        </thread>
        <tbody>


            {
                arrProduct.map((prod,index) => {
                    return <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.name}</td>
                        <td><img src={prod.img} className="img-fluid" alt="..." width={50} height={50}/></td>
                        <td>{prod.price}</td>
                    </tr>
                })
            }
            {/* <tr>
                <td>1</td>
                <td><img src={arrProduct[0].img} className="img-fluid" alt="..." width={50} height={50}/></td>
                <td>Chiếc xe 1</td>
                <td>500000</td>
            </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default RenderWithMap;
