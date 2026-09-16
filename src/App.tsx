import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import AboutPage from "./about/AboutPage";
import PostDetailPage from "./posts/[id]/PostDetailPage";
import Header from "./components/Header";
import PostListPage from "./posts/PostListPage";
import CreatePostPage from "./posts/CreatePostPage";
import PostEditPage from "./posts/[id]/PostEditPage";
import PostWritePage from "./posts/PostWritePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/new" element={<CreatePostPage />} />
        <Route path="/posts/write" element={<PostWritePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/:id/edit" element={<PostEditPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
