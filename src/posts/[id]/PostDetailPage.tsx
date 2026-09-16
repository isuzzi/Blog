import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("게시글 삭제에 실패했습니다.");
      }

      alert("게시글이 삭제되었습니다.");

      navigate("/posts");
    } catch (error) {
      console.error(error);
      alert("게시글 삭제에 실패했습니다.");
    }
  };

  return (
    <article className="prose">
      <h1>{post.title}</h1>
      <p>{new Date(post.created_at).toLocaleDateString()}</p>
      <div>
        <button onClick={() => navigate(`/posts/${post.id}/edit`)}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
