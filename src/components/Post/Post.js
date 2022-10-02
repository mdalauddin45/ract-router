import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";
import "./Post.css";

const Post = () => {
  const posts = useLoaderData();
  //   console.log(posts);

  return (
    <div>
      <h1>A lot of fb post here</h1>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post}></SinglePost>
      ))}
    </div>
  );
};

export default Post;
