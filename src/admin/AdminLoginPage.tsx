import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "로그인에 실패했습니다.");
      }

      // 백엔드에서 발급한 JWT 저장
      localStorage.setItem("accessToken", data.token);

      navigate("/posts");
    } catch (error) {
      console.error("로그인하지 못했습니다.", error);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("로그인에 실패했습니다.");
      }
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <main className="flex min-h-[calc(100vh-178px)] flex-col">
      <div className="flex-1 px-12 pt-12 pb-12">
        {/* 제목 */}
        <h1 className="text-4xl font-black tracking-[-0.05em]">
          관리자 로그인
        </h1>

        {/* 구분선 */}
        <div className="mt-12" />

        <form
          id="admin-login-form"
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex w-full max-w-[600px] flex-col gap-7"
        >
          {/* 이메일 */}
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-[68px] w-full rounded-lg border border-black bg-transparent px-5 text-lg outline-none placeholder:text-gray-400 focus:ring-0"
          />

          {/* 비밀번호 */}
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="h-[68px] w-full rounded-lg border border-black bg-transparent px-5 text-lg outline-none placeholder:text-gray-400 focus:ring-0"
          />

          {/* 에러 메시지 */}
          {error && <p className="-mt-3 text-sm text-red-500">{error}</p>}
        </form>
      </div>

      {/* 하단 버튼 */}
      <div className="grid grid-cols-2">
        <button
          type="submit"
          form="admin-login-form"
          className="bg-primary hover:bg-primary py-4 text-xl font-medium text-white transition-colors"
        >
          로그인
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
