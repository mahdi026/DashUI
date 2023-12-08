import { Select, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";
function SelectOptionLanguage() {
  const [course, setCourse] = useState(1);
  const updateSelectval = (e) => {
    setCourse(e.target.value);
  };
  return (
    <div>
      <Select
        className="w-[33.7rem] h-[2.6rem] dark:bg-bgbody "
        value={course}
        displayEmpty
        onChange={updateSelectval}
      >
        <MenuItem className="" value={1}>
          English
        </MenuItem>
        <MenuItem value={2}>farsi</MenuItem>
        <MenuItem value={3}>spanish</MenuItem>
        <MenuItem value={4}>arbia</MenuItem>
      </Select>
    </div>
  );
}

export default SelectOptionLanguage;
