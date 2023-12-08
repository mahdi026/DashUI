import React from "react";
import DashpropsEmail from "../atoms/DashpropsEmail.atom";

function GeneralsettingsTitle() {
  return (
    <div className="border-b-[0.1rem] border-gray-200 pb-[1.13rem]">
      <p className="text-[20px] dark:text-textdarky text-gray-900 font-bold">
        General Settings
      </p>

      <DashpropsEmail />
    </div>
  );
}

export default GeneralsettingsTitle;
