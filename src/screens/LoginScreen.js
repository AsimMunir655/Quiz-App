import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import facebook from "../assests/Facebook_icon.svg";
import google from "../assests/googleIcon.svg";
import email from "../assests/email.svg";
import password from "../assests/password.svg";
import { loginUser } from "../Api";
import { useUserContext } from "../context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginScreen() {
  const { setUser } = useUserContext();
  const initailValue = {
    email: "",
    password: "",
  };
  const [check, setCheck] = useState(false);
  const [data, setData] = useState(initailValue);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      if (check) {
        const res = await loginUser(data);
        if (res?.data?.success) {
          localStorage.setItem("user", JSON.stringify(res?.data));
          setUser({ isAuth: true, ...res?.data });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log In successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigation("/");
        }
      } else {
        Swal.fire({
          position: "top-end",
          icon: 'error',
          text: 'Please mark remember me',
        })
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: 'error',
        text: 'Please fill all fields',
      })
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5 flex-column">
      <div className="login-container border d-flex align-items-center flex-column pb-4 px-3  px-md-4 px-sm-3 px-lg-5">
        <Form>
          <Form.Text className=" login-heading mt-lg-5 mt-4">
            Log In to Quizes
          </Form.Text>
          <Form.Group className="mt-3 login-form" controlId="formBasicEmail">
            <Form.Label className="profile-text ">Email or Username</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="email"
              name="email"
              className="login-input mt-1 pl-2"
            />
            <img src={email} alt="email" className="email-icon" />
            <hr className="mt-0" />
          </Form.Group>

          <Form.Group className="mt-5 login-form">
            <Form.Label className="profile-text ">Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="password"
              name="password"
              className="login-input mt-1 pl-2"
            />
            <img src={password} alt="password" className="password-icon" />
            <hr className="mt-0" />
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center relative mt-4">
            <Form.Group controlId="formBasicCheckbox" className="absolute ">
              <Form.Check
                type="checkbox"
                label="Remember me"
                onClick={() => setCheck(true)}
                className="choose-file-desc"
              />
            </Form.Group>
            <Form.Label className="nav-subheading  absolute forget d-flex justify-content-end align-items-center ">
              Forgot Password
            </Form.Label>
          </div>

          <Button
            type="submit"
            onClick={handleSubmit}
            className="login-button w-100 mt-lg-4 mt-md-3 mt-1  text-capitalize"
          >
            Login
          </Button>

          <div className="mt-lg-3  w-100 ">
            <p className="instant-para mt-3 text-center">Instant Login</p>

            <Button
              type="submit"
              className="continue-button w-100 mt-2 text-capitalize "
            >
              <img
                src={google}
                alt="google"
                className="edit-icon google-icon "
              />
              <span className="    w-100 text-white ml-2">
                Continue with Google
              </span>
            </Button>
            <Button
              type="submit"
              className="continue-button w-100 mt-4 text-capitalize "
            >
              <img
                src={facebook}
                alt="facebook"
                className="edit-icon google-icon "
              />
              <span className="profile-text  w-100 text-white ml-2">
                Continue with Facebook
              </span>
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
