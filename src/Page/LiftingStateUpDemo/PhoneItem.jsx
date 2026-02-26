import React from "react";

const PhoneItem = (props) => {
  const { phone, handleStateDetailPhone } = props;
  return (
    <div className="card">
      <img src={phone.hinhAnh} alt="..." height={350} />
      <div className="card-body">
        <h3 className="card-title">{phone.tenSP}</h3>
        <p className="card-text">{phone.giaBan.toLocaleString()}đ</p>
        <button
          className="btn btn-success"
          onClick={(e) => {
            handleStateDetailPhone(phone);
          }}

          //   onClick={() => setPhoneDetail(phone)}
          //khi tạo thêm file PhoneItem.jsx thì mình sẽ truyền props là handleStateDetailPhone để thay thế cho setPhoneDetail
        >
          Xem chi tiết sản phẩm
        </button>
      </div>
    </div>
  );
};

export default PhoneItem;
