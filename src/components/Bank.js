import React, { useEffect, useState } from "react";
import BankTable from "./BankTable";
// import Paginate from "./Paginate";
import { Mybanks } from "../Api";
import { useParams, Link } from "react-router-dom";
import { useUserContext } from "../context";
import Pagination from "react-bootstrap/Pagination";

export default function Bank() {
  const { user } = useUserContext();
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await Mybanks(id);
        setData(res?.data);
      } catch (error) {
        console.log(error?.message);
      }
    };
    getData();
    // eslint-disable-next-line
  }, [keyword, pageNumber]);
  return (
    <div className="mt-5 d-flex justify-content-center align-items-center  w-100">
      <div className="mybank-container ">
        <div className=" mybank-card ">
          <div className="mt-2 d-lg-flex d-md-flex d-sm-flex justify-content-between align-items-center ">
            <h1 className="followus text-capitalize">My Banks</h1>
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
            <Link to={`/favBank/${user?.userId}`}>
              <button className="fav-bank">
                <span>Favourite Banks</span>
              </button>
            </Link>
            <input
              className="bank-search pl-3"
            />
            {/* <select className=" bank-search border-0 p-2 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
              <option className="profile-text ">Search banks</option>
              <option className="profile-text">HBL</option>
            </select> */}
          </div>
          <div className="mt-5">
            <BankTable data={data} />
          </div>
          <div className="d-lg-flex justify-content-between align-items-center">
            <p>Showing 1 of 4 pages</p>
            <div className="w-50 ml-lg-5 pl-lg-5">
              <Pagination className="ml-lg-5 pl-lg-5">
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
