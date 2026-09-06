import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function PostListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
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
    <div>
      <h1 className="text-xl font-bold">Posts List</h1>
      <div className="flex flex-col gap-2 p-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
            className="rounded border p-3"
          >
            <h2 className="font-bold">{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
