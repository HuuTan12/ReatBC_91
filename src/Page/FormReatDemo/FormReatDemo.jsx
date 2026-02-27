import React, { useState } from "react";

const FormReatDemo = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const [userError, setUserError] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const handleChangeInput = (e) => {
  // Lấy value và name từ input đang được thay đổi
  // name sẽ là: "email", "password", hoặc "fullname"
  let { value, name } = e.target;
  let dataType = e.target.getAttribute("dataType");

  // 1️⃣ CẬP NHẬT GIÁ TRỊ INPUT

  // Tạo object mới dựa trên state cũ (spread operator)
  // Sau đó cập nhật lại đúng field đang nhập
  let newValue = {
    ...userLogin,   // giữ lại các giá trị cũ
    [name]: value,  // cập nhật đúng field theo name
  };

  // Cập nhật lại state userLogin
  // Đây là state lưu dữ liệu người dùng nhập
  setUserLogin(newValue);

  // 2️⃣ VALIDATION (KIỂM TRA LỖI)

  // Clone state lỗi hiện tại
  // Không được sửa trực tiếp userError vì React cần immutable
  let newError = { ...userError };

  // Nếu người dùng để trống (sau khi trim bỏ khoảng trắng)
  if (value.trim() === "") {
    // Gán lỗi cho đúng field đang nhập
    newError[name] = `${name} không được để trống`;
  } else {
    if (dataType === "email") {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regexEmail.test(value)) {
        newError[name] = "Email sai, nhập lại email@email.com";
      } else {
        newError[name] = "";
      }
    }

    if (dataType === "password") {
      if (value.length < 6) {
        newError[name] = "Mật khẩu phải ít nhất 6 ký tự";
      } else {
        newError[name] = "";
      }
    }

    if (dataType === "fullname") {
      newError[name] = "";
    }
  }

  // Cập nhật lại state lỗi
  // State này dùng để hiển thị thông báo màu đỏ dưới input
  setUserError(newError);
};

  const handleSubmit = (e) => {
    e.preventDefault(); // chặn reload trang
    console.log(userLogin);
    console.log("Email:", userLogin.email);
    //một form là hợp lệ là khi các trường được nhập đúng và không có err
    let valid = true;
    for(let key in userLogin){
      if(userLogin[key].trim() === "") 
        valid= false;
        return;
    }
    for(let key in userError){
      if(userError[key] !== "") 
        valid = false;
        return;
    }
    
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group w-100 mx-auto card">
        <div className="card-header bg-dark text-white text-center">Login</div>

        <div className="card-body mt-2">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
            dataType="email"
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={userLogin.email}
              // value lấy từ state → controlled component
              onChange={handleChangeInput}
              // onChange đúng chính tả

              // onInput={(e) => {{
              //   let { value } = e.target;
              //   setUserLogin({
              //     ...userLogin,
              //     email: value,
              //   });
              // }}}
            />
            <p className="text text-danger">{userError.email}</p>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Full Name</label>
            <input
            dataType="fullname"
              type="text"
              className="form-control"
              name="fullname"
              id="fullname"
              placeholder="Nhập full name"
              value={userLogin.fullname}
              // value lấy từ state → controlled component
              onChange={handleChangeInput}
              // onChange đúng chính tả

              // onInput={(e) => {{
              //   let { value } = e.target;
              //   setUserLogin({
              //     ...userLogin,
              //     email: value,
              //   });
              // }}}
            />
            <p className="text text-danger">{userError.fullname}</p>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
            dataType="password"
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value={userLogin.password}
              // value lấy từ state
              onChange={handleChangeInput}
              // dùng chung 1 hàm cho nhiều input
            />
            <p className="text text-danger">{userError.password}</p>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <div className="card-footer bg-dark text-white text-center mt-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormReatDemo;
