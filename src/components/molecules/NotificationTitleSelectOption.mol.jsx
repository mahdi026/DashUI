import React from "react";

function NotificationTitleSelectOption() {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-900 dark:text-textdarky text-[16px] font-bold">
        When should we send you notifications?
      </span>
      <div className="flex gap-[3.63rem] w-full  max-w-[18.4rem]">
        <span className="text-gray-900 dark:text-textdarky text-[16px] font-bold">
          Daily Digest
        </span>
        <span className="text-gray-900 dark:text-textdarky text-[16px] font-bold">
          Time
        </span>
      </div>
    </div>
  );
}

export default NotificationTitleSelectOption;
