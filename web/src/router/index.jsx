import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import ErrorPage from "../pages/error/ErrorPage";
import QuizResult from "../pages/QuizResult"

export default function Router() {
  return (
    <Routes>
      {/* error page */}
      <Route path="*" element={<ErrorPage />} />

      {/* index page */}
      <Route path="/" element={<Index />} />
      {/* auth */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/quiz-result" element={<QuizResult />} />
    </Routes>
    
  );
}
