import React from "react";
import { Form, Button, InputGroup, Container } from "react-bootstrap";
import search from "../assests/searchicon.svg";

export default function SearchCard() {
  return (
    <Container
      fluid="lg"
      className="d-flex justify-content-center aligin-items-center mt-3 "
    >
      <InputGroup className="mb-3 mt-3 d-flex justify-content-center aligin-items-center search-card bg-card-color">
        <Form.Control
          placeholder="Search Quize"
          aria-label="Search Quize"
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
  );
}
