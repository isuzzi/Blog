import NavItem from "./NavItem";

const navigationItems = [
  {
    label: "POST",
    to: "/posts",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
];

export default function Navigation() {
  return (
    <>
      {navigationItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.label}
        </NavItem>
      ))}
    </>
  );
}
