import FeaturedPosts from "@/components/home-page/feature-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturePosts } from "@/lib/posts-utils";

export default function Home(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturePosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};
