import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import redbar from "../../assests/redbar.svg";
import { Link, Outlet } from "react-router-dom";
import { useUserContext } from "../../context";

export default function SettingCard() {
  const { user } = useUserContext();
  const initialState = {
    comp1: false,
    comp2: false,
    comp3: false,
  };
  const [comp, setComp] = useState(initialState);

  return (
    <Container className="mx-auto  mt-5  d-flex justify-content-center align-items-center">
      <Row className=" profile-container d-lg-flex flex-wrap d-md-flex justify-content-between">
        <Col lg={5} sm={12} className="m-0">
          <h1 className="setting-heading text-capitalize">Settings: Profile</h1>
          <Card className="setting-card">
            <Card.Header className="quiz-card-heading text-center pt-4 setting-text">
              SETTNGS
            </Card.Header>
            <ListGroup variant="flush">
              <Link
                to={`/setting/profile/${user.userId}`}
                className="text-decoration-none"
              >
                <ListGroup.Item className=" p-0 setting-inner-div d-flex justify-content-between align-items-center border-0">
                  <img
                    src={redbar}
                    className={`${comp.comp1 ? "visible" : "invisible"}`}
                    style={{
                      height: "50px",
                      width: "50px",
                      marginLeft: "-22px",
                    }}
                    alt="sidebar"
                  />
                  <p
                    className={`w-75 text-start ${
                      comp.comp1 === true
                        ? "setting-inner-div-color setting-button-color"
                        : "setting-inner-div-color "
                    }`}
                    onClick={() => {
                      setComp({ ...initialState, comp1: true });
                    }}
                  >
                    Profile
                  </p>
                </ListGroup.Item>
              </Link>
              <Link
                to={`/setting/basicinfo/${user.userId}`}
                className="text-decoration-none"
              >
                <ListGroup.Item className=" p-0 setting-inner-div d-flex justify-content-between align-items-center border-0">
                  <img
                    src={redbar}
                    className={`${comp.comp2 ? "visible" : "invisible"}`}
                    style={{
                      height: "50px",
                      width: "50px",
                      marginLeft: "-22px",
                    }}
                    alt="sidebar"
                  />
                  <p
                    className={`w-75 text-start ${
                      comp.comp2 === true && comp.comp1 === false
                        ? "setting-inner-div-color setting-button-color"
                        : "setting-inner-div-color "
                    }`}
                    onClick={() => {
                      setComp({ ...initialState, comp2: true, comp1: false });
                    }}
                  >
                    Basic Info
                  </p>
                </ListGroup.Item>
              </Link>
              <Link
                to={`/setting/password/${user.userId}`}
                className="text-decoration-none"
              >
                <ListGroup.Item className=" p-0 setting-inner-div d-flex justify-content-between align-items-center border-0">
                  <img
                    src={redbar}
                    className={`${comp.comp3 ? "visible" : "invisible"}`}
                    style={{
                      height: "50px",
                      width: "50px",
                      marginLeft: "-22px",
                    }}
                    alt="sidebar"
                  />
                  <p
                    className={`w-75 text-start ${
                      comp.comp3 === true && comp.comp1 === false
                        ? "setting-inner-div-color setting-button-color"
                        : "setting-inner-div-color "
                    }`}
                    onClick={() => {
                      setComp({ ...initialState, comp3: true, comp1: false });
                    }}
                  >
                    Password
                  </p>
                </ListGroup.Item>
              </Link>
            </ListGroup>
          </Card>
        </Col>
        <Col lg={6} sm={12}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
