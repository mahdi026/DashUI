import { Select, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";

function TwoStepVerificationAddPhoneSelectbox() {
  const [course, setCourse] = useState(1);
  const updateSelectval = (e) => {
    setCourse(e.target.value);
  };
  return (
    <div>
      <Select
        className="w-[9.43rem] h-[2.6rem] dark:bg-bgbody "
        value={course}
        displayEmpty
        onChange={updateSelectval}
      >
        <MenuItem className="" value={1}>
          India
        </MenuItem>
        <MenuItem value={2}>US</MenuItem>
        <MenuItem value={3}>Iran</MenuItem>
        <MenuItem value={4}>Karj</MenuItem>
      </Select>
    </div>
  );
}

export default TwoStepVerificationAddPhoneSelectbox;
