import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Taskify",
    description: "일정 및 할 일 관리",
    githubUrl: "https://github.com/part3-5team/Taskify",
    projectUrl: "https://taskify-drowning.vercel.app/",
  },
  {
    title: "Coworkers",
    description: "팀 협업 업무 관리",
    githubUrl: "https://github.com/Coworkers23/frontend",
    projectUrl: "https://coworkers23.xyz/",
  },
];

export default function ProjectSection() {
  return (
    <section className="grid min-h-0 grid-cols-1 border-t md:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={index === 0 ? "md:border-r md:border-b-0" : ""}
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </section>
  );
}
