import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "95vh" }}
    >
      <h1 className="text-danger" style={{ fontSize: 100 }}>
        404
      </h1>
      <p>Page not found</p>
      <Link to="/" className="btn btn-danger">
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound;
