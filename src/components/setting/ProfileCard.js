import React, { useState } from "react";
import profile from "../../assests/profile-pic.svg";
import editIcon from "../../assests/edit-profile.svg";
import { profileChange } from "../../Api";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProfileCard() {
  const { id } = useParams();
  const [filename, setImage] = useState("");
  const [data, setData] = useState({
    userName: "",
    city: "",
    country: "",
    bio: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handlefile = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSave = async (e) => {
    e.preventDefault();
    const { userName, city, country, bio } = data;
    if (filename && userName && city && country && bio) {
      var formData = new FormData();
      formData.append("userName", userName);
      formData.append("filename", filename);
      formData.append("city", city);
      formData.append("country", country);
      formData.append("bio", bio);
      for (var [key, value] of formData.entries()) {
        console.log(key, value);
      }
      const res = await profileChange(id, formData);
      if (res?.data === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "changes saved successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Please fill all fields",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form
      encType="multipart/form-data"
      className="profile-card border d-flex justify-content-center mt-5"
    >
      <div className="profile-card-inner-div ">
        <h1 className="card-text text-capitalize pt-3">Your Photo</h1>
        <div className="d-flex mt-4 ">
          <div>
            <img src={profile} alt="Profile" className="profile-image-card " />
            <img src={editIcon} alt="edit" className=" profile-edit" />
          </div>
          <div className="pl-3">
            <input
              type="file"
              id="profile"
              name="filename"
              onChange={handlefile}
              accept="image/png, image/jpeg,image/gif"
            />
            <label htmlFor="profile" className="pt-1">
              JPG, PNG or GIF, 150X150 min image will be resized if larger
            </label>
          </div>
        </div>
        <div className=" py-3">
          <div className="d-flex justify-content-between align-items-center mt-2">
            <label className="profile-label">Username</label>
            <input
              type="text"
              onChange={handleChange}
              name="userName"
              className="w-75 profile-input p-2"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <label className="profile-label">City</label>
            <select
              value={data.city}
              className="w-75 profile-input p-2"
              onChange={handleChange}
              name="city"
            >
              <option>Teraboko</option>
              <option>Karachi</option>
            </select>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <label className="profile-label">Country</label>
            <select
              onChange={handleChange}
              name="country"
              className="w-75 profile-input p-2"
            >
              <option>Teraboko</option>
              <option>Karachi</option>
            </select>
          </div>
          <div className="d-flex  mt-3 flex-column ">
            <div className="d-flex justify-content-between align-items-start mt-1 w-100">
              <label className="profile-label">Bio</label>
              <textarea
                rows="4"
                maxLength="250"
                onChange={handleChange}
                className="w-75 profile-textarea p-2"
                name="bio"
                defaultValue="Hi, I am Mohamed Ibrahim"
              />
            </div>
            <p className="search-quiz-card-para text-center w-50 ml-5 pl-4 mt-1">
              {data.bio.length}/250 characters
            </p>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <button onClick={handleSave} className="profile-save-button">
              <span className=" ">Save Change</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
