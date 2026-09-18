const messages = ["함께 일해요!", "Let’s work Together", "함께 일해요!"];

export default function FooterMessage() {
  return (
    <div className="overflow-hidden border-t border-black bg-[#eaff00]">
      <div className="marquee text-2xl">
        <div className="marquee-content">
          {messages.map((message, index) => (
            <span key={index}>{message}</span>
          ))}

          {messages.map((message, index) => (
            <span key={`clone-${index}`}>{message}</span>
          ))}
        </div>

        <div className="marquee-content" aria-hidden="true">
          {messages.map((message, index) => (
            <span key={index}>{message}</span>
          ))}

          {messages.map((message, index) => (
            <span key={`clone-${index}`}>{message}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
