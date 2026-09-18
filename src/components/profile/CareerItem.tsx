type CareerItemProps = {
  period: string;
  title: string;
  description: string;
  active?: boolean;
};

export default function CareerItem({
  period,
  title,
  description,
  active = false,
}: CareerItemProps) {
  return (
    <article className="grid grid-cols-[160px_1fr] gap-0 border-b border-black py-4 last:border-b-0">
      <time className="text-xl font-medium">{period}</time>

      <div>
        <h3
          className={`text-2xl font-medium tracking-tight ${
            active ? "text-primary" : "text-black"
          }`}
        >
          {title}
        </h3>

        <p className="mt-1 text-base">{description}</p>
      </div>
    </article>
  );
}
