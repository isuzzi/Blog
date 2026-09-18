import CareerItem from "./CareerItem";

const careers = [
  {
    period: "2026 -",
    title: "프론트엔드 개발자 준비 중",
    description:
      "디자인과 개발을 함께 이해하는 개발자로 커리어를 전환하고 있습니다.",
    active: true,
  },
  {
    period: "2026.01 - 06",
    title: "프론트엔드 부트캠프",
    description: "JavaScript, React 중심의 실무 프로젝트 기반 학습 과정 수료",
  },
  {
    period: "2022 - 2026",
    title: "UI/UX 디자이너",
    description: "웹·앱 서비스 UX 리서치, 와이어프레임, 디자인 시스템 구축",
  },
];

export default function CareerTimeline() {
  return (
    <div className="mt-12 border-t border-black">
      {careers.map((career) => (
        <CareerItem key={career.period} {...career} />
      ))}
    </div>
  );
}
