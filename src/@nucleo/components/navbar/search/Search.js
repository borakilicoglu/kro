import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export default function Search(props) {
  return (
    <div>
      <IconButton onClick={() => props.toggle()}>
        <SearchIcon />
      </IconButton>

      <div className="flex">
        <SearchIcon />
        <input></input>
        <CloseIcon />
      </div>
    </div>
  );
}
