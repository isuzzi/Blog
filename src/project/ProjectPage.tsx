import ProjectIntro from "../components/project/ProjectIntro";
import ProjectStatus from "../components/project/ProjectStatus";
import ProjectTerminal from "../components/project/ProjectTerminal";

export default function ProjectPage() {
  return (
    <>
      <main className="mx-auto w-full overflow-y-auto p-8 sm:p-10 md:p-10">
        <ProjectIntro />
        <ProjectTerminal />
        <ProjectStatus />
      </main>
    </>
  );
}
