import { useEffect, useState } from "react";

import Nav from "../components/baselayout/Nav";
import Footer from "../components/baselayout/Footer";

export default function AuthLayout({ children, pgtitle, onSubmit, navBtn }) {

  // array of content to show in the auth pages
  const extra = [
    {
      title: "Login",
      cont: "Login with your email and password below",
    },
    {
      title: "Sign Up",
      cont: null,
    },
    {
      title: "Reset Password",
      cont: "enter your email below to reset your password",
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
   
  // react default return
  return (
    <div>
      <Nav content={navBtn}/>
      <div className="bg-[#fffaf2] h-screen p-4">
        <div className="text-black grid max-w-md shadow-md bg-white my-0 mx-auto">
          <h2 className="grid place-content-center text-center font-light text-4xl text-[#026294] m-4">
            Welcome To Dev 47 Quiz
          </h2>
          <p className="text-center">{item.cont}</p>

          <div className="">
            <form className="auth-form" onSubmit={onSubmit}>
              {children}
              <button className="auth-btn bg-[#026294] text-white ">
                {pgtitle}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
