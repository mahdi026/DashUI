import React from "react";

function SessionandLoginNavbar() {
  return (
    <div
      className="w-[47.25rem] h-[2.625rem] dark:bg-bgbody bg-gray-100 rounded-[0.25rem] flex  gap-[9.112rem] pl-[1rem]  mt-[1.6rem] items-center content-center;
    "
    >
      <ul className="flex justify-between gap-[8.25rem]">
        <li className="text-gray-600 dark:text-textdarky text-xs font-bold">
          BROWSER
        </li>
        <li className="text-gray-600 dark:text-textdarky text-xs font-bold">
          DATE/TIME
        </li>
      </ul>
      <div>
        <ul className="flex justify-between gap-[2.56rem]">
          <li className="text-gray-600 dark:text-textdarky text-xs font-bold">
            DEVICE
          </li>
          <li className="text-gray-600 dark:text-textdarky text-xs font-bold">
            LOCATION
          </li>
          <li className="text-gray-600 dark:text-textdarky text-xs font-bold">
            IP ADDRESS
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SessionandLoginNavbar;
// pt-[0.88rem]
