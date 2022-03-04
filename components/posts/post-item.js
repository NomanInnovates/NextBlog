import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "../../styles/post-item.module.css";
function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              height={200}
              width={300}
              layout="responsive"
            />
          </div>
          <div>
            <h3 className={classes.content}>{title}</h3>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
