import React from "react";
import IconButton from "@material-ui/core/IconButton";
import BookmarksTwoToneIcon from "@material-ui/icons/BookmarksTwoTone";

export default function Shortcuts() {
  return (
    <div className="mr-2">
      <IconButton>
        <BookmarksTwoToneIcon style={{ color: "#64748b" }} />
      </IconButton>
    </div>
  );
}
