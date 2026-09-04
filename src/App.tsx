import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import AboutPage from "./about/AboutPage";
import PostDetailPage from "./posts/[id]/PostDetailPage";
import Header from "./components/Header";
import PostListPage from "./posts/PostListPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
