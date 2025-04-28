# Bankend

A basic **Node.js + Express.js + MongoDB** backend project for Authentication and Todo management.

---

## ✨ Features

- User Registration
- User Login (JWT authentication)
- Protected Routes
- Create, Read, Update, Delete (CRUD) for Todos
- Password Hashing (`bcryptjs`)
- Input Validation (`express-validator`)
- MongoDB integration (`mongoose`)
- CORS enabled
- Environment Variables support (`dotenv`)
- Dev server with `nodemon`

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT)
- bcryptjs
- express-validator

---

## 📂 Folder Structure

```
bankend/
├── controllers/
│   ├── authController.js
│   └── todoController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Todo.js
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## ⚙️ Installation and Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/bankend.git
cd bankend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in root

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server (in development)

```bash
npm run dev
```

Server will start on `http://localhost:5000/`.

---

## 📨 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user and get token |
| GET | `/api/auth/protectedRoute` | Access protected route (requires token) |

---

### Todos Routes (Protected)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/todos` | Create new todo |
| GET | `/api/todos` | Get all todos |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |

**Note:** Pass Authorization header:  
```Authorization: Bearer YOUR_TOKEN_HERE```

---

## 🔥 CURL Commands

### 1. Register User

```bash
curl -X POST http://localhost:5000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "username": "JohnDoe",
  "email": "johndoe@example.com",
  "password": "Password123"
}'
```

### 2. Login User

```bash
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "johndoe@example.com",
  "password": "Password123"
}'
```

### 3. Access Protected Route

```bash
curl -X GET http://localhost:5000/api/auth/protectedRoute \
-H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 4. Create Todo

```bash
curl -X POST http://localhost:5000/api/todos \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-d '{
  "title": "Learn Node.js",
  "description": "Understand basics of Node.js"
}'
```

### 5. Get All Todos

```bash
curl -X GET http://localhost:5000/api/todos \
-H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 6. Update Todo

```bash
curl -X PUT http://localhost:5000/api/todos/TODO_ID_HERE \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-d '{
  "title": "Updated Title",
  "description": "Updated Description"
}'
```

### 7. Delete Todo

```bash
curl -X DELETE http://localhost:5000/api/todos/TODO_ID_HERE \
-H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 📨 Postman Collection

You can also test easily using [Postman](https://www.postman.com/):

1. Create a new collection named **Bankend APIs**.
2. Add requests:
   - Register
   - Login
   - Protected Route
   - Create Todo
   - Get Todos
   - Update Todo
   - Delete Todo
3. Save JWT token after login and set it in Authorization Bearer Token for all protected routes.

---

## 🛡️ Environment Variables

In the `.env` file:

| Variable | Description |
| :--- | :--- |
| PORT | Port number (default: 5000) |
| MONGO_URI | Your MongoDB connection string |
| JWT_SECRET | Secret key to sign JWT token |

---

## 🧹 .gitignore File

Create a `.gitignore` file and add:

```
node_modules/
.env
```

---

## 🧑‍💻 Author

- **Shrie**

---

## 📜 License

This project is licensed under the **ISC License**.

---
