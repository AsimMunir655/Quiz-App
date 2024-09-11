import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import trash from "../assests/ic_Trash.svg";
import vector from "../assests/vector3.svg";
import play from "../assests/playicon.svg";
import edit from "../assests/ic_Write_message.svg";
import dots from "../assests/threedots.svg";
import { Link } from "react-router-dom";
import ShareModal from "../components/ShareModal";
import { deleteFavQuiz } from "../Api";

export default function FavBankTable({ data }) {
  const [share, setShare] = useState(false);

  const handleFavDelete = async (id, quizId) => {
    try {
      await deleteFavQuiz(id, quizId);
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <>
      <div className="wrapper ">
        <Table striped bordered hover>
          <thead>
            <tr className="p-lg-0">
              <th scope="col" className="nav-subheading text-capitalize">
                Title
              </th>
              <th scope="col" className="nav-subheading text-capitalize">
                No, of Questions
              </th>
              <th scope="col" className="nav-subheading text-capitalize">
                Create On
              </th>
              <th scope="col" className="nav-subheading text-capitalize">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="border-0">
            {data?.map((obj, i) => (
              <tr key={obj?._id}>
                <td data-label="Title" className="choose-file-desc ">
                  {obj?.title}
                </td>
                <td
                  data-label="No, of Questions"
                  className="choose-file-desc mt-lg-0 mt-md-0 mt-sm-0"
                >
                  {obj?.totalQuestions}
                </td>
                <td data-label="Create On" className="choose-file-desc">
                  {obj?.timestamp.toString().split("", 10)}
                </td>
                <td
                  data-label="Action "
                  className="choose-file-desc d-flex justify-content-center align-items-center "
                >
                  <div className="w-50 d-flex justify-content-between align-items-center  ml-5">
                    <Link to={`/play/${obj?.quiz_id}`}>
                      <img alt="play" src={play} className="bank-icons" />
                    </Link>
                    <Link to={`/create/${obj?.quiz_id}/edit`}>
                      <img alt="edit" src={edit} className="bank-icons" />
                    </Link>
                    <img
                      alt="share"
                      src={vector}
                      onClick={() => setShare(true)}
                      className="bank-icons"
                    />
                    <img
                      alt="delete"
                      src={trash}
                      className="bank-icons"
                      onClick={() => handleFavDelete(obj?.user_id, obj?._id)}
                    />

                    <img alt="more" src={dots} className="bank-icons" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ShareModal share={share} setShare={setShare} />
    </>
  );
}
