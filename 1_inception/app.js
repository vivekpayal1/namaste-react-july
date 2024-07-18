const heading1 = React.createElement(
  "h1",
  {
    className: "heading1",
    style: {
      color: "green",
    },
  },
  "heading One"
);

const heading2 = React.createElement(
  "h2",
  {
    className: "heading2",
    style: {
      color: "red",
    },
  },
  "heading two"
);

const container = React.createElement(
  "div",
  {
    className: "container",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
