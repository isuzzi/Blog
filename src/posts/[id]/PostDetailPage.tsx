import { useParams } from "react-router-dom";
import { mockPosts } from "../../data/mockData";

export default function PostDetailPage() {
  const { id } = useParams();
  const post = mockPosts.find((post) => post.id === Number(id));
  return (
    <div>
      <h1 className="text-xl font-bold">Post {post.id}</h1>
      <div className="border border-t border-gray-200 p-6">
        {post && (
          <article>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.content}</p>
          </article>
        )}
      </div>
    </div>
  );
}
