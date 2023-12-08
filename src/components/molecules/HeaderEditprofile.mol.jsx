import React from "react";
import ButtonMyprofile from "../atoms/Button.Myprofile";

function HeaderEditprofile() {
  return (
    <div className="w-[64.5rem]  ml-[18rem] mt-[1.5rem]  flex gap-[50.48rem] border-b-[1px] border-gray-400  pb-[1.12rem]">
      <span className="font-bold dark:text-textdarky text-[24px] dark:text-bg-red-400">
        Account
      </span>
      <ButtonMyprofile />
    </div>
  );
}

export default HeaderEditprofile;
