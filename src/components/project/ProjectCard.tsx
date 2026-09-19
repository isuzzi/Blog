type ProjectCardProps = {
  title: string;
  description: string;
  githubUrl: string;
  projectUrl: string;
};

export default function ProjectCard({
  title,
  description,
  githubUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <article className="flex min-h-[174px] items-center justify-between border-b-0 border-black px-10 py-8 sm:border-b md:border-b-0">
      <div>
        <p className="text-sm">{description}</p>

        <h3 className="mt-1 text-3xl font-medium">{title}</h3>
      </div>

      <div className="flex flex-col gap-2">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-[124px] items-center justify-between rounded-full border border-black px-4 py-2 text-sm transition-colors hover:bg-black hover:text-white"
        >
          <span>Github</span>
          <span className="text-lg leading-none">→</span>
        </a>

        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-[124px] items-center justify-between rounded-full border border-black px-4 py-2 text-sm transition-colors hover:bg-black hover:text-white"
        >
          <span>URL</span>
          <span className="text-lg leading-none">→</span>
        </a>
      </div>
    </article>
  );
}
