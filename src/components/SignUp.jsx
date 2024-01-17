import formImg from "../assets/img/formImage/form.png";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import eye from "../assets/eye.svg";

const SignUp = () => {
  return (
    <div
      className="modal fade"
      id="signUp"
      tabIndex="-1"
      aria-labelledby="signUpModalLabel"
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
            <h5 className="my-auto">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </h5>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="my-3">Create Account</h3>
                <p className="my-auto d-none d-md-block">
                  Already have an account?{" "}
                  <strong className="text-primary">Sign In</strong>
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
                  <div className="d-flex bg-light">
                    <input
                      type="text"
                      className="w-100 border border-1 p-2 form-inputs bg-light"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="w-100 border border-1 p-2 form-inputs bg-light"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="border border-1 p-2 bg-light">
                    <input
                      type="email"
                      className="w-100 border-0 form-inputs bg-light"
                      placeholder="Email"
                    />
                  </div>
                  <div className="d-flex border border-1 bg-light p-2 align-items-center justify-content-between">
                    <input
                      type="password"
                      className="w-100 border-0 form-inputs bg-light"
                      placeholder="Password"
                    />
                    <img src={eye} alt="eye" className="me-2" />
                  </div>
                  <div className="d-flex border border-1 bg-light p-2 align-items-center justify-content-between">
                    <input
                      type="password"
                      className="w-100 border-0 form-inputs bg-light"
                      placeholder="Confirm Password"
                    />
                    <img src={eye} alt="eye" className="me-2" />
                  </div>
                  <div className="mt-4 d-flex d-md-block align-items-center justify-content-between">
                    <button className="btn btn-primary w-lg-100 w-md-50 rounded-pill">
                      Create Account
                    </button>
                    <p
                      className="d-block d-md-none my-auto"
                      data-bs-toggle="modal"
                      data-bs-target="#signIn"
                    >
                      <u>or, Sign In</u>
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-outline-primary text-black w-100">
                      <img src={facebook} alt="facebook" className="me-2" />{" "}
                      Sign up with Facebook
                    </button>
                  </div>
                  <div className="mt-1">
                    <button className="btn btn-outline-primary text-black w-100">
                      <img src={google} alt="google" className="me-2" /> Sign up
                      with Google
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img
                    src={formImg}
                    alt=""
                    className="img-fluid d-none d-md-block"
                  />
                  <p className="fs-6 mt-sm-2 px-4 p-sm-0">
                    By signing up, you agree to our{" "}
                    <a href="/" className="text-primary">
                      Terms & conditions
                    </a>
                    ,{" "}
                    <a href="/" className="text-primary">
                      Privacy policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
