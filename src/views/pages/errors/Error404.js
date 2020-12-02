import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        src={require("../../../assets/images/pages/errors/404.svg")}
        className="image"
        alt=""
      />
      <h1 className="text-3xl font-bold mt-8">Ooops... 404!</h1>
      <p>The page you requested could not be found.</p>
      <a className="text-indigo-500 mt-4" href="/">
        {" "}
        Back to Dashboard{" "}
      </a>
    </div>
  );
};

export default Error404;
