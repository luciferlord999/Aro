import React, { useEffect, useRef, useState } from "react";

import Navbar from "../compontent/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
// import Cookies from 'js-cookie';

function Signup() {
  let navigate = useNavigate();
  // Form Validation start
  const initialValues = {
    name: "",
    email: "",
    password: "",
    repassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phregex = /^[0-9]{10}$/;
    const pregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    // if (!values.phone) {
    //   errors.phone = "Phone Number is required";
    // } else if (!phregex.test(values.phone)) {
    //   errors.phone = "Enter 10 Digit Phone Number  ";
    // }

    if (!values.password) {
      errors.password = "Password Required";
    } else if (!pregex.test(values.password)) {
      errors.password =
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number: ";
    }
    if (!values.repassword) {
      errors.repassword = "Retype Password Required";
    } else if (
      !pregex.test(values.password) !== !pregex.test(values.repassword)
    ) {
      errors.repassword = " password not match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const data = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      };

      axios.post(`/api/register`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_token", res.data.username);

          swal("Success", res.data.message, "success");
          navigate("/");
        } else {
          console.log("hello");
        }
      });
    }

    e.preventDefault();

    setFormErrors(validate(formValues));

    setIsSubmit(true);
  };

  // Form Validation end
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  // Login function start
  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }

   
      
      axios.post(`/api/login`, data).then((res) => {

       

        if (res.data.status === 200) {
          localStorage.setItem('auth_toke' , res.data.token);
          localStorage.setItem('auth_name' , res.data.email);
          swal('Success' ,res.data.message,'success');
          navigate('/');



        } else if (res.data.status === 401) {
          swal('"Oops!"' ,res.data.message,'error');
        } else {
          setLogin({ ...loginInput, error_list: res.data.validation_errors });
        }
      });
  
  };
  // Login function end

  return (
    <>
      <Navbar />
      <div>
        {/* Content */}
        <div
          className="page-content dlab-login bg-primary"
          style={{
            backgroundImage: "url(images/background/bg7.jpg)",
            backgroundPosition: "top right",
            backgroundBlendMode: "screen",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 login-form-box">
                <div className="login-form">
                  <div className="logo">
                    <a href="/">
                      <img src="images/logo2.png" alt="" />
                    </a>
                  </div>
                  <div className="tab-content nav">
                    <div id="login" className="tab-pane active">
                      <form className="dlab-form" onSubmit={loginSubmit}>
                        <h3 className="form-title m-t0">
                          Welcome back, please login to your account
                        </h3>

                        <div className="form-group">
                          <input
                            name="email"
                            required
                            className="form-control"
                            onChange={handleInput}
                            value={loginInput.email}
                            placeholder="Email Address"
                            type="email"
                          />
                        </div>
                        <p>{loginInput.error_list.email}</p>
                        <div className="form-group">
                          <input
                            name="password"
                            required
                            className="form-control "
                            placeholder="Type Password"
                            onChange={handleInput}
                            value={loginInput.password}
                            type="password"
                          />
                        </div>
                        <p>{loginInput.error_list.password}</p>
                        <div className="form-group field-btn text-left">
                          <div className="input-block">
                            <input id="check1" type="checkbox" />
                            <label htmlFor="check1">Remember me</label>
                          </div>
                          {/* <a
                            data-toggle="tab"
                            href="#forgot-password"
                            className="btn-link forgot-password"
                          >
                            {" "}
                            Forgot Password
                          </a> */}
                        </div>
                        <div className="form-group">
                          <button
                            className="site-button btn-block button-md"
                            type="submit"
                          >
                            login
                          </button>
                        </div>
                        <div className="form-group">
                          <p className="info-bottom">
                            Don’t have an account?{" "}
                            <a
                              data-toggle="tab"
                              href="#register"
                              className="btn-link"
                            >
                              Register
                            </a>{" "}
                          </p>
                        </div>
                      </form>
                    </div>
                    <div id="forgot-password" className="tab-pane fade">
                      <form className="dlab-form">
                        <h3 className="form-title m-t0">Find Your Account</h3>
                        <div className="form-group text-center">
                          <a
                            href="#"
                            className="site-button facebook btn-block"
                          >
                            <i className="fa fa-facebook-official m-r10" /> Log
                            in with Facebook
                          </a>
                        </div>
                        <div className="form-group">
                          <input
                            name="dzName"
                            required
                            className="form-control"
                            placeholder="Email Id"
                            type="text"
                          />
                        </div>
                        <div className="form-group">
                          <button className="site-button btn-block button-md">
                            Get New Password
                          </button>
                        </div>
                        <div className="form-group">
                          <p className="info-bottom">
                            <a
                              data-toggle="tab"
                              href="#login"
                              className="btn-link"
                            >
                              Login{" "}
                            </a>{" "}
                            |
                            <a
                              data-toggle="tab"
                              href="#register"
                              className="btn-link"
                            >
                              Register
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                    <div id="register" className="tab-pane fade">
                      <form className="dlab-form" onSubmit={handleSubmit}>
                        <h3 className="form-title m-t0">
                          Create an account! It's free and always will be.
                        </h3>

                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            required
                            value={formValues.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Email Id"
                          />
                        </div>
                        <p>{formErrors.email}</p>

                        <h6 className="text-inherit m-b10">
                          Enter your account details below:{" "}
                        </h6>
                        <div className="form-group">
                          <input
                            name="name"
                            required
                            value={formValues.username}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="User Name"
                            type="text"
                          />
                        </div>
                        <p>{formErrors.name}</p>
                        <div className="form-group">
                          <input
                            name="password"
                            required
                            type="password"
                            value={formValues.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Password"
                            maxLength="8"
                            minLength="8"
                          />
                        </div>
                        <p>{formErrors.password}</p>
                        <div className="form-group">
                          <input
                            name="repassword"
                            type="password"
                            required
                            value={formValues.repassword}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Re-type Your Password"
                            maxLength="8"
                            minLength="8"
                          />
                        </div>
                        <p>{formErrors.repassword}</p>
                        <div className="form-group">
                          <input type="checkbox" id="privacy-policy" />
                          <label htmlFor="privacy-policy">
                            I agree to the{" "}
                            <a href="#" className="btn-link">
                              Terms of Service{" "}
                            </a>
                            &amp;{" "}
                            <a href="#" className="btn-link">
                              Privacy Policy{" "}
                            </a>
                          </label>
                        </div>
                        <div className="form-group">
                          <button
                            className="site-button button-md btn-block"
                            name="submit"
                            type="submit"
                            onClick={handleSubmit}
                            value="Submit"
                          >
                            Submit
                          </button>
                        </div>
                        <div className="form-group">
                          <p className="info-bottom">
                            <a
                              data-toggle="tab"
                              href="#login"
                              className="btn-link"
                            >
                              Login with username and password?
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-8"
                style={{ backgroundColor: "#002d3ff7" }}
              >
                <div className="content-info  ">
                  <ul className="list-info">
                    <li>
                      <div className="dlab-box">
                        <i className="fa fa-bullhorn" />
                        <p>
                          Get personalized advice from the friends and travel
                          experts you trust
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="dlab-box">
                        <i className="fa fa-car" />
                        <p>
                          Easily find hotels, things to do &amp; restaurants
                          that are right for you
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="dlab-box">
                        <i className="fa fa-check" />
                        <p>It's everything you need to know</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content END*/}
        <button className="scroltop fa fa-chevron-up" />
      </div>
    </>
  );
}

export default Signup;
