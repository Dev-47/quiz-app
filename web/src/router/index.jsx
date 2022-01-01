import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index";

// auth pages
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";

// account pages
import Dashboard from "../pages/account/Dashboard";

// quiz pages
import QuizWelcome from "../pages/quiz/QuizWelcome";
import QuizList from "../pages/quiz/QuizList";
import QuizResult from "../pages/quiz/QuizResult";
import QuizStart from "../pages/quiz/QuizStart";
import CreateQuiz from "../pages/quiz/CreateQuiz";

// error pages
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
      <Route path="/quiz/:uuid/welcome" element={<QuizWelcome />} />
      <Route path="/quiz/:uuid/start" element={<QuizStart />} />
      <Route path="/quiz/result" element={<QuizResult />} />
      <Route path="/quiz/create" element={<CreateQuiz />} />
    </Routes>
  );
}
