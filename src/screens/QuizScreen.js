import React from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import create from "../assests/create.svg";
import cancel from "../assests/cancel.svg";
import del from "../assests/del.svg";
import { createQuiz } from "../Api";
import { Formik, Form, Field, FieldArray } from "formik";

export default function QuizScreen() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Formik
      initialValues={{
        user_id: `${user?.userId}`,
        quizTitle: "",
        quizdesc: "",
        questions: [
          {
            question: "",
            options: ["", "", "", ""],
            correctAnswer: "",
          },
        ],
      }}
      onSubmit={async (values) => {
        let res = await createQuiz(values);
        if (res?.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      }}
    >
      {({ values, resetForm }) => (
        <Form>
          <div>
            <div className="d-flex justify-content-center align-items-center mx-3">
              <div className="quiz-title-card">
                <Field
                  type="text"
                  placeholder="Quiz Title"
                  name="quizTitle"
                  className="quiz-card-heading quiz-card-input w-100 mt-2"
                />
                <hr />
                <Field
                  type="text"
                  placeholder="Quiz Description"
                  name="quizdesc"
                  className="rofile-text px-0 pl-2 pb-3 w-100 quiz-desc-input"
                />
              </div>
            </div>
            <FieldArray name="questions">
              {({ insert, remove, push }) => (
                <>
                  <Container className="w-100 d-flex justify-content-center aligin-items-center">
                    <div className=" mt-4 d-flex justify-content-start align-items-center create-container">
                      <button
                        type="button"
                        className="overlay-card-button p-0 create-quiz-button"
                        onClick={() =>
                          push({
                            question: "",
                            options: ["", "", "", ""],
                            correctAnswer: null,
                          })
                        }
                      >
                        Add a question
                      </button>
                      <button
                        type="button"
                        className="overlay-card-button px-1 create-quiz-button ml-3 "
                        onClick={() => remove({})}
                      >
                        Remove question
                      </button>
                    </div>
                  </Container>
                  <div className="px-3">
                    {values?.questions?.length > 0 &&
                      values?.questions?.map((question, index) => (
                        <div
                          className="w-100 d-flex justify-content-center aligin-items-center mt-2 "
                          key={index}
                        >
                          <div className="px-0 mt-2 create-question-card ">
                            <div className="d-flex mx-3 mt-2">
                              <h1
                                className="pt-2 "
                                style={{ color: "#454f59" }}
                              >
                                {index + 1}.
                              </h1>
                              <Field
                                name={`questions.${index}.question`}
                                placeholder="Untitled Question"
                                type="text"
                                className="mt-2 create-question-card-heading quiz-card-input d-flex w-100"
                              />
                            </div>
                            <hr className="mx-3" />
                            <FieldArray name={`questions.${index}.options`}>
                              {({ insert, remove, push }) => (
                                <>
                                  <div key={index}>
                                    {values?.questions[index]?.options?.length >
                                      0 &&
                                      values?.questions[index]?.options?.map(
                                        (option, index2) => (
                                          <>
                                            <div
                                              className="row  w-100 ml-0 d-flex align-items-center"
                                              key={index2}
                                            >
                                              <div className="col mt-2 pl-3 w-100 d-flex">
                                                <h4
                                                  style={{ color: "#454f59" }}
                                                >
                                                  {index2 + 1}.
                                                </h4>
                                                <Field
                                                  name={`questions.${index}.options.${index2}`}
                                                  type="text"
                                                  placeholder={`Enter Option${
                                                    index2 + 1
                                                  }`}
                                                  className="w-75 overlay-card-para create-question pl-1"
                                                />
                                              </div>
                                              <div
                                                className="pr-3"
                                                key={index2}
                                              >
                                                <button
                                                  type="button"
                                                  className="delete-div"
                                                  onClick={() => remove(index2)}
                                                >
                                                  <img
                                                    src={del}
                                                    className="delete"
                                                    alt="del"
                                                  />
                                                </button>
                                              </div>
                                            </div>
                                          </>
                                        )
                                      )}

                                    <div className=" mt-2 d-lg-flex d-md-flex d-sm-flex justify-content-between align-items-center pr-3">
                                      <Field
                                        name={`questions.${index}.correctAnswer`}
                                        placeholder="Enter correct option number"
                                        type="number"
                                        className="correct-option ml-4"
                                      />
                                      <button
                                        type="button"
                                        className="overlay-card-button px-1 create-quiz-button ml-4 mt-3 ml-lg-0"
                                        onClick={() => push("")}
                                      >
                                        Add Option
                                      </button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </FieldArray>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </FieldArray>
          </div>
          <Container className=" d-flex justify-content-center aligin-items-center mt-5">
            <div className="d-flex justify-content-end align-items-center create-container">
              <button type="submit" className=" p-0 create-button">
                <div className="relative d-flex justify-content-center align-items-center create-button-div ">
                  <img src={create} alt="create mt-5" />
                  <p className="ml-1 create-button-text text-white pt-3">
                    Create
                  </p>
                </div>
              </button>
              <button
                onClick={() => {
                  resetForm({
                    values: {
                      user_id: "",
                      quizTitle: "",
                      quizdesc: "",
                      questions: [
                        {
                          question: "",
                          options: ["", "", "", ""],
                          correctAnswer: null,
                        },
                      ],
                    },
                  });
                }}
                type="submit"
                className=" p-0 ml-2 cancel-button"
              >
                <div className="relative d-flex justify-content-center align-items-center cancel-button-div">
                  <img src={cancel} alt="cancel" />
                  <p className="ml-2 create-button-text absolute text-white cancel-button-text">
                    Cancel
                  </p>
                </div>
              </button>
            </div>
          </Container>
        </Form>
      )}
    </Formik>
  );
}
