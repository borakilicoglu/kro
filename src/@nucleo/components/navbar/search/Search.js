import React, { useState, useRef, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export default function Search(props) {
  // Toggle Search
  const [toggle, setToggle] = useState(false);
  const searchInput = useRef();
  useEffect(() => searchInput.current && searchInput.current.focus());
  return (
    <div className="mr-2">
      <IconButton onClick={() => setToggle(!toggle)}>
        <SearchIcon style={{ color: "#64748b" }} />
      </IconButton>

      <div
        className={
          "flex absolute items-center w-full left-0 top-0 bg-white px-6 z-50 " +
          (toggle ? "show" : "hidden")
        }
        style={{ height: "64px", zIndex: "5000" }}
      >
        <IconButton>
          <SearchIcon style={{ color: "#96a6ba" }} />
        </IconButton>
        <div className="flex-grow px-2">
          <input
            style={{ height: "64px" }}
            className="w-full outline-none"
            placeholder="Search"
            ref={(searchInput) => searchInput && searchInput.focus()}
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
