import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export default function PostListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        console.log("응답 상태:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("받은 데이터:", data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("게시글을 불러오지 못했습니다.", error);
      });
  }, []);

  return (
    <main className="flex h-full min-h-0 flex-col">
      {/* POST Header */}
      <section className="shrink-0 px-9 pt-8">
        <h1 className="font-display text-4xl font-black tracking-tight">
          POST
        </h1>
      </section>

      {/* Post List */}
      <section className="post-scroll mx-9 mt-8 min-h-0 flex-1 overflow-y-auto border-t border-black pb-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
            className="grid grid-cols-[120px_1fr] gap-4 border-b border-black px-4 py-5 transition-colors hover:bg-black hover:text-white"
          >
            {/* Date */}
            <time className="shrink-0 text-base whitespace-nowrap">
              {new Date(post.createdAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </time>

            {/* Content */}
            <div className="min-w-0">
              <h2 className="text-xl leading-tight font-medium md:text-2xl">
                {post.title}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm leading-tight md:text-base">
                {post.content}
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* Write Button */}
      <button
        type="button"
        onClick={() => navigate("/posts/write")}
        className="bg-primary shrink-0 py-4 text-xl text-white transition-colors hover:bg-black"
      >
        글쓰기
      </button>
    </main>
  );
}
