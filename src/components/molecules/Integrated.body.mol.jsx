import React from "react";
import Buttonconnect from "../atoms/Button.connect.atom";

function Integratedbody(props) {
  return (
    <div className="flex justify-between items-center mt-8">
      <div className="flex items-center gap-[1.56rem]">
        {props.logo}
        <div className="flex flex-col">
          <span className="text-gray-900 dark:text-gray-50 text-[20px] font-bold">
            {props.titlelogo}
          </span>
          <span className="text-gray-600 dark:text-textdarky text-[14px] font-medium">
            {props.infologo}
          </span>
        </div>
      </div>
      <div>{props.connect}</div>
    </div>
  );
}

export default Integratedbody;
