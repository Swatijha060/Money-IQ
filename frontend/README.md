# 💸 MERN Expense Tracker App

A full-stack expense tracking application built using the MERN stack (MongoDB, Express, React, Node.js).  
Features user authentication, income/expense management, and profile image uploads.

---

## 📂 Project Structure

/
├── frontend/                   # React client  
│   ├── public/                 # Static assets  
│   └── src/  
│       ├── components/         # Reusable UI components  
│       │   ├── Navbar.jsx  
│       │   ├── IncomeForm.jsx  
│       │   ├── ExpenseForm.jsx  
│       │   └── ProtectedRoute.jsx  
│       ├── pages/              # Route-based pages  
│       │   ├── Login.jsx  
│       │   ├── SignUp.jsx  
│       │   ├── Dashboard.jsx  
│       │   └── Landing.jsx  
│       ├── context/            # React Context (Auth/User)  
│       │   └── UserContext.js  
│       ├── utils/              # API paths, Axios instance, etc.  
│       │   ├── apiPaths.js  
│       │   └── axiosInstance.js  
│       └── App.js              # App entry  
│  
├── backend/                    # Express server  
│   ├── controllers/            # Route logic  
│   ├── models/                 # Mongoose models  
│   ├── routes/                 # API routes  
│   ├── middleware/             # Auth & upload middleware  
│   └── server.js               # Main Express app  
│  
├── public/uploads/             # User-uploaded profile images  
├── .env                        # Environment variables  
└── README.md                   # Project documentation  

---

## 🔧 Setup Instructions

### 📦 Frontend

```bash
cd frontend
npm install
npm run dev



### 📦 Backend

```bash
cd backend
npm install
npm run dev