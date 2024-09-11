import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuestionPopup from "./QuestionPopup";
import img1 from "../assests/thumbpin.svg";
import img2 from "../assests/favorite.svg";
import img3 from "../assests/sharelogo.svg";
import ShareModal from "../components/ShareModal";
import { favQuiz } from "../Api";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function SubjectCard({ title, numberOfQuestions }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [show, setShow] = useState(false);
  const [share, setShare] = useState(false);
  const [fav, setFav] = useState(false);
  const { id } = useParams();
  const postFavorites = async () => {
    if (fav) {
      const favoriteData = await {
        user_id: `${user?.userId}`,
        quiz_id: id,
        title: title,
        favorite: true,
        scores: 30,
        totalQuestions: numberOfQuestions,
      };
      try {
        const res = await favQuiz(id, favoriteData);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to favorites",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: `oops...`,
            text: "Something went wrong!",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error?.message}`,
          text: "Something went wrong!",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center px-3">
        <div className="subject-card px-3">
          <Container>
            <Row className=" d-flex justify-content-between align-items-center">
              <Col
                lg={4}
                md={4}
                sm={6}
                className="w-50 lg-w-100 md-w-100 sm-w-100"
              >
                <p className="profile-text m-0 pt-1 lg-pt-1 md-pt-1 sm-pt-1">
                  Currently Playing
                </p>
                <h1 className="card-text text-capitalize">{title}</h1>
              </Col>
              <Col
                lg={2}
                md={3}
                sm={3}
                className=" w-50 lg-w-100 md-w-100 sm-w-100"
              >
                <div className="d-flex justify-content-between align-items-center pt-2 pb-2 lg-pt-2 sm-pt-2 md-pt-2 ">
                  <img
                    src={img1}
                    alt="logo"
                    className="subject-logo"
                    onClick={() => setShow(true)}
                  />
                  <img
                    src={img2}
                    alt="logo"
                    className="subject-logo"
                    onClick={() => {
                      setFav(true);
                      postFavorites();
                    }}
                  />
                  <img
                    src={img3}
                    alt="logo"
                    className="subject-logo"
                    onClick={() => setShare(true)}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <QuestionPopup show={show} setShow={setShow} />
      <ShareModal share={share} setShare={setShare} />
    </>
  );
}
