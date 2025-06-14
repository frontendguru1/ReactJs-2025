import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header-wrapper">
      <h4>My Application</h4>
      <nav className="nav-wrapper">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
