import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SubjectCard from "../components/SubjectCard";
import { PlayQuizById } from "../Api";
import Swal from "sweetalert2";

export default function QuestionScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [correct, setCorrect] = useState(null);
  const [data, setData] = useState();

  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        await PlayQuizById(id).then((res) => setData(res?.data));
      } catch (error) {
        Swal.fire({
          position: "top-left",
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const numberOfQuestions = data?.questions?.length;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * 1;
  const endIndex = startIndex + 1;
  const currentCards = data?.questions.slice(startIndex, endIndex);
  const totalPages = Math.ceil(numberOfQuestions / 1);

  return (
    <>
      {currentCards?.map((obj, i) => (
        <Container key={obj._id} fluid="sm">
          <Row>
            <Col className="d-flex justify-content-center align-items-center rounded-sm">
              <div className="border question-card pb-1">
                <div className="card-header">
                  <p className="card-text">Question</p>
                </div>
                <div className="d-flex flex-column w-100 align-items-center pt-3 card-inner">
                  <h1 className="card-text text-center">{obj.question}</h1>
                  {obj?.options.map((ele, id) => (
                    <button
                      key={id}
                      id={id}
                      className={`card-button ${
                        correct === id && obj?.correctAnswer === id + 1
                          ? "active"
                          : "" ||
                            (correct === id && obj?.correctAnswer !== id + 1)
                          ? "inactive"
                          : ""
                      }`}
                      onClick={() => {
                        setCorrect(id);
                      }}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ))}

      <div className="pagination-card d-flex align-items-center px-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <>
            <button
              key={i}
              onClick={() => {
                handlePageChange(i + 1);
                setCorrect(null);
              }}
              className={`border pagination px-3 ml-2 ${
                currentPage === i + 1 ? "active" : "inactive"
              }`}
            >
              {i + 1}
            </button>
          </>
        ))}
      </div>
      <SubjectCard
        numberOfQuestions={numberOfQuestions}
        title={data?.quizTitle}
      />
    </>
  );
}
