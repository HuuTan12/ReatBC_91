import React, { useState } from "react";


//hàm hook: useState, useEffect, useRef, useMemo, useCallback chỉ sử dụng cho component
//quản lí giá trị thay đổi của component, quản lí các hiệu ứng phụ, quản lí tham chiếu đến 1 phần tử nào đó trong DOM, tối ưu hiệu năng của component, tối ưu hiệu năng của hàm callback
const ChangeNumber = () => {

    const [number, setNumber] = useState(0);
    //number đầu tiên là giá trị khởi tạo, 
    // setNumber là hàm để thay đổi giá trị của number, khi gọi setNumber với 1 giá trị mới thì number sẽ được cập nhật lại với giá trị mới đó và component sẽ được re-render lại để hiển thị giá trị mới của number
    //[number, funtion(newNumber) => number = newNumber]

    //có 2 nhiệm vụ, gán giá trị mới cho state và re-render lại component để hiển thị giá trị mới của state trên giao diện

  return (
    <>
      <div className="text-white bg-dark text-center p-4 fs-4">
        ChangeNumber
      </div>
      <div className="container">
        <h1>
          Count: <span className="text text-danger">{number}</span>
        </h1>
        <button className="btn btn-success me-2" onClick={(e) => setNumber(number + 1)}>+</button>
        <button className="btn btn-danger me-2" onClick={(e) => setNumber(number - 1)}>-</button>
      </div>
    </>
  );
};

export default ChangeNumber;
