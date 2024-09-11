import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavBankTable from "../components/FavBankTable";
import Paginate from "../components/Paginate";
import { useUserContext } from "../context";
import { getAllFavQuiz } from "../Api";
import { useParams } from "react-router-dom";

export default function FavoriteBankScreen() {
  const { user } = useUserContext();
  const [data, setData] = useState();

  const { id } = useParams();

  const getData = async () => {
    const res = await getAllFavQuiz(id);
    setData(res?.data?.favQuiz);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  // console.log(data, "dfghjk");
  return (
    <div className="mt-5 d-flex justify-content-center align-items-center  w-100">
      <div className="mybank-container border">
        <div className=" mybank-card ">
          <div className="mt-2 d-lg-flex d-md-flex d-sm-flex justify-content-between align-items-center ">
            <h1 className="followus text-capitalize">Favourite Banks</h1>
            <Link to="/create">
              <button
                className="create-new-button mt-lg-0 mt-md-0 mt-sm-0 mt-2"
                style={{ boxShadow: "0 8px 18px 0px rgba(0, 0, 0, 0.2)" }}
              >
                <span>Create New</span>
              </button>
            </Link>
          </div>
          <div className="mt-4 d-lg-flex d-md-flex d-sm-flex justify-content-between align-items-center">
            <Link to={`/bank/${user?.userId}`}>
              <button className="fav-bank">
                <span>My Banks</span>
              </button>
            </Link>
            <select className=" bank-search border-0 p-2 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
              <option className="profile-text ">Search banks</option>
              <option className="profile-text">HBL</option>
            </select>
          </div>
          <div className="mt-5">
            <FavBankTable data={data} />
          </div>
          <div className="d-lg-flex justify-content-between align-items-center">
            <p>Showing 1 to 2 of 2 entries</p>
            <div className="w-50  ml-lg-5">
              <Paginate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
