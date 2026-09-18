import Footer from "../components/footer/Footer";

export default function AboutPage() {
  const likes = [
    {
      number: "01",
      symbol: "✦",
      title: "PURPLE",
      description:
        "보라색을 좋아합니다. 자꾸 눈이 가는 색이고, 보라색과 반대되는 색과의 조합도 좋아합니다.",
    },
    {
      number: "02",
      symbol: "✣",
      title: "MAKE",
      description:
        "손으로 무언가를 만드는 걸 좋아합니다. 비즈를 꿰거나 다이어리를 꾸미면서 시간을 보낼 때가 있습니다.",
    },
    {
      number: "03",
      symbol: "◉",
      title: "ODD",
      description:
        "조금 이상한 것에 마음이 갑니다. 익숙한 형태를 살짝 비틀거나 쉽게 본 적 없는 디자인을 좋아합니다.",
    },
    {
      number: "04",
      symbol: "▧",
      title: "STICKER",
      description:
        "스티커를 좋아합니다. 마음에 드는 것들을 모으고, 여기저기 붙여서 나만의 것으로 만듭니다. 핸드폰 케이스도 그냥 쓰기보다는 스티커를 붙여 제 것으로 만듭니다.",
    },
    {
      number: "05",
      symbol: "⌁",
      title: "WANDER",
      description:
        "계획에 없던 곳으로 가는 걸 좋아합니다. 여행 중 우연히 발견한 장소에 들어가 보는 것도 재미있는 경험이라고 생각합니다.",
    },
    {
      number: "06",
      symbol: "◌",
      title: "FLOAT",
      description:
        "동물이 된다면 해파리가 되고 싶습니다. 아무 생각 없이 바다를 둥둥 떠다니고 싶습니다.",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "사용자 입장에서 생각하기",
      description:
        "화면을 만드는 사람보다 사용하는 사람의 입장에서 먼저 생각합니다.",
    },
    {
      number: "02",
      title: "디자인과 개발을 연결하기",
      description:
        "디자인 의도를 이해하고 실제 인터페이스로 구현하는 과정을 중요하게 생각합니다.",
    },
    {
      number: "03",
      title: "직접 만들어보며 배우기",
      description:
        "모르는 기술은 문서만 읽기보다 작은 기능부터 직접 구현해봅니다.",
    },
    {
      number: "04",
      title: "작은 디테일까지 확인하기",
      description:
        "간격, 상태 변화, 인터랙션처럼 작아 보이는 부분도 결과물의 완성도를 만든다고 생각합니다.",
    },
  ];

  return (
    <main className="min-h-full border-x border-black bg-[#f4f4f2] text-black">
      {/* Intro */}
      <section className="grid border-b border-black lg:grid-cols-[2fr_1fr]">
        <div className="border-b border-black p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
          <p className="mb-4 text-xs font-extrabold tracking-[0.12em] sm:text-sm">
            ABOUT / 2026
          </p>

          <h1 className="text-[clamp(52px,8vw,112px)] leading-[0.86] font-black tracking-[-0.075em]">
            WHO
            <br />
            IS <span className="text-[#7046ff]">SUJIN?</span>
          </h1>

          <p className="mt-8 max-w-[670px] text-[17px] leading-tight tracking-[-0.035em] sm:mt-9 sm:text-xl lg:text-[23px]">
            디자인을 이해하고, 개발로 구현하는 사람.
            <br />
            UI/UX 디자이너로 일한 경험을 바탕으로
            <br className="hidden sm:block" />
            지금은 프론트엔드 개발을 공부하고 있습니다.
          </p>
        </div>

        <aside className="hidden p-10 lg:block">
          <strong className="mb-3 block text-lg">01 — A LITTLE NOTE</strong>

          <p className="text-[15px] leading-relaxed">
            화면을 예쁘게 만드는 것에서 끝나지 않고,
            <br />왜 이렇게 만들어야 하는지 고민하는 과정을 좋아합니다.
          </p>
        </aside>
      </section>

      {/* Things I Like */}
      <section className="border-b border-black">
        <div className="grid border-b border-black lg:grid-cols-[1fr_2fr]">
          <div className="px-6 py-4 text-xs font-extrabold tracking-[0.1em] sm:px-10 sm:py-[18px] sm:text-sm">
            01 / THINGS I LIKE
          </div>

          <div className="border-t border-black px-6 py-3 text-[32px] font-black tracking-[-0.06em] sm:px-10 sm:text-[40px] lg:border-t-0">
            MY LITTLE UNIVERSE
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {likes.map((like, index) => (
            <article
              key={like.number}
              className={`group hover:bg-primary relative min-h-[210px] border-b border-black p-7 break-keep transition-colors duration-200 hover:text-white ${
                index % 2 === 0 ? "sm:border-r" : "sm:border-r-0"
              } lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0`}
            >
              <span className="text-[13px] font-extrabold opacity-65">
                {like.number}
              </span>

              <span className="absolute top-5 right-6 text-[38px] font-black">
                {like.symbol}
              </span>

              <h3 className="mt-[42px] text-[32px] leading-none font-black tracking-[-0.065em] sm:text-[38px]">
                {like.title}
              </h3>

              <p className="mt-3 max-w-[280px] text-sm leading-relaxed">
                {like.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section className="">
        <div className="grid lg:grid-cols-[0.7fr_2fr]">
          <div className="p-6 text-xs font-extrabold tracking-[0.1em] sm:p-10 sm:text-sm">
            02 / HOW I WORK
          </div>

          <div className="border-t border-black lg:border-t-0 lg:border-l">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-[50px_1fr] border-b border-black px-6 py-6 last:border-b-0 sm:grid-cols-[70px_1fr] sm:px-10"
              >
                <div className="text-primary font-extrabold">
                  {principle.number}
                </div>

                <div>
                  <strong className="mb-1 block text-lg font-bold tracking-[-0.04em] sm:text-xl">
                    {principle.title}
                  </strong>

                  <span className="text-sm leading-relaxed">
                    {principle.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
