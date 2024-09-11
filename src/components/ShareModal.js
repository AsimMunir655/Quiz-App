import React from "react";
import { Overlay } from "react-bootstrap";
import Share from "./Share";

export default function ShareModal({ share, setShare }) {
  return (
    <Overlay show={share} placement="right">
      {({ arrowProps }) => (
        <div
          style={{
            height: "100vh",
            width: "100%",
            position: "fixed",
            top: "0%",
            left: "0%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            padding: "2px 10px",
            color: "white",
            borderRadius: 3,
            zIndex: 5,
          }}
          className="d-flex justify-content-center align-items-center"
          onClick={() => setShare(false)}
        >
          <>
            <Share />
          </>
        </div>
      )}
    </Overlay>
  );
}
