import React, { useEffect, useState } from "react";
import axios from "axios";

const GetApiProductPage = () => {

  const [arrProduct, setArrProduct] = useState([
     {
      "sizes": [
        32,
        33,
        34,
        35
      ],
      "id": 2,
      "name": "vans old school",
      "alias": "vans-old-school",
      "price": 200,
      "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      "size": "[32,33,34,35]",
      "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "quantity": 200,
      "deleted": false,
      "categories": "[{\"id\": \"VANS_CONVERSE\",\"category\":\"VANS_CONVERSE\"}]",
      "relatedProducts": "[3,2,1]",
      "feature": true,
      "image": "http://apistore.cybersoft.edu.vn/images/van-old-school.png",
      "imgLink": "http://apistore.cybersoft.edu.vn/images/van-old-school.png"
    }
  ]);

  const getAllApiProduct = async () => {
    try {
      const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product`);
      
      setArrProduct(res.data.content);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { //thường dùng cho api getAll
    //cài đặt khi component load lên sẽ gọi api lấy dữ liệu về
    getAllApiProduct();
  }, []) //dêpndency array rỗng sẽ chỉ chạy 1 lần khi component load lên 1 lần duy nhât sau khi khởi tạo html

  return (
    <>
      <h3 className="text-center text-white p-5 bg-dark">
        Get Api Product Page
      </h3>

      <div className="container mt-3">
        <button className="btn btn-success mb-3" onClick={(e) => {getAllApiProduct()}}>Load Api</button>

        <div className="row">
          {arrProduct.map((item) => (
            <div className="col-md-4 mt-2" key={item.id}>
              <div className="card">
                <img src={item.image} alt="..." height={400} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <button className="btn btn-primary">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetApiProductPage;