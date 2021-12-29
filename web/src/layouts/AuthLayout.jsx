import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Nav from "../components/baselayout/Nav";
import Footer from "../components/baselayout/Footer";

export default function AuthLayout({ children, pgtitle, onSubmit }) {


  // array of content to show in the auth pages
  const extra = [
    {
      title: "Login",
      cont: "Login with your email and password below",
      nav_cont: "Sign Up"
    },
    {
      title: "Sign Up",
      cont: null,
      nav_cont: "Login"
    },
    {
      title: "Reset Password",
      cont: "enter your email below to reset your password",
      nav_cont: "Login"
    },
  ];

  // usestate to show the content in the auth pages
  const [item, setItem] = useState({});

  // useEffect to the show content according to the page title props
  useEffect(() => {
    extra
      .filter((item) => item.title === pgtitle)
      .map((item) => {
        setItem(item);
      });
  }, []);

  // prevent the default action of the form
  const preventDefault = (e) => {
    e.preventDefault();
  };

  // react default return
  return (
    <div>
    <Nav content={item.nav_cont}/>
    <div className="bg-[#fffaf2] p-4">
      <div className="text-black grid w-[24rem] shadow-md bg-white rounded my-0 mx-auto">
        <h2 className="grid place-content-center text-center font-light text-4xl text-[#026294] font-bold m-4">
          Welcome To Dev 47 Quiz
        </h2>
        <p className="text-center">{item.cont}</p>

        <div className="w-20S">
          <form className="auth-form " onSubmit={onSubmit}>
            {children}
            <button className="auth-btn bg-[#026294] text-white ">{pgtitle}</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

// how far
// check session chat