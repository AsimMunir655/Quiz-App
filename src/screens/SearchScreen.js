import React, { useState, useEffect, useDeferredValue } from "react";
// import SearchQuizCard from "../components/SearchQuizCard";
import { Form, Button, InputGroup, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import search from "../assests/search.svg";
import { searchQuiz } from "../Api";
import edit from "../assests/edit.svg";
import help from "../assests/help.svg";
import Swal from "sweetalert2";
import ShareModal from "../components/ShareModal";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [serch, setSerch] = useState();
  const [share, setShare] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const getData = async () => {
    try {
      await searchQuiz(query).then((res) => setSerch(res?.data));
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
    if (query.length === 0 || query.length > 2) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, deferredQuery]);

  return (
    <>
      <Container
        fluid="lg"
        className="d-flex justify-content-center aligin-items-center mt-3 "
      >
        <InputGroup className="mb-3 mt-3 d-flex justify-content-center aligin-items-center search-card bg-card-color">
          <Form.Control
            placeholder="Search Quize"
            aria-label="Search Quize"
            name="quizTitle"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            aria-describedby="basic-addon2"
            className="bg-transparent outline-none subheading search-input text-dark text-left"
          />
          <Button className="search-button">
            <img
              src={search}
              style={{ margin: "-5px 0px 0px -12px" }}
              alt="search"
            />
          </Button>
        </InputGroup>
      </Container>
      <>
        {serch?.map((obj, i) => (
          <Container
            key={i}
            fluid="lg"
            className="mt-5 d-flex justify-content-center aligin-items-center  "
          >
            <ShareModal share={share} setShare={setShare} />

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
                <Button
                  onClick={() => setShare(true)}
                  className="play-button text-white d-flex justify-content-center align-items-center share-button ml-2 text-capitalize nav-subheading"
                >
                  Share
                </Button>
              </Col>
            </Row>
          </Container>
        ))}
      </>
    </>
  );
}
