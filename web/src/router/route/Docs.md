# Private / Protected Routes

Custom router to protect views, like authentications, admins, etc

```jsx
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { LOGIN_REQUIRED } from "./protectors"; // flag to protect authentication

export function CustomRoute({ children, ...extra_props }) {
  const is_authenticated = storage.get("token");

  const { protector, redirect_to } = extra_props;
  redirect_to ? redirect_to : "/";

  const get_resolved = () => {
    // switch case to map each auth
    switch (protector) {
      case LOGIN_REQUIRED:
        return is_authenticated ? children : <Navigate to={redirect_to} />;
      default:
        return children;
    }
  };

  return <div>{get_resolved()}</div>;
}
```

# Usage

```jsx
import Footer from "../components/baselayout/Footer";
import Nav from "../components/baselayout/Nav";
import { CustomRoute } from "../router/route/customRoute";

export default function BaseLayout(props) {
  const { children, protector, redirect_to } = props;
  const router_props = {
    children,
    protector,
    redirect_to,
  };

  return (
    <CustomRoute {...router_props}>
      <div className="w-full text-white body">
        <Nav content="Sign Up" />
        {children}
        <Footer />
      </div>
    </CustomRoute>
  );
}
```
