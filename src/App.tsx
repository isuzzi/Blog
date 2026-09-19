import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import AboutPage from "./about/AboutPage";
import PostDetailPage from "./posts/[id]/PostDetailPage";
import Header from "./components/header/Header";
import PostListPage from "./posts/PostListPage";
import PostEditPage from "./posts/[id]/PostEditPage";
import PostWritePage from "./posts/PostWritePage";
import ProjectPage from "./project/ProjectPage";
import AdminLoginPage from "./admin/AdminLoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <Header />
      <div className="post-scroll flex min-h-0 flex-1 flex-col overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          {/* 관리자 전용 */}
          <Route element={<ProtectedRoute />}>
            <Route path="/posts/write" element={<PostWritePage />} />
            <Route path="/posts/:id/edit" element={<PostEditPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
