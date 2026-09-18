export default function ProjectIntro() {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />

        <p className="font-mono text-[13px] text-[#55524a]">status: building</p>
      </div>

      <h1 className="mb-4 text-[clamp(40px,8vw,84px)] leading-[0.98] font-black tracking-[-1px]">
        PROJECT
        <br />
        IN PROGRESS
      </h1>

      <p className="text-md max-w-130 leading-[1.5] text-black">
        새로운 프로젝트를 만들고 있습니다.
        <br />
        아직 보여드릴 만큼 완성된 작업은 없지만,
        <br />
        하나씩 제대로 만드는 중입니다.
      </p>
    </section>
  );
}
