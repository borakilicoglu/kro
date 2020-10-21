import React from "react";

const Error500 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        src={require("../../../assets/images/pages/errors/500.svg")}
        className="image"
      />
      <h6 className="text-3xl font-bold mt-8">Something went wrong!</h6>
      <p>
        Server Error 500. Our staff has been notified, thank you for your
        understanding.
      </p>
      <a className="text-indigo-500 mt-4" href="/">
        {" "}
        Back to Dashboard{" "}
      </a>
    </div>
  );
};

export default Error500;
