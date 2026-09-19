const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const pool = require("./db");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog API Server");
});

//로그인
app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "이메일과 비밀번호를 입력해주세요.",
      });
    }

    // 관리자 이메일 확인
    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({
        message: "이메일 또는 비밀번호가 올바르지 않습니다.",
      });
    }

    // 비밀번호 확인
    const isValidPassword = await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD_HASH,
    );

    if (!isValidPassword) {
      return res.status(401).json({
        message: "이메일 또는 비밀번호가 올바르지 않습니다.",
      });
    }

    // JWT 발급
    const token = jwt.sign(
      {
        email,
        role: "ADMIN",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res.json({
      message: "로그인되었습니다.",
      token,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "로그인에 실패했습니다.",
    });
  }
});

// 게시글 목록
app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
        id,
        title,
        content,
        created_at AS "createdAt"
       FROM posts
       ORDER BY created_at DESC`,
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
      `SELECT
        id,
        title,
        content,
        created_at AS "createdAt"
       FROM posts
       WHERE id = $1`,
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
app.patch("/posts/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const result = await pool.query(
      `UPDATE posts
       SET title = $1, content = $2
       WHERE id = $3
       RETURNING id, title, content, created_at AS "createdAt"`,
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
app.delete("/posts/:id", authMiddleware, async (req, res) => {
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

// 게시글 작성
app.post("/posts", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "제목과 내용을 입력해주세요.",
      });
    }

    const result = await pool.query(
      `
      INSERT INTO posts (title, content)
      VALUES ($1, $2)
      RETURNING *
      `,
      [title, content],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "게시글 작성에 실패했습니다.",
    });
  }
});
