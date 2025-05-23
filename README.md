# 💸 MERN Expense Tracker

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



📂 Project Structure

/
├── frontend/ # React client
│ ├── public/ # Static assets
│ └── src/
│ ├── components/ # Reusable UI components (Navbar, Forms, etc.)
│ ├── pages/ # Login, SignUp, Dashboard, Landing
│ ├── context/ # React Context API (User, Auth)
│ ├── utils/ # Axios config, API path constants
│ └── App.js # App entry point
│
├── backend/ # Express server
│ ├── controllers/ # Request/response logic
│ ├── models/ # MongoDB data schemas
│ ├── routes/ # REST API endpoints
│ ├── middleware/ # Auth logic and file uploads
│ └── server.js # Server entry point
│
├── public/uploads/ # User-uploaded profile images
├── .env # Environment variables (excluded from repo)
└── README.md # Project documentation

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