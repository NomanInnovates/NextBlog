import React from "react";
import PostHeader from "./postHeader";
import classes from "../../../styles/post-content.module.css";
import ReactMarkdown from "react-markdown";
let dummy = {
  title: "Getting Started with nextjs",
  image: "getting-started-nextjs.png",
  slug: "getting-started-with-nextjs",
  excerpt:
    "# nextjs is the fullstack react framework for production - it makes fullstack React apps and sites a breeze and ships with built in SSR.",
  date: "2020-02-19",
};
const postContent = () => {
  let imagePath = `/images/${dummy.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={dummy.title} image={imagePath} />
      <ReactMarkdown>{dummy.excerpt}</ReactMarkdown>
    </article>
  );
};

export default postContent;
