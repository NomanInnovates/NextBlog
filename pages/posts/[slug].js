import PostContent from "../../components/posts/postDetails/postContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailsPage({ post }) {
  return (
    <div>
      <PostContent post={post} />
    </div>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  let post = getPostData(slug);

  return {
    props: {
      post,
      revalidate: 1000,
    },
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  console.log("postFilenames", postFilenames);
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  console.log("slugs", slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
