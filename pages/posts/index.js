import Postgrid from "../../components/posts/post-grid";
import classes from "../../styles/all-posts.module.css";
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
  {
    title: "Getting Started with nextjs",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs2",
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
export default function AllPostPage() {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <Postgrid posts={dummy} />
    </section>
  );
}
