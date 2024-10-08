import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: unknown = useRouteError();
  console.log(error);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "whitesmoke",
        fontFamily: "sans-serif",
      }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as { statusText?: string })?.statusText}</i>
      </p>
      <h2>{(error as { data?: string })?.data}</h2>
      <Link to='/' />
    </div>
  );
};

export default ErrorPage;
