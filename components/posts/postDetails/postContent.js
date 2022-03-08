import React from "react";
import Image from "next/image";
import PostHeader from "./postHeader";
import ReactMarkdown from "react-markdown";
import classes from "../../../styles/post-content.module.css";
import { Prism as SyntaxHighLighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const postContent = ({ post }) => {
  console.log("posts", post);
  let imagePath = `/images/${post.image}`;
  const customRender = {
    // image(image) {
    //   return <Image src={image.url} alt={image.alt} width={800} height={400} />;
    // },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0] == "image") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image src={image.url} alt={image.alt} width={800} height={400} />
          </div>
        );
      }
      return <p> {paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighLighter style={atomDark} language={language} value={value} />
      );
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
