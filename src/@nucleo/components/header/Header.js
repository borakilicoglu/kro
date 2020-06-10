import React from "react";

export default function Header() {
  return (
    <header className="w-full flex items-center bg-white py-2 px-6 hidden sm:flex shadow">
      <div className="w-1/2">
        <button className="navigation-toggle-button mat-icon-button mat-button-base w-6 align-middle">
          <svg
            x="672"
            y="1152"
            viewBox="0 0 24 24"
            fill="#64748b"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
      </div>
      <div className="relative w-1/2 flex justify-end">
        <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
          <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt="" />
        </button>
        <button
          x-show="isOpen"
          className="h-full w-full fixed inset-0 cursor-default hidden"
        ></button>
        <div
          x-show="isOpen"
          className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 hidden"
        >
          <a href="/" className="block px-4 py-2 account-link hover:text-white">
            Account
          </a>
          <a href="/" className="block px-4 py-2 account-link hover:text-white">
            Support
          </a>
          <a href="/" className="block px-4 py-2 account-link hover:text-white">
            Sign Out
          </a>
        </div>
      </div>
    </header>
  );
}
