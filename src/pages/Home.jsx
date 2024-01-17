import React, { useEffect } from "react";
import Header from "../components/Header";
import "./home.css";
import cse from "../assets/img/Computer Engineering.png";
import Cards from "../components/Cards";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import edit from "../assets/editPencil.svg";

import { IoLocationOutline } from "react-icons/io5";
import { MdEdit, MdInfoOutline } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { useState } from "react";
import RecomGroups from "../components/RecomGroups";

const Home = () => {
  // eslint-disable-next-line
  const [filterValue, setFilterValue] = useState("All");

  const [isJoined, setIsJoined] = useState(false);
  const [location, setLocation] = useState("Noida, India");
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setHasScrolled(false);
    } else {
      setHasScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleJoinGroup = () => {
    console.log("Button clicked!");
    setIsJoined((prevIsJoined) => !prevIsJoined);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <Header />
      <SignIn />
      <SignUp />
      <div className="container-fluid p-0 position-relative">
        <img
          src={cse}
          className="w-100 cse img-fluid banner-image grayscale-image "
          style={{
            height: "300px",
            objectFit: "cover",
            maxWidth: "100%",
          }}
          alt="cse"
        />

        <div className="position-absolute top-0 end-0 p-3 d-md-none">
          <button
            className={`btn btn-primary d-flex align-items-center gap-2 ${
              isJoined ? "btn-danger" : ""
            }`}
            onClick={toggleJoinGroup}
            style={{ zIndex: 1 }}
          >
            {isJoined ? "Leave Group" : "Join Group"}
          </button>
        </div>
        <div className="cse-content" style={{ fontSize: "1.5rem" }}>
          <h3 style={{ fontSize: "2rem" }}>Computer Engineering</h3>
          <p style={{ fontSize: "1.2rem" }}>
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>

      <div className="container p-lg-5 py-3 px-md-0">
        <div className="px-lg-5 px-md-0 d-flex justify-content-between">
          <div className="d-flex gap-2">
            <button className="border border-2 border-black border-top-0 border-end-0 border-start-0 bg-white">
              All Posts(32)
            </button>
            <button className="border-0 bg-white d-none d-md-block">
              Article
            </button>
            <button className="border-0 bg-white d-none d-md-block">
              Event
            </button>
            <button className="border-0 bg-white d-none d-md-block">
              Education
            </button>
            <button className="border-0 bg-white d-none d-md-block">Job</button>
          </div>
          <div className="d-flex d-md-none gap-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle fw-bold text-white "
                type="button"
                id="drpFilter"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                // style={{ backgroundColor: "gray" }}
              >
                Filter: <span className="me-3">{filterValue}</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="drpFilter"
              >
                <li>
                  <button className="dropdown-item " value="All">
                    All
                  </button>
                </li>
                <li>
                  <button className="dropdown-item " value="Article">
                    Article
                  </button>
                </li>
                <li>
                  <button className="dropdown-item " value="Event">
                    Event
                  </button>
                </li>
                <li>
                  <button className="dropdown-item " value="Education">
                    Education
                  </button>
                </li>
                <li>
                  <button className="dropdown-item " value="Job">
                    Job
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-none d-md-flex gap-4">
            <button className="btn btn-light dropdown-toggle">
              Write a Post
            </button>
            <button
              className={`btn btn-primary d-flex align-items-center gap-2 ${
                isJoined ? "btn-danger" : ""
              }`}
              onClick={toggleJoinGroup}
            >
              {isJoined ? "Leave Group" : "Join Group"}
            </button>
          </div>
        </div>
        <div className="px-lg-5 px-md-0 d-none d-md-block">
          <hr />
        </div>
      </div>
      <div className="container px-lg-5 px-md-0 pb-5">
        <div className="row px-lg-5 px-md-0">
          <div className="col-lg-8 col-md-7 col-sm-12">
            <Cards />
          </div>
          <div className="col-lg-4 col-md-5 d-none d-md-block ps-5">
            <div className="ms-5 py-2 d-flex align-items-center gap-2 border border-2 border-top-0 border-end-0 border-start-0">
              <IoLocationOutline className="fs-3" />
              <input
                className="border-0 header-searchbar bg-white fw-bold text-black w-100"
                type="search"
                value={location}
                onChange={handleLocationChange}
              />
              <MdEdit className="fs-3" />
            </div>
            <div className="ms-5 mt-4 d-flex gap-3 text-secondary">
              <MdInfoOutline className="fs-3" />
              <p className="fs-7">
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
            <div>
              <div className="ms-5 mt-4 d-flex gap-3 text-secondary">
                <BiSolidLike className="fs-3" />
                <p className="text-uppercase fs-7 my-auto">
                  Recommended Groups
                </p>
              </div>
              <div className="ms-5 mt-4">
                <RecomGroups />
              </div>
            </div>
          </div>
        </div>
      </div>
      {hasScrolled ? null : (
        <div
          className=" rounded-circle d-flex justify-content-center align-items-center position-fixed d-lg-none"
          style={{ bottom: "18px", right: "18px" }}
          onClick={() => console.log("Pencil icon clicked!")}
        >
          <img src={edit} alt="pencil" className="pencil-icon" />
          {/* <img src={edit} alt="write a post" height={24} width={24} /> */}
        </div>
      )}
    </>
  );
};

export default Home;
