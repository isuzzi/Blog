export default function ProjectStatus() {
  return (
    <div className="mt-7 flex flex-wrap items-baseline justify-between gap-2.5 font-mono text-[12.5px] text-[#55524a]">
      <span>
        Last commit: today
        <span className="mx-2">·</span>
        Branch: main
      </span>

      <span>
        가끔 다시 들러주세요.
        <span className="ml-1 text-black">곧 채워질 예정입니다.</span>
      </span>
    </div>
  );
}
