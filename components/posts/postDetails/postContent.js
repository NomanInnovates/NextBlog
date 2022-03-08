import React from "react";
import Image from "next/image";
import PostHeader from "./postHeader";
import ReactMarkdown from "react-markdown";
import classes from "../../../styles/post-content.module.css";

const postContent = ({ post }) => {
  console.log("posts", post);
  let imagePath = `/images/${post.image}`;
  const customRender = {
    image(image) {
      return <Image src={image.url} alt={image.alt} width={800} height={400} />;
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />

      <ReactMarkdown>{post.excerpt}</ReactMarkdown>
      <ReactMarkdown renderers={customRender}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default postContent;
