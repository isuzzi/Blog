import Footer from "./components/footer/Footer";
import ProfileSection from "./components/profile/ProfileSection";
import ProjectSection from "./components/project/ProjectSection";
import Sidebar from "./components/Sidebar";

export default function HomePage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="flex min-h-0 flex-col">
          <ProfileSection />
          <ProjectSection />
        </div>

        <Sidebar />
      </div>

      <Footer />
    </main>
  );
}
