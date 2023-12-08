import React from "react";

function BasicinformationFullname() {
  return (
    <div className="flex gap-[1rem] mt-4">
      <input
        className=" border-[1.4px] dark:bg-bgbody dark:border-transparent dark:focus:border-[#624bff] border-gray-200 w-[16.43rem] h-[2.625rem] rounded-md  text-gray-700  py-2 px-4 leading-tight focus:outline-none focus:border-[#624bff] "
        type="text"
        placeholder="First name"
      />
      <input
        className=" border-[1.4px] dark:bg-bgbody dark:border-transparent dark:focus:border-[#624bff] border-gray-200 w-[16.43rem] h-[2.625rem] rounded-md  text-gray-700  py-2 px-4 leading-tight focus:outline-none focus:border-[#624bff] "
        type="text"
        placeholder="Last name"
      />
    </div>
  );
}

export default BasicinformationFullname;
