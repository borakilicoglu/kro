import React from "react";

export default function PageHeader() {
  return (
    <div className="flex items-center justify-between w-full my-4 px-4 xs:pr-0">
      <div className="mr-6">
        <h2 className="m-0 text-3xl font-semibold">Finance dashboard</h2>
        <div className="text-secondary tracking-tight">
          Keep track of your financial status
        </div>
      </div>
      <div className="flex items-center">
        <button className="border border-gray-400 ml-2 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <svg
            className="w-5"
            x="480"
            y="1584"
            viewBox="0 0 24 24"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              opacity=".3"
              d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
            ></path>
            <path d="M17 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
          </svg>
          <span className="ml-2">Export</span>
        </button>

        <button className="border border-gray-400 ml-2 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <svg
            className="w-5"
            x="96"
            y="144"
            viewBox="0 0 24 24"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              opacity=".3"
              d="M5 5v14h14V5H5zm4 12H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
            ></path>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"></path>
          </svg>
          <span className="ml-2">Reports</span>
        </button>

        <button className="border border-gray-400 ml-2 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <svg
            className="w-5"
            x="432"
            y="1968"
            viewBox="0 0 24 24"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M3 5h10v2H3zm4 6H3v2h4v2h2V9H7zm6 4h-2v6h2v-2h8v-2h-8zM3 17h6v2H3zm8-6h10v2H11zm6-8h-2v6h2V7h4V5h-4z"></path>
          </svg>
          <span className="ml-2">Settings</span>
        </button>

        <div className="hidden xs:flex">
          <button
            aria-haspopup="true"
            className="mat-menu-trigger"
            ng-reflect-menu="[object Object]"
          >
            <span className="flex">
              <svg
                x="480"
                y="1200"
                viewBox="0 0 24 24"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
