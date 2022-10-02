import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = ({ post }) => {
  const { body, title, id } = post;
  const navigator = useNavigate();

  const handleNavigate = () => {
    navigator(`/post/${id}`);
  };

  return (
    <div className="post">
      <h3>
        {id}. {title}
      </h3>
      <p>{body}</p>

      <Link to={`/post/${id}`}> Visit: {id}</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleNavigate}>show details 2</button>
    </div>
  );
};

export default SinglePost;
