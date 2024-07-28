import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { statusText } = error;
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText}</i>
      </p>
    </div>
  );
};

export default Error;
