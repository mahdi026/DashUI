// import React from "react";

// function PreferencesButton() {
//   return (
//     <div className="mt-8">
//       <form action="">
//         <input className="accent-[rgb(98,75,255)]" type="radio" id="on" />
//         <label className="ml-[0.875rem] " htmlFor="on" name="on">
//           On
//         </label>

//         <input className="accent-[rgb(98,75,255)]" type="radio" id="off" />
//         <label className="ml-[0.875rem] " htmlFor="off" name="off">
//           Off
//         </label>
//       </form>
//     </div>
//   );
// }

// export default PreferencesButton;

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function PreferencesButton() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="off"
        name="row-radio-buttons-group"
      >
        <div className="flex gap-5">
          <div className="flex items-center">
            {" "}
            <FormControlLabel
              value="on"
              control={<Radio color="secondary" />}
            />
            <span className="-ml-4 text-gray-900 dark:text-textdarky">on</span>
          </div>

          <div>
            {" "}
            <FormControlLabel
              value="off"
              control={<Radio color="secondary" />}
            />
            <span className="-ml-4 dark:text-textdarky">off</span>
          </div>
        </div>
      </RadioGroup>
    </FormControl>
  );
}
