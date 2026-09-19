import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants/api";

export default function PostWritePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");

      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error("게시글 작성에 실패했습니다.");
      }

      await response.json();

      navigate("/posts");
    } catch (error) {
      console.error("게시글을 작성하지 못했습니다.", error);
    }
  };

  const handleCancel = () => {
    navigate("/posts");
  };

  return (
    <main className="flex min-h-[calc(100vh-178px)] flex-col">
      <div className="flex-1 px-12 pt-12 pb-12">
        {/* 제목 */}
        <h1 className="text-4xl font-black tracking-[-0.05em]">게시글 쓰기</h1>

        {/* 구분선 */}
        <div className="mt-12" />

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-7">
          {/* 게시글 제목 */}
          <input
            type="text"
            placeholder="게시글 제목을 입력해주세요"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="h-[68px] w-full rounded-lg border border-black bg-transparent px-5 text-lg outline-none placeholder:text-gray-400 focus:ring-0"
          />

          {/* 게시글 내용 */}
          <textarea
            placeholder="게시글 내용을 입력해주세요"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="min-h-[390px] w-full resize-none rounded-lg border border-black bg-transparent px-5 py-5 text-lg leading-6 outline-none placeholder:text-gray-400 focus:ring-0"
          />
        </form>
      </div>

      {/* 하단 버튼 */}
      <div className="grid grid-cols-2">
        <button
          type="submit"
          onClick={() => {
            document
              .querySelector<HTMLFormElement>("main form")
              ?.requestSubmit();
          }}
          className="bg-primary hover:bg-primary py-4 text-xl font-medium text-white transition-colors"
        >
          글쓰기
        </button>

        <button
          type="button"
          onClick={handleCancel}
          className="bg-black py-4 text-xl font-medium text-white transition-colors hover:bg-black"
        >
          취소
        </button>
      </div>
    </main>
  );
}
