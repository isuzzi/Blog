import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../constants/api";
import LoadingSpinner from "../../components/LoadingSpinner";

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export default function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isAdmin = !!localStorage.getItem("accessToken");

  useEffect(() => {
    fetch(`${API_URL}/posts/${id}`)
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
    return <LoadingSpinner />;
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
      const token = localStorage.getItem("accessToken");

      const response = await fetch(`${API_URL}/posts/${post.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  const handleEdit = () => {
    if (!isAdmin) {
      alert("권한이 없습니다.");
      return;
    }

    navigate(`/posts/${post.id}/edit`);
  };

  const formattedDate = new Date(post.createdAt)
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", ". ");

  return (
    <main className="flex h-full flex-1 flex-col border-x border-black">
      <article className="post-scroll min-h-0 flex-1 overflow-y-auto px-9 py-8 text-[15px] leading-[1.25] tracking-[-0.02em]">
        <header>
          <h1 className="font-display text-4xl font-black tracking-tight">
            POST
          </h1>

          <div className="mt-9 border-y border-black py-7">
            <div className="flex items-center gap-8">
              <time className="text-lg">{formattedDate}</time>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
            </div>
          </div>
        </header>

        <article className="prose prose-neutral prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-neutral-900 prose-h1:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-8 prose-p:text-neutral-700 prose-li:my-1 prose-li:text-neutral-700 prose-strong:text-neutral-900 prose-a:text-primary prose-a:underline hover:prose-a:underline prose-img:rounded-xl prose-hr:my-10 prose-hr:border-neutral-200 prose-blockquote:border-l-4 prose-blockquote:border-neutral-300 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-neutral-600 prose-code:rounded-sm prose-code:bg-neutral-200 prose-code:p-1 prose-code:text-[0.875em] prose-code:font-medium prose-code:text-rose-600 prose-code:before:content-none prose-code:after:content-none prose-th:font-medium prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 mt-2 max-w-none border-neutral-200 pt-10 break-keep">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                return match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    style={materialDark}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      padding: "1.25rem",
                      borderRadius: "0.75rem",
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        <div className="mt-14 border-t border-black" />
      </article>

      <div className="shrink-0">
        {/* 관리자 전용 버튼 */}
        {isAdmin && (
          <div className="grid grid-cols-2 border-t border-black">
            <button
              type="button"
              onClick={handleEdit}
              className="border-r border-black py-4 text-xl font-medium hover:bg-black hover:text-white"
            >
              수정
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="py-4 text-xl font-medium hover:bg-black hover:text-white"
            >
              삭제
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => navigate("/posts")}
          className="w-full border-t border-black bg-black py-4 text-xl text-white hover:bg-[#eaff00] hover:text-black"
        >
          목록
        </button>
      </div>
    </main>
  );
}
