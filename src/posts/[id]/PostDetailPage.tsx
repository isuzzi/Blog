import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("게시글을 불러오지 못했습니다.");
        }

        return response.json();
      })

      .then((data) => {
        setPost(data);
      })

      .catch((error) => {
        setError(error.message);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <article className="prose">
      <h1>{post.title}</h1>
      <p>{new Date(post.created_at).toLocaleDateString()}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
