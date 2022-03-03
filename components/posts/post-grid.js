import PostItem from "./post-item";
import classes from "../../styles/posts-grid.module.css";

function Postgrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default Postgrid;
