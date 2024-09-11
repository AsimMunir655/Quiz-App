import React from "react";
import { Container, Row, Col, Overlay } from "react-bootstrap";
function QuestionPopup({ show, setShow }) {
  return (
    <>
      <Overlay show={show} placement="right">
        {({ arrowProps }) => (
          <div
            style={{
              height: "100vh",
              width: "100%",
              position: "fixed",
              top: "0%",
              left: "0%",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              zIndex: 5,
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <Container fluid="sm">
              <Row>
                <Col className="d-flex justify-content-center align-items-center rounded-sm">
                  <div className="border overlay-card bg-white ">
                    <div className="overlay-card-header d-flex justify-content-center align-items-center">
                      <p className="card-text text-right mt-3 ml-5 w-50">
                        Chose
                      </p>
                      <div className="w-50 d-flex justify-content-end align-items-center">
                        <div
                          className="overlay-card-close "
                          onClick={() => setShow(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-x-lg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-100 pt-1 card-inner">
                      <h1 className="overlay-card-heading">My Banks</h1>

                      <label className="d-flex ml-4 pl-1 mt-1">
                        <input type="checkbox" name="" />
                        <span className="cb-icon mt-1"></span>
                        <span className="text-dark ml-2 overlay-card-para">
                          Bank 01
                        </span>
                      </label>

                      <label className="d-flex ml-4 pl-1 mt-1">
                        <input type="checkbox" name="" />
                        <span className="cb-icon mt-1"></span>

                        <span className="text-dark ml-2 overlay-card-para">
                          Bank 02
                        </span>
                      </label>
                    </div>
                    <div className="w-100 card-inner">
                      <h1 className="overlay-card-heading">Favourite Banks</h1>

                      <label className="d-flex ml-4 pl-1 mt-1">
                        <input type="checkbox" name="" />
                        <span className="cb-icon mt-1"></span>
                        <span className="text-dark ml-2 overlay-card-para">
                          Bank 03
                        </span>
                      </label>
                      <label className="d-flex ml-4 pl-1 mt-1">
                        <input type="checkbox" name="" />
                        <span className="cb-icon mt-1"></span>

                        <span className="text-dark ml-2 overlay-card-para">
                          Bank 04
                        </span>
                      </label>
                    </div>
                    <div className="w-100 mt-4 d-flex justify-content-center align-items-center">
                      <button
                        type="submit"
                        className="overlay-card-button text-capitalize"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Overlay>
    </>
  );
}

export default QuestionPopup;
