import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { searchQuiz } from "../Api";
import edit from "../assests/edit.svg";
import help from "../assests/questionMark.png";
import Swal from "sweetalert2";

export default function SearchQuizCard({ data }) {
  const [serch, setSerch] = useState();
  const getData = async () => {
    try {
      await searchQuiz().then((res) => setSerch(res?.data));
    } catch (error) {
      Swal.fire({
        position: "top-left",
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {serch?.map((obj, i) => (
        <Container
          key={i}
          fluid="lg"
          className="mt-5 d-flex justify-content-center aligin-items-center"
        >
          <Row className=" mx-1 d-flex justify-content-between aligin-items-center search-quiz-card">
            <Col lg={6} md={6} sm={6}>
              <Row>
                <Col lg={12}>
                  <h1 className="text-capitalize d-flex justify-content-start aligin-items-center search-quiz-card-heading">
                    {obj.quizTitle}
                  </h1>
                </Col>
                <Col
                  lg={12}
                  className="d-lg-flex d-md-flex justify-content-between aligin-items-center"
                >
                  <div className="d-flex justify-content-start aligin-items-center">
                    <img src={help} className="edit-icon " alt="help" />

                    <p className=" ml-2 search-quiz-card-para">
                      {obj?.questions?.length} Questions
                    </p>
                  </div>
                  <div className="d-flex justify-content-start aligin-items-center">
                    <img src={edit} className="edit-icon " alt="edit" />
                    <p className=" ml-2 search-quiz-card-para">
                      Created by {obj?.user_data?.userName}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              lg={4}
              md={5}
              sm={12}
              className="d-flex justify-content-evenly align-items-center p-0"
            >
              <Link to={`/play/${obj?._id}`} className="text-decoration-none">
                <Button className="play-button d-flex justify-content-center align-items-center text-capitalize nav-subheading text-white">
                  Play
                </Button>
              </Link>
              <Button className="play-button text-white d-flex justify-content-center align-items-center share-button ml-2 text-capitalize nav-subheading">
                Share
              </Button>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
}
