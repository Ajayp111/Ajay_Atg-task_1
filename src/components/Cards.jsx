import artImg1 from "../assets/img/cardsImage/ArticleImg.png";
import eduImg1 from "../assets/img/cardsImage/EducationImg.png";
import meetImg1 from "../assets/img/cardsImage/MeetupImg.png";
import userImg1 from "../assets/img/usersImage/user1.png";
import userImg2 from "../assets/img/usersImage/user2.png";
import userImg3 from "../assets/img/usersImage/user3.png";
import userImg4 from "../assets/img/usersImage/user4.png";

import { PiNotePencilFill, PiBagSimpleDuotone } from "react-icons/pi";
import { TbMicroscope } from "react-icons/tb";
import { IoMdCalendar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import {
  BsFillCalendarCheckFill,
  BsThreeDots,
  BsEyeFill,
  BsShareFill,
} from "react-icons/bs";

const cardsData = [
  {
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    topic: "Article",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    topicImage: artImg1,
    userImage: userImg1,
    userName: "Sarthak Kamra",
    views: "1.4k views",
    date: "",
    location: "",
    companyName: "",
  },
  {
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    topic: "Education",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    topicImage: eduImg1,
    userImage: userImg2,
    userName: "Sarah West",
    views: "1.4k views",
    date: "",
    location: "",
    companyName: "",
  },
  {
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    topic: "Meetup",
    description: "",
    topicImage: meetImg1,
    userImage: userImg3,
    userName: "Ronal Jones",
    views: "1.4k views",
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    companyName: "",
  },
  {
    title: "Software Developer",
    topic: "Job",
    description: "",
    topicImage: "",
    userImage: userImg4,
    userName: "Joseph Gray",
    views: "1.4k views",
    date: "",
    location: "Noida, India",
    companyName: "Innovaccer Analytics Private Ltd.",
  },
];

const Cards = () => {
  return (
    <div>
      {cardsData.map((item, index) => {
        return (
          <div className="card mb-2">
            {item.topicImage != "" ? (
              <img src={item.topicImage} className="card-img-top" alt="..." />
            ) : (
              ""
            )}
            <div className="card-body">
              <p className="d-flex gap-2 align-items-center fw-bold">
                {item.topic == "Article" ? (
                  <PiNotePencilFill />
                ) : item.topic == "Education" ? (
                  <TbMicroscope />
                ) : item.topic == "Meetup" ? (
                  <BsFillCalendarCheckFill />
                ) : (
                  <PiBagSimpleDuotone />
                )}
                {item.topic}
              </p>
              <div className="d-flex gap-4 justify-content-between">
                <h5 className="card-title pr-4">{item.title}</h5>
                <div className="dropdown text-black">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id={`drp${index + 1}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BsThreeDots />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby={`drp${index + 1}`}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Option3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                {item.description != "" ? (
                  <p className="card-text">{item.description}</p>
                ) : (
                  ""
                )}
                {item.topic == "Meetup" ? (
                  <div className=" my-2">
                    <div className="d-flex gap-5 fs-6 fw-bold">
                      <p className="d-flex align-items-center gap-1">
                        <IoMdCalendar />
                        {item.date}
                      </p>
                      <p className="d-flex align-items-center gap-1">
                        <IoLocationOutline />
                        {item.location}
                      </p>
                    </div>
                    <div>
                      <button className="btn border fs-5 fw-bold border-2 text-warning w-100">
                        Visit Website
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {item.topic == "Job" ? (
                  <div className=" my-2">
                    <div className="d-flex gap-5 fs-6 fw-bold">
                      <p className="d-flex align-items-center gap-1">
                        <PiBagSimpleDuotone />
                        {item.companyName}
                      </p>
                      <p className="d-flex align-items-center gap-1">
                        <IoLocationOutline />
                        {item.location}
                      </p>
                    </div>
                    <div>
                      <button className="btn border fs-5 fw-bold border-2 text-success w-100">
                        Apply On Timesjobs
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={item.userImage} />
                  <p className="m-0">{item.userName}</p>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <p className="m-0 d-flex align-items-center gap-1">
                    <BsEyeFill />
                    {item.views}
                  </p>
                  <button className="btn btn-light">
                    <BsShareFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
