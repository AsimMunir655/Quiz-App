import React from "react";
import GeoGraphy from "../assests/geoGraphy.png";
import Phy from "../assests/phy.png";
import History from "../assests/history.png";
import Lamp from "../assests/lampppp.png";
import Bio from "../assests/bio.png";
import Che from "../assests/chemistry.png";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className=" d-felx flex-columns justify-content-center align-items-center">
      <div className="mx-auto category_container  flex-column">
        <center id="category_head">Choice your best Quiz Category</center>
        <center id="category_p">
          Make learning fun for your students, trainees, and attendees with a
          modern take on quizzes.
        </center>
      </div>
      <div className="mx-auto category_container ">
        <div className="row d-felx justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="mx mx-auto d-felx justify-content-center align-items-center">
              <img src={GeoGraphy} alt="Geography" />
              <h1 className="text-capitalize category_heading">Geography</h1>
              <Link to="/question">
                <button>Get Started</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="mx mx-auto">
              <img src={Phy} alt="Physics" />
              <h1 className="text-capitalize category_heading">Physics</h1>
              <Link to="/question">
                <button>Get Started</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="mx mx-auto">
              <img src={History} alt="History" />
              <h1 className="text-capitalize category_heading">History</h1>
              <Link to="/question">
                <button>Get Started</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="mx mx-auto">
            <img src={Che} alt="Biology" />
            <h1 className="text-capitalize category_heading">Biology</h1>
            <Link to="/question">
              <button>Get Started</button>
            </Link>
          </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="mx mx-auto">
            <img src={Bio} alt="Chemistry" />
            <h1 className="text-capitalize category_heading">Chemistry</h1>
            <Link to="/question">
              <button>Get Started</button>
            </Link>
          </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="mx mx-auto">
            <img src={Lamp} alt="Literature" />
            <h1 className="text-capitalize category_heading">Literature</h1>
            <Link to="/question">
              <button>Get Started</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
