const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog API Server");
});

// 게시글 목록
app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, title, content, created_at FROM posts ORDER BY created_at DESC",
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to fetch posts",
    });
  }
});

// 게시글 작성
app.post("/posts", async (req, res) => {
  try {
    const { title, content } = req.body;

    const result = await pool.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING id, title, content, created_at",
      [title, content],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create post",
    });
  }
});

// 게시글 상세
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT id, title, content, created_at FROM posts WHERE id = $1",
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch post",
    });
  }
});

// 게시글 수정
app.patch("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const result = await pool.query(
      "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING id, title, content, created_at",
      [title, content, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to update post",
    });
  }
});

// 게시글 삭제
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "게시글을 찾을 수 없습니다.",
      });
    }

    res.json({
      message: "게시글이 삭제되었습니다.",
      post: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "게시글 삭제에 실패했습니다.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
