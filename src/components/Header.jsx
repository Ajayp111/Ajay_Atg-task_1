import logo from "../assets/img/Logo.png";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <div className="d-flex py-3 px-2 pr-0 px-md-5 justify-content-between align-items-center">
      <span>
        <img src={logo} alt="" width="120px" height="18px" />
      </span>
      <span className="d-none d-md-flex align-items-center border gap-2 px-3 py-1 rounded-pill w-25">
        <BiSearch />
        <input
          className="border-0 header-searchbar w-100"
          type="search"
          placeholder="Search for your favorite groups in ATG"
        />
      </span>
      <span>
        <div className="dropdown text-black">
          <button
            className="btn btn-white dropdown-toggle"
            type="button"
            id="drpAcc"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Create account.<strong className="text-primary"> It’s free!</strong>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="drpAcc"
          >
            <li>
              <button
                className="dropdown-item "
                data-bs-toggle="modal"
                data-bs-target="#signIn"
                value="Sign In"
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                className="dropdown-item "
                data-bs-toggle="modal"
                data-bs-target="#signUp"
                value="Create Account"
              >
                Create Account
              </button>
            </li>
          </ul>
        </div>
      </span>
    </div>
  );
};

export default Header;
