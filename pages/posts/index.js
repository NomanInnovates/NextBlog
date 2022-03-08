import Postgrid from "../../components/posts/post-grid";
import { getAllPosts } from "../../lib/posts-util";
import classes from "../../styles/all-posts.module.css";

export default function AllPostPage({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <Postgrid posts={posts} />
    </section>
  );
}
export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
