import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav({ content }) {
  const links = [
    {
      title: "Login",
      cont: <Link to="/sign-in">Login</Link>,
    },
    {
      title: "Sign Up",
      cont: <Link to="/sign-up">Sign Up</Link>,
    },
  ];

  // usestate to show the content in the auth pages
  const [item, setItem] = useState({});

  // useEffect to the show content according to the page title props
  useEffect(() => {
    links
      .filter((item) => item.title === content)
      .map((item) => {
        setItem(item);
      });
  }, []);

  return (
    <nav className="navbar shadow-md bg-white flex justify-between px-10 py-3 mb-2 place-items-center z-10">
      <div className="logo">
        <Link to="/">
          <span className="text-[#e01936] text-3xl">DEV &nbsp;</span>
          <span className="text-[#026294] text-3xl">47</span>
        </Link>
      </div>
      <ul className="text-black flex justify-between mr-[400px] space-x-10">
        <span>For Schools </span>
        <span>For Teacher</span>
      </ul>
      <button className="nav-btn">{item.cont}</button>
    </nav>
  );
}
