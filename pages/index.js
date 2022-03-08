import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";
import { getFeaturedPosts } from "../lib/posts-util";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
}

export function getStaticProps() {
  const featured = getFeaturedPosts();
  console.log("featured", featured);
  return {
    props: {
      posts: featured,
    },
  };
}
