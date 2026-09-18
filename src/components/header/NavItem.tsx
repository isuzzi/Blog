import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface NavItemProps {
  to: string;
  children: ReactNode;
}

export default function NavItem({ to, children }: NavItemProps) {
  return (
    <Link
      to={to}
      className="flex items-center justify-center border-b border-black px-6 py-6 hover:bg-black hover:text-white md:border-b-0 md:border-l md:border-black md:py-6"
    >
      {children}
    </Link>
  );
}
