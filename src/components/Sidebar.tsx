import ContactSection from "./ContactSection";
import SkillsSection from "./SkillsSection";

export default function Sidebar() {
  return (
    <aside className="border-bl min-h-0 border-l">
      <ContactSection />
      <SkillsSection />
    </aside>
  );
}
