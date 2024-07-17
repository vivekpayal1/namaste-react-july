function Logo() {
  return (
    <h1>
      <a href="#">Food Villa</a>
    </h1>
  );
}

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <nav className="list-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
