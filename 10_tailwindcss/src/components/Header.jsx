import { useState } from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <h1 className="text-3xl font-semibold">
      <Link to="/" >Food Villa</Link>
    </h1>
  );
}

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 px-6">
      <Logo />
      <div className="flex items-center gap-3">
        <nav className="list-items">
          <ul className="flex items-center gap-3">
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
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/instamart">InstaMart</Link>
            </li>
          </ul>
        </nav>
        <div>
          {isLogged ? (
            <button
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => setIsLogged(false)}
            >
              Log Out
            </button>
          ) : (
            <button
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={() => setIsLogged(true)}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
