import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signupUser } from "../Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const signinSchema = Yup.object().shape({
  userName: Yup.string().required("User name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be 4 characters at minimum")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .label("Confirm Password")
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
function SignupScreen() {
  const navigation = useNavigate();
  return (
    <div className="signup-screen">
      <div className="form py-5">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              userName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signinSchema}
            onSubmit={async (values) => {
              if (values.confirmPassword) {
                delete values.confirmPassword;
              }
              const res = await signupUser(values);
              if (res?.status === 200) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Signedup successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigation("/login");
              } else {
                Swal.fire({
                  title: `${res?.data?.message}`,
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
              }
            }}
          >
            {({ touched, errors, isSubmitting, values }) => (
              <>
                <div className="px-3 ">
                  <div className="row mb-2">
                    <div className="col-lg-12 text-center">
                      <h1 className=" login-heading">Sign Up to Quizes</h1>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group forminput">
                      <label htmlFor="userName" className="profile-text">
                        User Name
                      </label>
                      <Field
                        type="text"
                        name="userName"
                        autoComplete="off"
                        className={`mt-2 form-control pl-2
						          ${touched.userName && errors.userName ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="userName"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group forminput">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="text"
                        name="email"
                        autoComplete="off"
                        className={`mt-2 form-control pl-2
						          ${touched.email && errors.email ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group forminput">
                      <label htmlFor="password" className="mt-1">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className={`mt-2 form-control pl-2
						${touched.password && errors.password ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group forminput">
                      <label htmlFor="confirmPassword" className="mt-1">
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        className={`mt-2 form-control pl-2
						${touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="confirmPassword"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-main">
                      <button
                        type="submit"
                        className="signin-button w-100 mt-2"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
