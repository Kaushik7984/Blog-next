import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  title: "Post 1",
  slug: "getting-started-with-nextjs",
  image: "getting-started-nextjs.png",
  date: "2022-01-01",
  content: "# This is a first post ",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
