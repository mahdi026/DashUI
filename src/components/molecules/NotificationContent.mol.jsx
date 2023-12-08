import React from "react";

function NotificationContent(props) {
  return (
    <div className="flex px-4 mt-[0.94rem] justify-between">
      <span className="w-full text-[14px] text-gray-600 font-medium dark:text-textdarky max-w-[26.3rem]">
        {props.text}
      </span>
      <div className="flex gap-8 w-full max-w-[14.2rem]  items-center ">
        <div className={props.style1}>{props.icon1}</div>
        <div className={props.style2}>{props.icon2}</div>
        <div className={props.style3}>{props.icon3}</div>
      </div>
    </div>
  );
}

export default NotificationContent;
