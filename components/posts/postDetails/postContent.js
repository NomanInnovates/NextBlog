import React from "react";
import PostHeader from "./postHeader";
let dummy = {
  title: "Getting Started with nextjs",
  image: "getting-started-nextjs.png",
  slug: "getting-started-with-nextjs",
  excerpt:
    "nextjs is the fullstack react framework for production - it makes fullstack React apps and sites a breeze and ships with built in SSR.",
  date: "2020-02-19",
};
const postContent = () => {
  let imagePath = `/images/posts/${dummy.slug}/${dummy.image}/`;
  return (
    <div>
      <PostHeader title={dummy.title} image={image} />
      postContent
    </div>
  );
};

export default postContent;
