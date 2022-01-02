import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/auth";

import AuthLayout from "../../layouts/AuthLayout";
import InputGroup from "../../components/auth/InputGroup";
import { useEffect } from "react";

function SignIn({ loginUser, is_authenticated }) {
  const navigate = useNavigate();

  const [username, set_username] = useState("");
  const [password, set_password] = useState("");

  const __login_user = (username, password) => {
    loginUser({ username, password });
    navigate("/dashboard");
  };

  // page title
  document.title = "Login - Quiz App";

  return (
    <AuthLayout
      pgtitle="Login"
      navBtn="Sign Up"
      onSubmit={(e) => {
        e.preventDefault();
        __login_user(username, password);
      }}
    >
      <InputGroup
        type="text"
        contenttitle="Username"
        onChange={(e) => set_username(e.target.value)}
      />
      <InputGroup
        type="password"
        contenttitle="Password"
        onChange={(e) => set_password(e.target.value)}
      />
      <p className="float-right py-3 px-2">
        <Link to="/reset-password">Forgot Password?</Link>
      </p>
    </AuthLayout>
  );
}

const mapStateToProps = (state) => ({
  is_authenticated: state.auth.is_authenticated,
});

export default connect(mapStateToProps, { loginUser })(SignIn);
