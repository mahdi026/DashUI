import { Select, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";
function BasicinformationLocation() {
  const [course, setCourse] = useState(1);
  const updateSelectval = (e) => {
    setCourse(e.target.value);
  };
  return (
    <div>
      <Select
        className="w-[33.7rem] h-[2.6rem] dark:bg-bgbody dark:border-none  border-[1.4px] border-gray-200  "
        value={course}
        displayEmpty
        onChange={updateSelectval}
      >
        <MenuItem value={1} disabled>
          Select Contry
        </MenuItem>
        <MenuItem value={2}>Tehran</MenuItem>
        <MenuItem value={3}>US</MenuItem>
        <MenuItem value={4}>KRJ</MenuItem>
      </Select>
    </div>
  );
}

export default BasicinformationLocation;
