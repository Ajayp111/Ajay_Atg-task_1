import React, { useState } from "react";
import { BsEyeFill, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import formImg from "../assets/img/formImage/form.png";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className="modal fade"
      id="signIn"
      tabIndex="-1"
      aria-labelledby="signInModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered d-flex d-md-block mt-2 mb-sm-0 m-auto align-items-end h-100">
        <div className="text-end d-none d-md-block">
          <button
            type="button"
            className="btn btn-close rounded-pill bg-white mb-1 p-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-content">
          <div className="modal-header justify-content-center d-none d-md-block">
            <p className="my-auto">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="d-bock d-md-none my-3">Welcome Back!</h3>
                <h3 className="d-none d-md-block">Sign In</h3>
                <p className="my-auto d-none d-md-block">
                  Don’t have an account yet?{" "}
                  <strong className="text-primary">Create new for free!</strong>
                </p>
                <div className="text-end d-block d-md-none">
                  <button
                    type="button"
                    className="btn btn-close rounded-pill bg-secondary text-white mb-1 p-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="border border-1 p-2 bg-light">
                    <input
                      type="email"
                      className="w-100 border-0 form-inputs bg-light"
                      placeholder="Email"
                    />
                  </div>
                  <div className="d-flex border border-1 bg-light p-2 align-items-center justify-content-between">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="w-100 border-0 form-inputs bg-light"
                      placeholder="Password"
                    />
                    <BsEyeFill
                      onClick={handleTogglePassword}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="mt-4 d-flex d-md-block align-items-center justify-content-between">
                    <button className="btn btn-primary w-lg-100 w-md-50 rounded-pill">
                      Sign In
                    </button>
                    <p
                      className="d-block d-md-none my-auto"
                      data-bs-toggle="modal"
                      data-bs-target="#signUp"
                    >
                      <u>or, Create Account</u>
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-outline-primary text-black w-100">
                      <BsFacebook className="me-2" />
                      Sign in with Facebook
                    </button>
                  </div>
                  <div className="mt-1">
                    <button className="btn btn-outline-primary text-black w-100">
                      <FcGoogle className="me-2" />
                      Sign in with Google
                    </button>
                  </div>
                  <div className="my-2 text-center">
                    <p>Forgot Password?</p>
                  </div>
                </div>
                <div className="col-6 d-none d-md-block">
                  <img src={formImg} className="img-fluid" alt="Form" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
