import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-utils";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export default AllPostsPage;

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
