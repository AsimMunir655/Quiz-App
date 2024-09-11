import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { passwordChange } from "../../Api";
import Swal from "sweetalert2";

export default function Password() {
  const { id } = useParams();
  const [data, setData] = useState({
    password: "",
    new_password: "",
    confirm_password: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    const { confirm_password, new_password, password } = data;
    if (password && new_password && confirm_password) {
      if (new_password === confirm_password) {
        let user = { password, new_password };
        const { data } = await passwordChange(id, user);
        if (data) {
          Swal.fire({
            title: "Password updated successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        } else {
          Swal.fire({
            title: "Something wents wrong",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      } else {
        Swal.fire({
          title: "Password and confirm passwords are not matched",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    } else {
      Swal.fire({
        title: "Please fill all fields",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };
  return (
    <div className="password-card border mt-5">
      <div className=" py-3">
        <div className="d-flex justify-content-between align-items-center mt-2">
          <label className="profile-label">Current Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="password-input  profile-input p-2"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <label className="profile-label">New Password</label>
          <input
            type="password"
            name="new_password"
            onChange={handleChange}
            className="password-input profile-input p-2"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <label className="profile-label">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            className="password-input profile-input p-2"
          />
        </div>
        <div className="d-flex justify-content-end align-items-center mt-4">
          <button
            onClick={(e) => handleSubmit(e)}
            className="profile-save-button "
          >
            <span>Save Change</span>
          </button>
        </div>
      </div>
    </div>
  );
}
