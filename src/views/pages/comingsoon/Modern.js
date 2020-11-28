import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const SubmitButton = withStyles({
  root: {
    display: "flex",
    justifyContent: "flex-center",
    border: 0,
    backgroundColor: "#5850ec",
    color: "white",
    height: 48,
    width: "100%",
    fontWeight: 400,
    padding: "0 18px",
    position: "relative",
    borderRadius: "0.25rem",
    "&:hover": {
      backgroundColor: "#4f48d5",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

const LeranMoreButton = withStyles({
  root: {
    display: "flex",
    justifyContent: "flex-center",
    border: "1px solid",
    color: "white",
    height: 40,
    fontWeight: 400,
    padding: "0 38px",
    position: "relative",
    borderRadius: "0.25rem",
    "&:hover": {
      backgroundColor: "#4f48d5",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

const Modern = () => {
  return (
    <div className="h-full w-full justify-center flex items-center">
      <div className="flex m-2 shadow">
        <div className="bg-white p-12 w-1/3 rounded-l-md">
          <span
            className="bg-red-500 h-10 w-10 inline-block rounded-full mb-4"
            style={{ backgroundColor: "rgb(246, 0, 86)" }}
          ></span>
          <h3 className="text-3xl font-bold">Almost there!</h3>
          <p className="mb-6">
            Do you want to be notified when we are ready? Register below so we
            can notify you about the launch!
          </p>
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="username"
          >
            Email address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-6 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
          <SubmitButton>Notify me when you launch</SubmitButton>
          <p className="mt-6 text-gray-600 text-xs">
            This isn't a newsletter subscription. We will send one email to you
            when we launch and then you will be removed from the list.
          </p>
        </div>
        <div
          className="w-2/3 p-32 flex items-center rounded-r-md"
          style={{ backgroundColor: "#5145cd" }}
        >
          <div>
            <h3 className="text-4xl font-bold text-white leading-tight">
              Well-crafted, Coded with attention, Build with passion.{" "}
            </h3>
            <p className="text-indigo-300 mt-4 mb-10">
              Treo helps developers to build organized and well-coded admin
              dashboards full of beautiful and feature rich modules.
            </p>
            <LeranMoreButton variant="outlined">Learn more</LeranMoreButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modern;
