import { Select, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";

function NotificataionCelectOptionAlways() {
  const [course, setCourse] = useState(1);
  const updateSelectval = (e) => {
    setCourse(e.target.value);
  };
  return (
    <div>
      <Select
        className="w-[27.875rem] h-[2.6rem] dark:bg-bgbody"
        value={course}
        displayEmpty
        onChange={updateSelectval}
      >
        <MenuItem className="" value={1}>
          Always
        </MenuItem>
        <MenuItem value={2}>Never</MenuItem>
      </Select>
    </div>
  );
}

export default NotificataionCelectOptionAlways;
