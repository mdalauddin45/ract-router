import React from "react";
import { useLoaderData } from "react-router-dom";

const postDetails = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <div>
      <h1>this post id:{post.id}</h1>
    </div>
  );
};

export default postDetails;
