import FeaturedPosts from "@/components/home-page/feature-posts";
import Hero from "@/components/home-page/hero";
import Head from "next/head";

const DUMMY_POSTS = [
  {
    title: "Post 1",
    image: "getting-started-nextjs.png",
    excerpt: "This is a sample post",
    date: "2022-01-01",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Post 2",
    image: "getting-started-nextjs.png",
    excerpt: "This is another sample post",
    date: "2022-01-02",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Post 3",
    image: "getting-started-nextjs.png",
    excerpt: "This is yet another sample post",
    date: "2022-01-03",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Post 4",
    image: "getting-started-nextjs.png",
    excerpt: "This is a sample post",
    date: "2022-01-04",
    slug: "getting-started-with-nextjs4",
  },
];

export default function Home(props) {
  return (
    <>
      <Head>
        <title>KT' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <div>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS} />
      </div>
    </>
  );
}
