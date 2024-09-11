import React from "react";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <>
      <div className="main ">
        <div className="main-frame  pt-1 ">
          <div className=" main-frame-div  pt-1 ">
            <div className=" main-div ml-lg-3 ml-md-3 ml-sm-3 ml-0">
              <h1 className="heading text-capitalize ">
                Make a Quiz to Generate Knowledge for your Life
              </h1>
              <p className="main-para">
                Make learning fun for your students, trainees, and attendees
                with a modern take on quizzes.
              </p>
              <div className="start_btn">
                <Link to="/signup">
                  <button className="main-button">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
