import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { name, email, phone, username, id } = friend;
  //   console.log(friend);
  return (
    <div className="friend">
      <h3>Name:{name} </h3>
      <p>
        <small>
          Username: <Link to={`/friend/${id}`}>{username}</Link>
        </small>
      </p>
      <p>Email:{email} </p>
      <p>Phone:{phone} </p>
    </div>
  );
};

export default Friend;
