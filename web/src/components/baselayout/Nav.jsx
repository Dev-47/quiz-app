import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex justify-between px-3">
            <h1>Quiz App</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/how-to-use">How to use</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <button>Login/Start a Test</button>
        </nav>
    )
}
