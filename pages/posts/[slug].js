import PostContent from "@/components/posts/post-detail/post-content";
import { useRouter } from "next/router";
import React from "react";

const PostDetailPage = (context) => {
  const router = useRouter();

  const path = router.query.slug;

  return (
    <div>
      <PostContent />
    </div>
  );
};

export default PostDetailPage;
