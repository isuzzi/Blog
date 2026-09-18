import { useEffect, useState } from "react";

const terminalLines = [
  {
    text: "$ git checkout -b project-showcase",
    type: "prompt",
  },
  {
    text: "Switched to a new branch project-showcase",
    type: "muted",
  },
  {
    text: "$ npm install ideas",
    type: "prompt",
  },
  {
    text: "✓ added 128 packages, 3 late nights",
    type: "ok",
  },
  {
    text: "$ npm run build",
    type: "prompt",
  },
  {
    text: "compiling components...",
    type: "muted",
  },
];

export default function ProjectTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const playTerminal = () => {
    setVisibleLines(0);
    setProgress(0);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 700);

      return () => clearTimeout(timer);
    }

    let currentProgress = 0;

    const progressTimer = setInterval(() => {
      currentProgress += 1;

      setProgress(currentProgress);

      if (currentProgress >= 67) {
        clearInterval(progressTimer);
        setIsRunning(false);
      }
    }, 50);

    return () => clearInterval(progressTimer);
  }, [visibleLines, isRunning]);

  return (
    <section className="min-h-100 w-full overflow-hidden border-2 border-black bg-black shadow-[6px_6px_0_#7C4DFF] sm:shadow-[8px_8px_0_#7C4DFF]">
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 border-b border-[#2a2a2a] px-3 py-3 sm:gap-2 sm:px-5 sm:py-3.5">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#3a3a3a] sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#3a3a3a] sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#3a3a3a] sm:h-3 sm:w-3" />

        <span className="ml-1.5 truncate font-mono text-xs text-[#7a7a7a] sm:ml-2 sm:text-sm">
          projects.log
        </span>
      </div>

      {/* Terminal Body */}
      <div className="min-h-70 px-4 py-6 font-mono text-xs leading-[1.85] text-[#d8d6cf] sm:px-6 sm:py-8 sm:text-sm">
        {terminalLines.slice(0, visibleLines).map((line, index) => {
          const isPrompt = line.type === "prompt";

          return (
            <div key={index} className="wrap-break-words whitespace-pre-wrap">
              {isPrompt ? (
                <>
                  <span className="text-[#eaff00]">$</span>{" "}
                  <span className="text-[#d8d6cf]">{line.text.slice(2)}</span>
                </>
              ) : (
                <span
                  className={
                    line.type === "ok"
                      ? "text-[#8be08b]"
                      : line.type === "muted"
                        ? "text-[#7a7a7a]"
                        : "text-[#d8d6cf]"
                  }
                >
                  {line.text}
                </span>
              )}
            </div>
          );
        })}

        {/* Building */}
        {visibleLines === terminalLines.length && (
          <div className="mt-1">
            <span className="text-[#7a7a7a]">still building — </span>

            <span
              className="inline-block h-3.5 w-1.5 bg-[#eaff00] align-[-2px] sm:h-4 sm:w-2"
              style={{
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="px-4 pb-5 sm:px-6 sm:pb-7">
        <div className="flex items-center gap-3">
          {/* Progress Bar */}
          <div className="relative h-2.5 min-w-0 flex-1 overflow-hidden bg-[#262626] sm:h-3">
            <div
              className="bg-primary absolute inset-y-0 left-0 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage */}
          <span className="w-9 shrink-0 text-right font-mono text-xs text-[#eaff00] sm:w-10 sm:text-sm">
            {progress}%
          </span>
        </div>

        {/* Retry */}
        <div className="mt-4 flex">
          <button
            type="button"
            onClick={playTerminal}
            disabled={isRunning}
            className="relative top-0.5 font-mono text-xs text-[#eaff00] transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-0"
          >
            [ RETRY ]
          </button>
        </div>
      </div>
    </section>
  );
}
