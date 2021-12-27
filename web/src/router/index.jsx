import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
<<<<<<< HEAD
=======
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import ErrorPage from "../pages/error/ErrorPage";
>>>>>>> a90a8cda770f74ef7e3de59b8059c4d85ecc5a9e

export default function Router() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Index />} />
=======
      {/* error page */}
      <Route path="*" element={<ErrorPage />} />

      {/* index page */}
      <Route path="/" element={<Index />} />
      {/* auth */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
>>>>>>> a90a8cda770f74ef7e3de59b8059c4d85ecc5a9e
    </Routes>
  );
}
