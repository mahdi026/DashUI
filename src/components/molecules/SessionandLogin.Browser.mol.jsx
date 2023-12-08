import React from "react";

function SessionandLoginBrowser(props) {
  return (
    <div className="flex  mt-[1.12rem] ml-4">
      <div className="flex gap-[0.5rem] items-center w-full max-w-[11.9rem]">
        <img className="w-4 h-4" src={props.icon} alt="coming" />
        <span className="text-gray-900 dark:text-textdarky">
          {props.browser}
        </span>
      </div>

      <span className="text-[15px] text-gray-900 dark:text-textdarky">
        {props.data}
      </span>

      <div>
        <span className="text-[15px] text-gray-900 dark:text-textdarky ml-[4.6rem] ">
          {props.device}
        </span>
        <span className="text-[15px] text-gray-900 dark:text-textdarky ml-[1.55rem] w-full max-w-[2.3rem] inline-block">
          {props.location}
        </span>
      </div>

      <span className="text-[15px] ml-[3.7rem] text-gray-900 dark:text-textdarky ">
        {props.ip}
      </span>
    </div>
  );
}

export default SessionandLoginBrowser;
