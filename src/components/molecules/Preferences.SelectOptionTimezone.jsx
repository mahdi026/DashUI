import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

function Timezone() {
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
          <MenuItem className="" value={1}>
            GMT +5.30
          </MenuItem>
          <MenuItem value={2}>GMT +5.30</MenuItem>
          <MenuItem value={3}>GMT +5.30</MenuItem>
          <MenuItem value={4}>GMT +5.30</MenuItem>
        </Select>
      </div>
    </div>
  );
}

export default Timezone;
