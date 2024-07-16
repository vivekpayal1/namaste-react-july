import React from "react";
import ReactDOM from "react-dom/client";

const heading3 = (
  <h3 className="heading3" id="heading3">
    Hello
  </h3>
);
const Header = () => {
  return (
    <>
      {heading3}
      <h1>Fn Component</h1>
    </>
  );
};
console.log(Header);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Header />);
