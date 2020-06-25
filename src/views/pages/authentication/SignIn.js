import React from "react";

export default function SignIn() {
  return (
    <div className="flex flex-auto w-full min-h-screen">
      <div className="w-2/5 bg-white flex justify-end items-center p-16">
        <div className="w-3/5">
          <span className="bg-indigo-500 w-20 h-20"></span>
          <h2 className="text-3xl">Sign in</h2>
          <p>
            Don't have an account? <a href="">Sign up</a>
          </p>
          <form class="pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email address
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
      <div
        className="w-3/5 relative overflow-hidden"
        style={{ background: "#5145cd" }}
      >
        <svg
          viewBox="0 0 1531 891"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          class="background ng-tns-c162-36"
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
            class="ng-tns-c162-36"
            fill="#e5edff"
          ></path>
          <path
            style={{ opacity: 0.1 }}
            d="M1405 848c-424.366 158.009-437-164-437-272s102-425 563-576v769c-21.333 29.333-63.333 55.667-126 79z"
            class="ng-tns-c162-36"
            fill="#e5edff"
          ></path>
          <path
            style={{ opacity: 0.1 }}
            d="M1531 162c-122.914-17.284-377.96 33.191-543.433 206.414C822.095 541.636 797.342 648.75 835.842 731.622c38.5 82.871 198.243 134.841 400.555 92.053C1438.71 780.886 1492.752 775.894 1531 768V162z"
            class="ng-tns-c162-36"
            fill="#e5edff"
          ></path>
        </svg>
      </div>
    </div>
  );
}
