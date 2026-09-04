import { Link } from "react-router-dom";
import { mockPosts } from "../data/mockData";

export default function PostListPage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Posts List</h1>
      <div className="flex flex-col gap-2 p-4">
        {mockPosts.map((item) => (
          <Link
            key={item.id}
            to={`/posts/${item.id}`}
            className="hover:text-purple-500"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
