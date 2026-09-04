import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="flex gap-4">
        <Link to="/" className="hover:text-purple-500">
          Home
        </Link>
        <Link to="/posts" className="hover:text-purple-500">
          Posts
        </Link>
        <Link to="/about" className="hover:text-purple-500">
          About
        </Link>
      </nav>
    </header>
  );
}
