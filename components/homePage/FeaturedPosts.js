import Postgrid from "../posts/post-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <Postgrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
