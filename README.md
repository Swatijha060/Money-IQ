# 💸 MONEY IQ

A full-stack **Expense Tracker** web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This app allows users to manage their personal finances efficiently by tracking income and expenses, visualizing their spending, and securely storing profile information.

Designed for individuals who want a simple yet powerful tool to monitor their financial habits, this app provides an intuitive user interface, strong authentication, and real-time updates.

> Whether you're budgeting for groceries or analyzing monthly trends, this tracker puts you in control of your money.

---

## 🚀 Features

- 🔐 **User Authentication**: Secure sign-up and login system using JWT.
- 💼 **Income & Expense Management**: Easily add, edit, and delete financial records.
- 📊 **Dashboard Overview**: Summary cards and charts to visualize spending patterns.
- 📁 **Profile Upload**: Upload a profile picture to personalize your experience.
- 🔒 **Protected Routes**: Client-side route protection for authenticated users only.

---

## 📁 Project Structure

/ ├── frontend/ # React client
│ ├── public/ # Static assets
│ └── src/
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx
│ │ ├── IncomeForm.jsx
│ │ ├── ExpenseForm.jsx
│ │ └── ProtectedRoute.jsx
│ ├── pages/ # Route-based pages
│   │
│ │ ├── Auth Pages(Login , SignUp)
│ │ ├── Dashboard.jsx
│ │ └── Landing.jsx
│ │ 
│ │ 
│ ├── context/ # React Context (Auth/User)
│ │ └── UserContext.js
│ ├── utils/ # API paths, Axios instance, etc.
│   ├── apiPaths.js
│   └── axiosInstance.js
│ 
│
├── backend/ # Express server
│ ├── controllers/ # Route logic
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── middleware/ # Auth & upload middleware
│ └── server.js # Main Express app
│

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