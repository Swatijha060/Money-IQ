import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import LearnMore from './pages/LearnMore/LearnMore';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import UserProvider from './context/UserContext';
import Landing from './pages/LandingPage/Landing';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/Inputs/ProtectedRoute';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* ✅ Show landing page first */}
          <Route path="/" element={<Landing />} />

          {/* ✅ Auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/learn-more" element={<LearnMore />} />

          {/* ✅ Protected pages */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/income"
            element={
              <ProtectedRoute>
                <Income />
              </ProtectedRoute>
            }
          />
          <Route
            path="/expense"
            element={
              <ProtectedRoute>
                <Expense />
              </ProtectedRoute>
            }
          />
        
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          style: { fontSize: '13px' },
        }}
      />
    </UserProvider>
  );
};

export default App;
