import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <main>
      <button onClick={handleLogout}>로그아웃</button>
    </main>
  );
}
