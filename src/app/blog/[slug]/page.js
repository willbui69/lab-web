export default function BlogPost({ params }) {
    return (
      <div>
        <h1>{params.slug.replace("-", " ")}</h1>
        <p>Nội dung bài viết...</p>
      </div>
    );
  }