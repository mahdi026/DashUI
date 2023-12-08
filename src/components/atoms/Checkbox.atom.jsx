import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Box() {
  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox color="secondary" />} />
      </FormGroup>{" "}
    </div>
  );
}

export default Box;
