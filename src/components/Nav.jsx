import { Link } from "react-router-dom";
import '../Nav.css';
import { GiMountains } from "react-icons/gi";

function Nav() {
    return (
        <header>
            <nav className="BG">
                <GiMountains className="icon" />
                <ul>
                    <li className="link-box">
                        <Link to='/' className="link">Home</Link>
                    </li>
                    <li className="link-box">
                        <Link to='/parks' className="link">Parks</Link>
                    </li>
                    <li className="link-box">
                        <Link to='/about' className="link">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;