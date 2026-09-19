type Contact = {
  label: string;
  value: string;
  href: string;
};

const contacts: Contact[] = [
  {
    label: "이력서 보기",
    value: "PDF",
    href: "https://drive.google.com/file/d/1oeCABzlZ5v7Ey2wnaWYAKIa8NTzFyOif/view?usp=sharing",
  },
  {
    label: "이메일 보내기",
    value: "Mail",
    href: "mailto:isuzzi11@gmail.com",
  },
  {
    label: "Github",
    value: "Profile",
    href: "https://github.com/isuzzi",
  },
];

export default function ContactSection() {
  return (
    <section className="border-t-0 border-b border-black p-10">
      <h2 className="mb-4 text-2xl font-bold">CONTACT</h2>

      <div className="flex flex-col gap-2">
        {contacts.map((contact, index) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between border border-black px-7 py-4 text-lg hover:bg-black hover:text-white ${
              index === 0 ? "hover:bg-primary bg-black text-white" : ""
            }`}
          >
            <span>{contact.label}</span>
            <span>{contact.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
