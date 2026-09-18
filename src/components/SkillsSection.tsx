import SkillBadge from "./SkillBadge";

const skills = [
  {
    name: "JavaScript",
    variant: "primary" as const,
  },
  {
    name: "React",
    variant: "primary" as const,
  },
  {
    name: "Git",
    variant: "default" as const,
  },
  {
    name: "React Query",
    variant: "default" as const,
  },
  {
    name: "TypeScript",
    variant: "default" as const,
  },
  {
    name: "HTML / CSS",
    variant: "default" as const,
  },
  {
    name: "Next.js",
    variant: "default" as const,
  },
  {
    name: "StoryBook",
    variant: "default" as const,
  },
  {
    name: "zod",
    variant: "default" as const,
  },
  {
    name: "Figma",
    variant: "default" as const,
  },
];

export default function SkillsSection() {
  return (
    <section className="p-10">
      <h2 className="mb-4 text-2xl font-bold">SKILLS</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            variant={skill.variant}
          />
        ))}
      </div>
    </section>
  );
}
