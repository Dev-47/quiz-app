import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseLayout from "./BaseLayout";

export default function AuthLayout({ children, pgtitle }) {
  const loginCont = (
    <>
      <p>
        Don't have an account?
        <span className="text-blue-600">
          &nbsp;
          <Link to="/sign-up">Sign Up here</Link>
        </span>
      </p>
      <p>
        Forgot your password?
        <span className="text-blue-600">
          &nbsp;
          <Link to="/reset-password">Reset Password</Link>
        </span>
      </p>
    </>
  );

  const signupCont = (
    <p>
      Already have an account?{" "}
      <span className="text-blue-600">
        <Link to="/sign-in">Login Here</Link>
      </span>
    </p>
  );

  const extra = [
    {
      title: "Login",
      cont: loginCont,
    },
    {
      title: "Sign Up",
      cont: signupCont,
    },
    {
      title: "Reset Password",
      cont: <div className="hidden border-black border-2">hello</div>,
    },
  ];

  const [item, setItem] = useState({});

  useEffect(() => {
    extra
      .filter((item) => item.title === pgtitle)
      .map((item) => {
        setItem(item);
      });
  }, []);

  return (
    <BaseLayout>
      <div className="text-white grid w-full body-font">
        <h2 className="col-span-2 grid place-content-center text-2xl font-bold underline decoration-2 m-4">
          {pgtitle}
        </h2>

        <div className="w-full">
          <form className="auth-form">
            {children}
            <button className="authBtn">{pgtitle}</button>
          </form>
        </div>

        <div className="flex flex-col place-content-center place-items-start text-2xl">
          {item.cont}
        </div>
      </div>
    </BaseLayout>
  );
}
