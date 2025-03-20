import AllPosts from "@/components/posts/all-posts";

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
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Post 3",
    image: "getting-started-nextjs.png",
    excerpt: "This is yet another sample post",
    date: "2022-01-03",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Post 4",
    image: "getting-started-nextjs.png",
    excerpt: "This is a sample post",
    date: "2022-01-04",
    slug: "getting-started-with-nextjs",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
