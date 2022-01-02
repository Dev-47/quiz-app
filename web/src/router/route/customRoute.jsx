import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Storage } from "../../store/utils";

import { LOGIN_REQUIRED } from "./protectors";

const storage = new Storage();

export function CustomRoute({ children, ...extra_props }) {
  const is_authenticated = storage.get("token");

  const { protector, redirect_to } = extra_props;
  redirect_to ? redirect_to : "/";

  const get_resolved = () => {
    switch (protector) {
      case LOGIN_REQUIRED:
        return is_authenticated ? children : <Navigate to={redirect_to} />;
      default:
        return children;
    }
  };

  return <div>{get_resolved()}</div>;
}
