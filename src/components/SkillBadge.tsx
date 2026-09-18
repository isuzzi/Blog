type SkillBadgeProps = {
  name: string;
  variant?: "default" | "primary";
};

export default function SkillBadge({
  name,
  variant = "default",
}: SkillBadgeProps) {
  return (
    <span
      className={`rounded-full border border-black px-7 py-2 text-lg ${
        variant === "primary" ? "border-primary bg-primary text-white" : ""
      }`}
    >
      {name}
    </span>
  );
}
