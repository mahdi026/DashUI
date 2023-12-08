import React from "react";
import Iconmassege from "../atoms/Icon.massege.atom";
import IconVector from "../atoms/IconVector.atom";
import IconPhone from "../atoms/IconPhone.atom";

function NotificationNavbar() {
  return (
    <div
      className="w-[47.25rem] h-[2.625rem] dark:bg-bgbody dark:border-[1px] dark:border-org bg-gray-100 rounded-[0.25rem] flex  gap-[9.112rem] pl-[1rem]  mt-[1.6rem] justify-between items-center content-center;
  "
    >
      <span className="text-[12px] text-gray-900 font-bold dark:text-textdarky">
        Activity & Conversation
      </span>
      <div className="flex gap-16 pr-[4.31rem]">
        <IconPhone />
        <IconVector />
        <Iconmassege />
      </div>
    </div>
  );
}

export default NotificationNavbar;
