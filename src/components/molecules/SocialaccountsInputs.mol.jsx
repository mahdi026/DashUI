import React from "react";

function SocialaccountsInputs(props) {
  return (
    <div className={props.style}>
      <span className="text-gray-800 text-[14px] font-normal dark:text-textdarky">
        {props.name}
      </span>
      <input
        placeholder={props.place}
        className=" border-[1.4px] dark:bg-bgbody dark:border-transparent dark:focus:border-org dark:text-textdarky border-gray-200 w-[33.75rem] h-[2.625rem] rounded-md  text-gray-700  py-2 px-4 leading-tight focus:outline-none focus:border-[#624bff] "
        type="text"
      />
    </div>
  );
}

export default SocialaccountsInputs;
