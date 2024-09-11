import React, { useState } from "react";
import { basicInfo } from "../../Api";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function BasicInfo() {
  const { id } = useParams();
  const [data, setData] = useState({
    userName: "",
    email: "",
    gender: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    const { userName, email, gender } = data;
    if (userName && email && gender) {
      let user = { userName, email, gender };
      const res = await basicInfo(id, user);
      if (res.status === 200) {
        Swal.fire({
          title: "Basic info updated successfully",
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
    <div className="basic-info border mt-5">
      <div className=" py-3">
        <div className="d-flex justify-content-between align-items-center mt-2">
          <label className="profile-label pr-3">Username</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            className="w-75 profile-input p-2"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <label className="profile-label">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            className="w-75 profile-input p-2"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <label className="profile-label">Gender</label>
          <select
            name="gender"
            onChange={handleChange}
            value={data.gender}
            className="w-75 profile-input p-2"
          >
            <option>Select gender</option>

            <option>male</option>
            <option>female</option>
            <option>other</option>
          </select>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">
          <button onClick={handleSubmit} className="profile-save-button">
            <span>Save Change</span>
          </button>
        </div>
      </div>
    </div>
  );
}
