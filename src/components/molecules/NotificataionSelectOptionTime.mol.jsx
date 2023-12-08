import { Select, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";

function NotificataionSelectOptionTime() {
  const [course, setCourse] = useState(1);
  const updateSelectval = (e) => {
    setCourse(e.target.value);
  };
  return (
    <div>
      <Select
        className="w-[8.68rem] h-[2.6rem] dark:boreder-[#624bff] dark:bg-bgbody "
        value={course}
        displayEmpty
        onChange={updateSelectval}
      >
        <MenuItem className="" value={1}>
          2PM
        </MenuItem>
        <MenuItem value={2}>3PM</MenuItem>
        <MenuItem value={3}>4PM</MenuItem>
      </Select>
      <div></div>
    </div>
  );
}

export default NotificataionSelectOptionTime;
