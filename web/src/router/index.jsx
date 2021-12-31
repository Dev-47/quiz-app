import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Dashboard from "../pages/account/Dashboard";
import StartQuiz from "../pages/quiz/StartQuiz";
import QuizList from "../pages/quiz/QuizList";
import Result from "../pages/quiz/Result";

// error pages

// import ErrorPage from "../pages/error/ErrorPage";
import Error404 from "../pages/error/Error404";

export default function Router() {
  return (
    <Routes>
      {/* error page */}
      <Route path="*" element={<Error404 />} />

      {/* index page */}
      <Route path="/" element={<Index />} />
      {/* auth */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      {/* account */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* quiz */}
      <Route path="/quiz/list" element={<QuizList />} />
      <Route path="/quiz/:uuid/start" element={<StartQuiz />} />
      <Route path="/quiz/:uuid/result" element={<Result />} />
    </Routes>
  );
}
