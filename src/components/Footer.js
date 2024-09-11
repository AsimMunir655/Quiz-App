import React from "react";
import { Row, Col } from "react-bootstrap";
import twitter from "../assests/twitter.svg";
import instagram from "../assests/instagram.svg";
import youtube from "../assests/youtube.svg";
import img5 from "../assests/googleplay.svg";
import img6 from "../assests/appstore.svg";
import facebook from "../assests/facebook.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <Row className="w-100">
            <Col lg={5} md={6}>
              <div className="pb-2">
                <h1 className="footer-card1-heading text-white text-capitalize mt-lg-0 mt-4">
                  Quizes
                </h1>
                <p className="footer-card1-para pt-2 text-white">
                  Meet your favorite celebrities and creatives
                </p>
              </div>
              <div className=" pt-lg-5 pt-md-4 pt-lg-3 pt-0 pb-lg-5 pb-3 d-flex flex-column justify-content-start align-items-start">
                <h1 className="followus text-white text-capitalize ">
                  Follow us
                </h1>
                <div className="d-flex card1 justify-content-between">
                  <div className="social px-3 py-lg-2">
                    <a href="https://www.facebook.com/">
                      <img src={facebook} alt="facebook" />
                    </a>
                  </div>
                  <div className="social">
                    <a href="https://twitter.com/?lang=en">
                      <img src={twitter} alt="twitter" />
                    </a>
                  </div>
                  <div className="social">
                    <a href="https://www.instagram.com/">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </div>
                  <div className="social">
                    <a href="https://www.youtube.com/">
                      <img src={youtube} alt="youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={2} md={6}>
              <div className="pb-lg-3 pb-1">
                <h1 className="about text-white text-capitalize">About</h1>
                <ul className="list-unstyled footer-ul mt-lg-3 mt-2">
                  <li className="footer-card1-para text-white mt-1">
                    Contact Us
                  </li>
                  <li className="footer-card1-para text-white mt-1">
                    Privacy Policy
                  </li>
                  <li className="footer-card1-para text-white mt-1">
                    Term of Use
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5} md={12}>
              <div>
                <h1 className="about text-white text-capitalize">
                  Quickly Download
                </h1>
                <div className="d-flex  flex-column flex-md-row flex-sm-row flex-lg-row">
                  <img
                    src={img5}
                    alt="google app"
                    className="footer-img  google mt-2"
                  />
                  <img
                    src={img6}
                    alt="app store"
                    className="ml-lg-2 mt-2 google footer-img"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bar  text-white d-flex justify-content-center align-items-center">
        <p className="footer-card1-para mt-4">© 2022 All Rights Reserved </p>
      </div>
    </>
  );
}
