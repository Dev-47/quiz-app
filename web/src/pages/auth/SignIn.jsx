import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/auth";

import AuthLayout from "../../layouts/AuthLayout";
import InputGroup from "../../components/auth/InputGroup";

function SignIn({ loginUser }) {
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");

  const __login_user = (username, password) => {
    loginUser({ username, password });
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

export default connect(null, { loginUser })(SignIn);
