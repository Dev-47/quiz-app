import React, { useState } from "react";
import { connect } from "react-redux";

import { loginUser } from "../../store/actions/auth";

function SignIn({ loginUser }) {
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");

  const __login_user = (username, password) => {
    loginUser({ username, password });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          __login_user(username, password);
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => {
            set_username(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            set_password(e.target.value);
          }}
        />

        <button>Login</button>
      </form>
    </div>
  );
}

export default connect(null, { loginUser })(SignIn);
