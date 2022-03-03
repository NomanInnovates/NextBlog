import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";
import styles from "../styles/Home.module.css";

let dummy = [
  {
    title: "Getting Started with nextjs",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs",
    excerpt:
      "nextjs is the fullstack react framework for production - it makes fullstack React apps and sites a breeze and ships with built in SSR.",
    date: "2020-02-19",
  },
  {
    title: "Getting Started with nextjs",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs1",
    excerpt:
      "nextjs is the fullstack react framework for production - it makes fullstack React apps and sites a breeze and ships with built in SSR.",
    date: "2020-02-19",
  },
  {
    title: "Getting Started with nextjs",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs2",
    excerpt:
      "nextjs is the fullstack react framework for production - it makes fullstack React apps and sites a breeze and ships with built in SSR.",
    date: "2020-02-19",
  },
];
export default function Home() {
  return (
    <div>
      Home page
      <Hero />
      <FeaturedPosts posts={dummy} />
    </div>
  );
}
