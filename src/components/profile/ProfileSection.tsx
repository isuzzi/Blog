import CareerTimeline from "./CareerTimeline";
import ProfileIntro from "./ProfileIntro";
import ProfileName from "./ProfileName";

export default function ProfileSection() {
  return (
    <section className="flex-1">
      <div className="px-12 pt-10">
        <ProfileName />
        <ProfileIntro />
        <CareerTimeline />
      </div>
    </section>
  );
}
