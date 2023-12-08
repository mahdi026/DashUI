import React from "react";

function NotificationTitle() {
  return (
    <div>
      <div className="border-b-[0.1rem] border-gray-200 pb-[1.13rem]">
        <p className="text-[20px] dark:text-textdarky text-gray-900 font-bold">
          Notification for email, mobile & Slack
        </p>
        <p className=" text-[12px] dark:text-textdarky  text-gray-600 ">
          Select your preferences for the notification that are the most common
          for all users.
        </p>
      </div>
    </div>
  );
}

export default NotificationTitle;
