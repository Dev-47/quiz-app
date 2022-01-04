import { useState } from "react";
import { connect } from "react-redux";

import AuthLayout from "../../layouts/AuthLayout";
import InputGroup from "../../components/auth/InputGroup";
import { registerUser } from "../../store/actions/auth";
import { useNavigate } from "react-router-dom";

function SignUp({ registerUser }) {
  const navigate = useNavigate();

  // page title
  document.title = "Sign Up - Quiz App";

  const [username, set_username] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");

  const user_data = {
    username,
    email,
    password,
  };

  const register_user = (e) => {
    e.preventDefault();
    registerUser(user_data);

    navigate("/sign-in");
  };

  return (
    <AuthLayout pgtitle="Sign Up" navBtn="Login" onSubmit={register_user}>
      <InputGroup
        type="text"
        contenttitle="Username"
        onChange={(e) => {
          set_username(e.target.value);
        }}
      />
      <InputGroup
        type="email"
        contenttitle="Email"
        onChange={(e) => {
          set_email(e.target.value);
        }}
      />
      <InputGroup
        type="password"
        contenttitle="Password"
        onChange={(e) => {
          set_password(e.target.value);
        }}
      />
    </AuthLayout>
  );
}

const mapStateToProps = (state) => ({
  is_authenticated: state.auth.is_authenticated,
});

export default connect(mapStateToProps, { registerUser })(SignUp);
