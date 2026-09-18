import NavItem from "./NavItem";

const navigationItems = [
  {
    label: "POST",
    to: "/posts",
  },
  {
    label: "PROJECT",
    to: "/project",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
];
export default function Navigation() {
  return (
    <div className="grid grid-cols-3 lg:col-span-3">
      {navigationItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.label}
        </NavItem>
      ))}
    </div>
  );
}
