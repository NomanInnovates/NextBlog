import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";
import { getFeaturedPosts } from "../lib/posts-util";


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

  return {
    props: {
      posts: featured,
    },
  };
}
