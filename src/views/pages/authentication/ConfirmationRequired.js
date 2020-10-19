import React from "react";
import { history } from "../../../history";

export default function ConfirmationRequired() {
  return (
    <div className="flex flex-auto w-full min-h-screen">
      <div className="w-2/5 bg-white flex justify-end items-center p-16">
        <div className="w-4/5">
          <div
            className="w-12 h-12 mb-8 rounded-full"
            style={{ backgroundColor: "#f60056" }}
          ></div>
          <h2 className="text-3xl font-bold">Confirmation required</h2>
          <p className="mb-6">
            A confirmation mail with instructions has been sent to your email
            address. Follow those instructions to confirm your email address and
            activate your account.
          </p>
          <p>
            Return to
            <a href="/authentication/sign-in" className="text-indigo-600">
              &nbsp;sign in
            </a>
          </p>
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
