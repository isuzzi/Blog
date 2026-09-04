import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { mockPosts } from "../../data/mockData";

const posts = import.meta.glob("../../blog/*.md", {
  query: "?raw",

  import: "default",

  eager: true,
});

export default function PostDetailPage() {
  const { id } = useParams();

  // mockPosts에서 현재 id에 해당하는 게시글 찾기
  const post = mockPosts.find((post) => post.id === Number(id));

  // 게시글이 없으면 에러 화면
  if (!post) {
    return <div>Post not found</div>;
  }

  // Markdown 파일 찾기
  const markdownPost = Object.entries(posts).find(([path]) =>
    path.endsWith(`${post.id}.md`),
  );

  // Markdown 파일이 없으면 에러 화면
  if (!markdownPost) {
    return <div>Markdown not found</div>;
  }
  const markdown = markdownPost[1];

  return (
    <div>
      <div className="border border-t border-gray-200 p-6">
        <article className="prose">
          <p>{post.date}</p>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
