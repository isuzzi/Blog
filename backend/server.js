const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
