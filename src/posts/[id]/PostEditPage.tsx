import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

export default function PostEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("게시글을 불러오지 못했습니다.");
        }

        return response.json();
      })
      .then((data: Post) => {
        setTitle(data.title);
        setContent(data.content);
      })
      .catch((error) => {
        console.error("게시글을 불러오지 못했습니다.", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error("게시글 수정에 실패했습니다.");
      }

      const data = await response.json();

      console.log("수정된 게시글:", data);

      navigate(`/posts/${id}`);
    } catch (error) {
      console.error("게시글을 수정하지 못했습니다.", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">글 수정</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="rounded border p-2"
        />

        <textarea
          placeholder="내용"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="min-h-60 rounded border p-2"
        />

        <button type="submit" className="rounded bg-black px-4 py-2 text-white">
          수정
        </button>
      </form>
    </div>
  );
}
