import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostWritePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error("게시글 작성에 실패했습니다.");
      }

      const data = await response.json();

      console.log("작성된 게시글:", data);

      navigate("/posts");
    } catch (error) {
      console.error("게시글을 작성하지 못했습니다.", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">글 작성</h1>

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
          작성
        </button>
      </form>
    </div>
  );
}
