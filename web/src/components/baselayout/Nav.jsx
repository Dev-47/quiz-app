import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { } from "../../store/reducers/auth";
import profileImg from "../../assets/images/profile.jpg";

export default function Nav(props) {
  const { content } = props;

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

  // usestate to show the links in the nav
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
    <nav
      {...props}
      className="navbar shadow-md bg-white flex justify-between px-10 py-3 mb-2 place-items-center z-10"
    >
      <div className="logo">
        <Link to="/">
          <span className="text-[#e01936] text-3xl">DEV &nbsp;</span>
          <span className="text-[#026294] text-3xl">47</span>
        </Link>
      </div>
      <ul className="text-black hidden sm:flex justify-between mr-[400px] space-x-10">
        <span>For Schools </span>
        <span>For Teacher</span>
      </ul>

      {/* {is_authenticated ? (
        <button className="nav-btn">{item.cont}</button>
      ) : (
      )} */}
      <button className=""><img src={profileImg} alt="profile image" className="w-12 h-[2.7rem] rounded-full" /></button>
    </nav>
  );
}
