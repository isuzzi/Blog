import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitch(true);

      setTimeout(() => {
        setGlitch(false);
      }, 450);
    };

    // 처음 들어왔을 때 1초 후 한 번 실행
    const initialTimer = setTimeout(triggerGlitch, 1000);

    // 이후 5초마다 실행
    const interval = setInterval(triggerGlitch, 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex min-h-full flex-1 items-center justify-center border-x border-black px-6">
      <section className="w-full max-w-4xl text-center">
        {/* 403 Glitch */}
        <div className={`glitch ${glitch ? "glitch-active" : ""}`}>
          <span className="glitch-text text-primary font-display">403</span>

          {/* RGB 분리 레이어 */}
          <span
            className="glitch-layer glitch-red text-primary font-display"
            aria-hidden="true"
          >
            4?3
          </span>

          <span
            className="glitch-layer glitch-blue text-primary font-display"
            aria-hidden="true"
          >
            ?0?
          </span>

          {/* 스캔라인 */}
          <span className="glitch-scanline" aria-hidden="true" />
        </div>

        <h1 className="mt-12 text-[clamp(32px,5vw,60px)] font-black">
          ACCESS DENIED.
        </h1>

        <p className="mt-3 mb-8 text-lg">관리자 권한이 필요한 페이지입니다.</p>

        <button
          type="button"
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/posts");
            }
          }}
          className="hover:bg-primary border bg-black px-6 py-3 text-white"
        >
          이전 페이지로
        </button>
      </section>
    </main>
  );
}
