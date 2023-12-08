import { Select, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";

function NotificataionSelectOptionEveryday() {
  const [course, setCourse] = useState(1);
  const updateSelectval = (e) => {
    setCourse(e.target.value);
  };
  return (
    <div>
      <Select
        className="w-[8.68rem] h-[2.6rem] dark:bg-bgbody"
        value={course}
        displayEmpty
        onChange={updateSelectval}
      >
        <MenuItem className="" value={1}>
          Everyday
        </MenuItem>
        <MenuItem value={2}>oneday</MenuItem>
      </Select>
    </div>
  );
}

export default NotificataionSelectOptionEveryday;
