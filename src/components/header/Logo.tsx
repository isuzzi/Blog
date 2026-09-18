import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="font-display hover:bg-primary flex items-center bg-black px-12 py-4 text-4xl leading-none whitespace-nowrap text-white hover:text-white"
    >
      IN MY GALAXY
    </Link>
  );
}
