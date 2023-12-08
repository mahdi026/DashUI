import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Preferencescheckbox() {
  return (
    <div>
      <FormGroup className="text-gray-900 dark:text-textdarky">
        <FormControlLabel
          control={<Checkbox color="secondary" />}
          label="Tell me"
        />
        <FormControlLabel
          control={<Checkbox color="secondary" />}
          label="Open e-mail"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked color="secondary" />}
          label="Show default"
        />
      </FormGroup>
    </div>
  );
}

export default Preferencescheckbox;
