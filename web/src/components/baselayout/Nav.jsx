import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-between px-3">
      <h1><Link to="/">Quiz App</Link></h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/how-to-use">How to use</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <span>
        <Link to="/sign-in">Login/Start a Test</Link>
      </span>
    </nav>
  );
}
