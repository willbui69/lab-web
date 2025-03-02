const posts = {
  "post-1": {
    title: "Bài viết 1",
    content: "Nội dung của bài viết 1. Đây là nội dung chi tiết của bài viết 1."
  },
  "post-2": {
    title: "Bài viết 2",
    content: "Nội dung của bài viết 2. Đây là nội dung chi tiết của bài viết 2."
  }
};

export default function BlogPost({ params }) {
  const post = posts[params.slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}