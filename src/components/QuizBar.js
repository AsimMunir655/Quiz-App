import React from "react";
import { useUserContext } from "../context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import image from "../assests/Vector.svg";

const QuizBar = () => {
  const { user } = useUserContext();

  const location = useLocation();
  const Navigation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    Navigation("/login");
    window.location.reload(false);
  };

  return (
    <header
      className={`${location.pathname === "/" ? "nav" : "nav nav-color"}`}
    >
      <Navbar className={"navbar-width"} expand="lg" collapseOnSelect>
        <Link to="/" className="text-decoration-none">
          <h1 className="nav-heading m-0 mt-1 text-capitalize">Quizes</h1>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 outline-0"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-lg-between align-items-lg-center align-items-start   w-100">
            <div className="d-lg-flex justify-content-between align-items-center w-50 md-w-100 ">
              <div className=" d-block  d-lg-flex justify-content-between align-items-center w-50 mt-3 ">
                <Link to="/play" className="text-decoration-none">
                  <p className=" text-capitalize text-centere subheading ">
                    Play
                  </p>
                </Link>

                <Link to="/create" className="text-decoration-none">
                  <p className=" text-capitalize subheading">Create</p>
                </Link>

                <Link to="/search" className="text-decoration-none">
                  <p className=" text-capitalize subheading">Search</p>
                </Link>
                {user ? (
                  <DropdownButton id="dropdown-basic-button" title="Banks">
                    <Dropdown.Item className="text-capitalize ">
                      <Link
                        to={`/bank/${user?.userId}`}
                        className="text-decoration-none"
                      >
                        MY Banks
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item className="text-capitalize ">
                      <Link
                        to={`/favBank/${user?.userId}`}
                        className="text-decoration-none"
                      >
                        Favorite Banks
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item className="text-capitalize ">
                      <Link to="/setting" className="text-decoration-none">
                        See Your Profile
                      </Link>
                    </Dropdown.Item>
                  </DropdownButton>
                ) : null}
              </div>
            </div>
            <div>
              {user ? (
                <div className="w-100 d-flex justify-content-start align-items-center">
                  <DropdownButton
                    id="dropdown-basic-button "
                    title={user.userName}
                    className="mr-1 mt-2 text-capitalize"
                  >
                    <Dropdown.Item
                      onClick={handleLogout}
                      className="text-capitalize"
                    >
                      Log Out
                    </Dropdown.Item>
                  </DropdownButton>
                  <div className="profile-image lg-ml-0">
                    {user?.filename ? (
                      <img
                        src={`/uploads/${user?.filename}`}
                        alt="profile"
                        className="h-100 w-100"
                      />
                    ) : (
                      <img src={image} alt="profile" className="h-100 w-100" />
                    )}
                  </div>
                </div>
              ) : (
                <div className="mt-lg-0 mt-4">
                  <Link to="/login" className="text-decoration-none">
                    <button id="three" className="ml-lg-5  ">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/signup" className="text-decoration-none ">
                    <button id="four">Sign Up</button>
                  </Link>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default QuizBar;
