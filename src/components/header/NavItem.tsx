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
      className="font-display flex items-center justify-center border-l border-black px-6 py-6 text-xl first:border-l-0 hover:bg-black hover:text-white"
    >
      {children}
    </Link>
  );
}
