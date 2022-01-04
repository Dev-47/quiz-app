import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Storage } from "../../store/utils";

import { LOGIN_REQUIRED } from "./protectors";

const storage = new Storage();

export function CustomRoute({ children, ...extra_props }) {
  const [page_content, set_page_content] = useState(children);

  const { protector, redirect_to } = extra_props;
  redirect_to ? redirect_to : "/";

  const get_resolved = () => {
    switch (protector) {
      case LOGIN_REQUIRED:
        const is_authenticated = storage.get("token");
        return is_authenticated?.length > 0 ? (
          children
        ) : (
          <Navigate to={redirect_to} />
        );
      default:
        return children;
    }
  };

  useEffect(() => {
    set_page_content(get_resolved());
  }, []);

  return <div>{page_content}</div>;
}
