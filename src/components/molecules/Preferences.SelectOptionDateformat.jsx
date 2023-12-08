import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

function Dateformat() {
  const [course, setCourse] = useState(1);
  const updateSelectval = (e) => {
    setCourse(e.target.value);
  };
  return (
    <div>
      <div>
        <Select
          className="w-[33.7rem] h-[2.6rem] dark:bg-bgbody"
          value={course}
          displayEmpty
          onChange={updateSelectval}
        >
          <MenuItem className="dark:text-textdarky" value={1}>
            No prefernce
          </MenuItem>
          <MenuItem value={2}>date...</MenuItem>
          <MenuItem value={3}>date...</MenuItem>
          <MenuItem value={4}>date...</MenuItem>
        </Select>
      </div>
    </div>
  );
}

export default Dateformat;
