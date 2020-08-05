import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { history } from "../../../history";

export default function SignIn() {
  return (
    <div className="flex flex-auto w-full min-h-screen">
      <div className="w-2/5 bg-white flex justify-end items-center p-16">
        <div className="w-4/5">
          <div
            className="w-12 h-12 mb-8 rounded-full"
            style={{ backgroundColor: "#f60056" }}
          ></div>
          <h2 className="text-3xl font-bold">Sign in</h2>
          <p>
            Don't have an account?
            <a href="" className="text-indigo-600 pl-2">
              Sign up
            </a>
          </p>
          <form className="pt-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                for="email"
              >
                Email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="stefan.schmitz@company.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="admin"
              />
              {/* <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p> */}
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="-ml-2">
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <span>Remember me</span>
              </div>
              <a
                className="inline-block align-baseline font-normal text-sm text-indigo-500 hover:text-indigo-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => history.push("/")}
                className="bg-indigo-700 hover:bg-indigo-800 w-full text-white font-normal py-3 rounded focus:outline-none focus:shadow-outline "
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="separator text-gray-600">Or continue with</div>

          <div className="flex justify-between">
            <button className="px-10 py-2 rounded border">
              <svg
                className="w-5 text-gray-600"
                x="48"
                y="192"
                viewBox="0 0 24 24"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  fill="none"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="currentColor"
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1v0h3z"
                ></path>
              </svg>
            </button>
            <button className="px-10 py-2 rounded border">
              <svg
                className="w-5 text-gray-600"
                x="432"
                y="480"
                viewBox="0 0 24 24"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  fill="none"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="currentColor"
                  d="M23 3c-.9.642-1.943 1.164-3.063 1.509l-.077.021A4.48 4.48 0 0012 7.47v.063-.003 1a10.646 10.646 0 01-8.977-4.496l-.022-.033s-4 9 5 13A11.54 11.54 0 01.978 19l.023.001c9 5 20 0 20-11.5a4.5 4.5 0 00-.085-.859l.005.029a7.717 7.717 0 002.069-3.617l.011-.053z"
                ></path>
              </svg>
            </button>
            <button className="px-10 py-2 rounded border">
              <svg
                className="w-5 text-gray-600"
                x="1056"
                y="192"
                viewBox="0 0 24 24"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  fill="none"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="currentColor"
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.36 3.36 0 00-.941-2.611l.001.001c3.14-.35 6.44-1.54 6.44-7a5.422 5.422 0 00-1.502-3.752L20 4.77a4.97 4.97 0 00.32-1.773c0-.722-.151-1.408-.423-2.03L19.91 1S18.73.65 16 2.48c-1.05-.296-2.255-.466-3.5-.466s-2.45.17-3.594.488L9 2.48C6.27.65 5.09 1 5.09 1a4.992 4.992 0 00-.41 1.997c0 .637.117 1.246.332 1.807L5 4.769A5.418 5.418 0 003.5 8.52v.03-.002c0 5.42 3.3 6.61 6.44 7a3.357 3.357 0 00-.939 2.591L9 18.128v3.87"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-3/5 relative overflow-hidden items-center flex justify-center "
        style={{ background: "#5145cd" }}
      >
        <div className="w-6/12">
          <h2
            className="text-white font-semibold leading-tight mb-2"
            style={{ fontSize: "40px" }}
          >
            Well-crafted, <br /> Coded with attention, <br />
            Build with passion.
          </h2>
          <p className="text-gray-400 leading-normal mb-8">
            Nucleo helps developers to build organized and well-coded admin
            dashboards full of beautiful and feature rich modules.
          </p>

          <button className="custom-button text-white font-normal py-2 px-10 border border-white rounded transition ease-in-out duration-500">
            Learn more
          </button>
        </div>
        <svg
          viewBox="0 0 1531 891"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          className="background ng-tns-c162-36"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "900px",
            pointerEvents: "none",
          }}
        >
          <path
            style={{ opacity: 0.1 }}
            d="M0 182c144.327 47.973 534.462 219.712 440.509 369.87C346.555 702.028 79.877 662.846 0 638V182z"
            className="ng-tns-c162-36"
            fill="#e5edff"
          ></path>
          <path
            style={{ opacity: 0.1 }}
            d="M1405 848c-424.366 158.009-437-164-437-272s102-425 563-576v769c-21.333 29.333-63.333 55.667-126 79z"
            className="ng-tns-c162-36"
            fill="#e5edff"
          ></path>
          <path
            style={{ opacity: 0.1 }}
            d="M1531 162c-122.914-17.284-377.96 33.191-543.433 206.414C822.095 541.636 797.342 648.75 835.842 731.622c38.5 82.871 198.243 134.841 400.555 92.053C1438.71 780.886 1492.752 775.894 1531 768V162z"
            className="ng-tns-c162-36"
            fill="#e5edff"
          ></path>
        </svg>
      </div>
    </div>
  );
}
