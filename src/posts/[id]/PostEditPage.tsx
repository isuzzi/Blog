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

    if (!title.trim() || !content.trim()) {
      return;
    }

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

      await response.json();

      navigate(`/posts/${id}`);
    } catch (error) {
      console.error("게시글을 수정하지 못했습니다.", error);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-[calc(100vh-178px)] items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-178px)] flex-col">
      <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
        <div className="flex-1 px-12 pt-12 pb-12">
          <h1 className="text-4xl font-black tracking-[-0.05em]">
            게시글 수정
          </h1>

          <div className="mt-12" />

          <div className="mt-8 flex flex-col gap-7">
            <input
              type="text"
              placeholder="게시글 제목을 입력해주세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="h-[68px] w-full rounded-lg border border-black bg-transparent px-5 text-lg outline-none placeholder:text-gray-400"
            />

            <textarea
              placeholder="게시글 내용을 입력해주세요"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="min-h-[390px] w-full resize-none rounded-lg border border-black bg-transparent px-5 py-5 text-lg leading-6 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <button
            type="submit"
            className="bg-primary py-4 text-3xl font-medium text-white transition-colors hover:text-black"
          >
            수정
          </button>

          <button
            type="button"
            onClick={() => navigate(`/posts/${id}`)}
            className="hover:text-primary bg-black py-4 text-3xl font-medium text-white transition-colors"
          >
            취소
          </button>
        </div>
      </form>
    </main>
  );
}
