import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import AboutPage from "./about/AboutPage";
import PostDetailPage from "./posts/[id]/PostDetailPage";
import Header from "./components/header/Header";
import PostListPage from "./posts/PostListPage";
import CreatePostPage from "./posts/CreatePostPage";
import PostEditPage from "./posts/[id]/PostEditPage";
import PostWritePage from "./posts/PostWritePage";
import { PortfolioPage } from "./potfolio/PortfolioPage";

function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/new" element={<CreatePostPage />} />
        <Route path="/posts/write" element={<PostWritePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/:id/edit" element={<PostEditPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
