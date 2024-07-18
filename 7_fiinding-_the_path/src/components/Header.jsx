import { useState } from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <h1>
      <a href="#">Food Villa</a>
    </h1>
  );
}

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="header">
      <Logo />
      <nav className="list-items">
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
          <li>
            <Link to="/cart">Cart...</Link>
          </li>
        </ul>
      </nav>
      <div>
        {isLogged ? (
          <button onClick={() => setIsLogged(false)}>Log Out</button>
        ) : (
          <button onClick={() => setIsLogged(true)}>Login</button>
        )}
      </div>
    </div>
  );
};
export default Header;
