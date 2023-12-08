import React from "react";

function BasicinformationEmail(props) {
  return (
    <div>
      <input
        placeholder={props.place}
        className=" dark:bg-bgbody dark:border-transparent dark:focus:border-[#624bff]  border-[1.4px] border-gray-200 w-[33.75rem] h-[2.625rem] rounded-md  text-gray-700  py-2 px-4 leading-tight focus:outline-none focus:border-[#624bff] "
        type="text"
      />
    </div>
  );
}

export default BasicinformationEmail;
