import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export default function Search(props) {
  // Toggle Search
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mr-2">
      <IconButton onClick={() => setToggle(!toggle)}>
        <SearchIcon />
      </IconButton>

      <div
        className={
          "flex absolute items-center w-full left-0 top-0 bg-white px-6 z-50 " +
          (toggle ? "show" : "hidden")
        }
        style={{ height: "64px", zIndex: "5000" }}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
        <div className="flex-grow px-2">
          <input
            className="w-full outline-none focus:shadow-outline focus:bg-blue-100"
            placeholder="Search"
          ></input>
        </div>
        <div className="mr-2">
          <IconButton onClick={() => setToggle(!toggle)}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
