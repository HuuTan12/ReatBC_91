import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const DemoFormikYup = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      password: "",
    },
    onSubmit: (valueForm) => {
      console.log(valueForm);
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
      fullname: yup
        .string()
        .required("Fullname is required")
        .min(6, "Fullname must be at least 6 characters")
        .max(32, "Fullname must be at most 32 characters"),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password must be at most 32 characters"),
    })

  });

  return (
     <form className="container mt-5" onSubmit={formik.handleSubmit}>
      <div className="w-50 mx-auto card shadow">
        <div className="card-header bg-dark text-white text-center">
          Login Form
        </div>

        <div className="card-body">

          {/* EMAIL */}
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-danger mt-1">{formik.errors.email}</p>
          </div>

          {/* FULLNAME */}
          <div className="form-group mb-3">
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              className="form-control"
              placeholder="Enter full name"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-danger mt-1">{formik.errors.fullname}</p>
          </div>

          {/* PASSWORD */}
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-danger mt-1">{formik.errors.password}</p>
          </div>

          <div className="card-footer text-center bg-white">
            <button type="submit" className="btn btn-primary w-100" disabled={!formik.isValid}>
              Submit
            </button>
          </div>

        </div>
      </div>
    </form>
  );
};

export default DemoFormikYup;