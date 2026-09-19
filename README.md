# ✦ IN MY GALAXY

> SUJIN's personal development blog  
> 기록하고, 만들고, 배우는 과정을 담기 위해
> 그리고 블로그 만들기를 공부하기 위해 만든 개인 블로그

**Live Demo**  
https://inmygalaxy.vercel.app/

**Repository**  
https://github.com/isuzzi/Blog

---

## 📌 About

**IN MY GALAXY**는 프론트엔드 개발을 공부하면서 배운 내용을 기록하고,  
개인 프로젝트와 개발 경험을 정리하기 위해 제작한 개인 블로그입니다.

단순한 정적 블로그가 아니라 직접 **프론트엔드부터 백엔드, 데이터베이스, 인증 및 배포까지 구현**하는 것을 목표로 개발했습니다.

특히 관리자 인증을 적용하여 로그인한 관리자만 게시글을 작성·수정·삭제할 수 있도록 구성했습니다.

---

## ✨ Features

### 📝 Blog

- 게시글 목록 조회
- 게시글 상세 조회
- Markdown 기반 게시글 작성
- 게시글 수정
- 게시글 삭제
- 게시글 작성일 표시
- 반응형 레이아웃
- 로딩 UI
- 권한 없음 페이지

### 🔐 Admin Authentication

- 관리자 로그인
- JWT 기반 인증
- 관리자 권한 확인
- Protected Route 적용
- 로그인 / 로그아웃
- 게시글 작성·수정·삭제 권한 제한

인증이 필요한 API에는 `Bearer Token`을 사용하며,  
서버에서는 JWT의 `role`을 확인하여 관리자 권한을 검증합니다.

### 🎨 UI

- Tailwind CSS 기반 스타일링
- 반응형 레이아웃
- 개발 블로그에 맞춘 개인화된 UI
- 보라색 / Butalism 에 영향을 받은 디자인
- Loading Spinner
- Unauthorized Page

---

## 🛠 Tech Stack

### Frontend

| Technology                   | Usage                     |
| ---------------------------- | ------------------------- |
| React                        | UI 개발                   |
| TypeScript                   | 타입 안정성               |
| Vite                         | 개발 서버 및 빌드         |
| React Router                 | SPA 라우팅                |
| React Markdown               | Markdown 콘텐츠 렌더링    |
| Tailwind CSS                 | 스타일링                  |
| Tailwind Typography          | Markdown 본문 typography  |
| @tailwindcss/vite            | Tailwind CSS의 Vite 통합  |
| ESLint                       | 코드 품질 관리            |
| Prettier                     | 코드 포맷팅               |
| Prettier Tailwind CSS Plugin | Tailwind 클래스 자동 정렬 |

### Backend

| Technology | Usage                        |
| ---------- | ---------------------------- |
| Node.js    | 서버 런타임                  |
| Express    | REST API 서버                |
| PostgreSQL | 게시글 데이터 저장           |
| pg         | PostgreSQL 연결 및 쿼리 실행 |
| JWT        | 관리자 인증                  |
| bcrypt     | 비밀번호 해싱 및 검증        |
| CORS       | 프론트엔드 API 접근 허용     |
| dotenv     | 환경 변수 관리               |

### Development Tools

| Technology        | Usage                                      |
| ----------------- | ------------------------------------------ |
| ESLint Plugins    | React Hooks 및 Fast Refresh 관련 코드 검사 |
| TypeScript ESLint | TypeScript 코드 정적 분석                  |
| Vite React Plugin | Vite에서 React 지원                        |
| Git / GitHub      | 버전 관리 및 소스 코드 관리                |

### Deployment

| Service          | Usage            |
| ---------------- | ---------------- |
| Vercel           | Frontend 배포    |
| Google Cloud Run | Backend API 배포 |
| PostgreSQL       | Database         |

---

## 🏗 Architecture

```text
┌─────────────────────────────┐
│          Browser            │
│                             │
│     React + TypeScript      │
│        Vite + Tailwind      │
└──────────────┬──────────────┘
               │
               │ REST API
               │ JWT Bearer Token
               ▼
┌─────────────────────────────┐
│       Google Cloud Run      │
│                             │
│       Node.js + Express     │
│                             │
│   ┌─────────────────────┐   │
│   │ Authentication      │   │
│   │ JWT + bcrypt        │   │
│   └─────────────────────┘   │
└──────────────┬──────────────┘
               │
               │ SQL
               ▼
┌─────────────────────────────┐
│        PostgreSQL           │
│                             │
│           posts             │
└─────────────────────────────┘
```

Frontend는 Vercel에서 서비스하고,  
API 서버는 Google Cloud Run에서 실행됩니다.

Express 서버는 PostgreSQL과 연결하여 게시글 데이터를 조회하고 변경합니다.

---

## 📂 Project Structure

```text
Blog/
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── src/
│   ├── admin/
│   │   └── AdminLoginPage.tsx
│   │
│   ├── about/
│   │   └── AboutPage.tsx
│   │
│   ├── components/
│   │   ├── auth/
│   │   └── header/
│   │
│   ├── posts/
│   │   ├── [id]/
│   │   │   ├── PostDetailPage.tsx
│   │   │   └── PostEditPage.tsx
│   │   ├── PostListPage.tsx
│   │   └── PostWritePage.tsx
│   │
│   ├── project/
│   │   └── ProjectPage.tsx
│   │
│   ├── pages/
│   │   └── LogoutPage.tsx
│   │
│   ├── unauthorized/
│   │   └── UnauthorizedPage.tsx
│   │
│   ├── Homepage.tsx
│   ├── App.tsx
│   └── ...
│
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
├── prettier.config.js
└── vercel.json
```

---

## 🧭 Routing

| Path              | Page         | Access   |
| ----------------- | ------------ | -------- |
| `/`               | Home         | Public   |
| `/posts`          | Post List    | Public   |
| `/posts/:id`      | Post Detail  | Public   |
| `/project`        | Projects     | Public   |
| `/about`          | About        | Public   |
| `/admin/login`    | Admin Login  | Public   |
| `/logout`         | Logout       | Public   |
| `/unauthorized`   | Unauthorized | Public   |
| `/posts/write`    | Write Post   | 🔒 Admin |
| `/posts/:id/edit` | Edit Post    | 🔒 Admin |

관리자 전용 페이지는 `ProtectedRoute`를 통해 접근을 제한합니다.

---

## 🔐 Authentication Flow

```text
Admin Login
     │
     ▼
POST /auth/login
     │
     ├── email 확인
     │
     ├── bcrypt password 검증
     │
     └── JWT 발급
             │
             ▼
        Access Token
             │
             ▼
      Protected Route
             │
             ▼
   Authorization: Bearer <token>
             │
             ▼
      authMiddleware
             │
       ┌─────┴─────┐
       ▼           ▼
     ADMIN       Invalid
       │           │
       ▼           ▼
    Allow       401 / 403
```

서버에서는 다음과 같은 방식으로 인증을 처리합니다.

1. 로그인 요청에서 관리자 이메일 확인
2. `bcrypt`를 사용하여 비밀번호 검증
3. 검증 성공 시 JWT 발급
4. 보호된 API 요청에서 `Authorization` 헤더 확인
5. JWT 검증
6. `role === "ADMIN"` 확인
7. 조건을 만족하면 API 요청 처리

JWT는 현재 1시간의 만료 시간을 사용합니다.

---

## 📡 API

### Authentication

#### `POST /auth/login`

관리자 로그인

```json
{
  "email": "admin@example.com",
  "password": "password"
}
```

응답:

```json
{
  "message": "로그인되었습니다.",
  "token": "..."
}
```

---

### Posts

#### `GET /posts`

게시글 목록 조회

```http
GET /posts
```

---

#### `GET /posts/:id`

게시글 상세 조회

```http
GET /posts/1
```

---

#### `POST /posts`

게시글 작성

```http
POST /posts
Authorization: Bearer <accessToken>
```

```json
{
  "title": "게시글 제목",
  "content": "게시글 내용"
}
```

관리자 인증이 필요합니다.

---

#### `PATCH /posts/:id`

게시글 수정

```http
PATCH /posts/1
Authorization: Bearer <accessToken>
```

```json
{
  "title": "수정된 제목",
  "content": "수정된 내용"
}
```

관리자 인증이 필요합니다.

---

#### `DELETE /posts/:id`

게시글 삭제

```http
DELETE /posts/1
Authorization: Bearer <accessToken>
```

관리자 인증이 필요합니다.

---

## 🗄 Database

PostgreSQL을 사용하여 게시글 데이터를 관리합니다.

주요 데이터:

```text
posts
├── id
├── title
├── content
└── created_at
```

Backend에서는 `pg`의 `Pool`을 사용하여 PostgreSQL에 연결합니다.

```text
Express
   │
   ▼
pg Pool
   │
   ▼
PostgreSQL
```

SQL Query에는 parameterized query를 사용하여 요청 데이터를 직접 SQL 문자열에 삽입하지 않도록 구성했습니다.

---

## 🔑 Environment Variables

### Frontend

`.env` 파일을 생성합니다.

```env
VITE_API_URL=http://localhost:8080
```

Production 환경에서는 배포된 Cloud Run API 주소를 사용합니다.

```env
VITE_API_URL=https://your-cloud-run-url
```

### Backend

`backend/.env`

```env
PORT=8080

DB_USER=your_database_user
DB_HOST=your_database_host
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=5432

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD_HASH=your_bcrypt_password_hash

JWT_SECRET=your_jwt_secret
```

---

## 🚀 Getting Started

### 1. Clone

```bash
git clone https://github.com/isuzzi/Blog.git

cd Blog
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Configure Frontend Environment

```bash
touch .env
```

```env
VITE_API_URL=http://localhost:8080
```

### 4. Install Backend Dependencies

```bash
cd backend
npm install
```

### 5. Configure Backend Environment

```bash
touch .env
```

필요한 Database 및 JWT 관련 환경 변수를 설정합니다.

### 6. Start Backend

```bash
npm start
```

기본 포트:

```text
http://localhost:8080
```

### 7. Start Frontend

새 터미널에서 프로젝트 루트로 이동합니다.

```bash
cd Blog
npm run dev
```

기본 Vite 개발 서버:

```text
http://localhost:5173
```

---

## 🏭 Build

Frontend production build:

```bash
npm run build
```

Build 과정에서는 TypeScript 검사를 수행한 뒤 Vite production build를 생성합니다.

```text
tsc -b
   ↓
vite build
   ↓
dist/
```

---

## ☁️ Deployment

### Frontend — Vercel

Frontend는 Vercel을 통해 배포합니다.

Production 환경에서는 Vercel 프로젝트의 Environment Variables에 다음 값을 설정합니다.

```env
VITE_API_URL=https://your-cloud-run-api-url
```

SPA routing을 위해 `vercel.json`에서 모든 경로를 `index.html`로 rewrite하도록 설정했습니다.

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Backend — Google Cloud Run

Backend는 Node.js + Express 서버로 구성되어 있으며 Google Cloud Run에서 실행합니다.

Cloud Run 환경 변수에는 다음 값들을 설정합니다.

```text
PORT
DB_USER
DB_HOST
DB_NAME
DB_PASSWORD
DB_PORT
ADMIN_EMAIL
ADMIN_PASSWORD_HASH
JWT_SECRET
```

서버는 Cloud Run에서 전달하는 `PORT` 환경 변수를 사용하며, 지정되지 않은 경우 기본값으로 `8080`을 사용합니다.

---

## 📚 What I Learned

이 프로젝트를 통해 다음 내용을 실제 구현 과정에서 학습했습니다.

- React Router를 활용한 SPA routing
- TypeScript 기반 React 컴포넌트 개발
- REST API 설계 및 연동
- Express 서버 구성
- PostgreSQL 연결 및 SQL Query 작성
- JWT 기반 인증
- bcrypt를 활용한 비밀번호 검증
- Protected Route 구현
- 환경 변수 관리
- CORS 설정
- Vercel 배포
- Google Cloud Run 배포
- Frontend / Backend 분리 배포
- 배포 환경에서 발생하는 API 연결 문제 해결
- 반응형 UI 구현
- Loading / Unauthorized 상태 처리

---

## 📝 Development Notes

이 프로젝트는 단순히 완성된 결과물을 만드는 것보다,

> **"프론트엔드 개발자가 백엔드를 포함한 블로그를 처음부터 배포까지 만들어 본다."**

라는 목표로 진행했습니다.

개발 과정에서 발생한 배포, 인증, API 연결 등의 문제를 직접 해결하면서  
로컬 개발 환경과 Production 환경의 차이를 경험하고,  
Frontend와 Backend가 실제 서비스에서 어떻게 연결되는지 이해하는 것을 중점적으로 진행했습니다.

---

## 👩🏻‍💻 Author

**SUJIN**

Frontend Developer

- GitHub: https://github.com/isuzzi
- Blog: https://inmygalaxy.vercel.app/

---

## 📄 License

This project is for personal portfolio and learning purposes.
