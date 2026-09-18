import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <nav className="grid grid-cols-1 border-b lg:grid-cols-[auto_repeat(3,minmax(0,1fr))]">
        <div className="flex justify-center">
          <Logo />
        </div>

        <Navigation />
      </nav>
    </header>
  );
}
