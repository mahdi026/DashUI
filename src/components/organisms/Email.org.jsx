import React from "react";
import EmailTitle from "../molecules/Email.Title.mol";
import DashpropsEmail from "../atoms/DashpropsEmail.atom";
import BasicinformationEmail from "../molecules/Basicinformation.Biginput.mol";
import ButtonSavechange from "../atoms/Button.Savechange";

function Email() {
  return (
    <div
      className="bg-white  dark:bg-bgsection w-[50.25rem] h-[14.6rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
  "
    >
      <div className="border-b-[0.1rem] border-gray-200 pb-[1.13rem]">
        <EmailTitle />
        <DashpropsEmail />
      </div>
      <div className="mt-[1rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium">
          New email address
        </span>
        <BasicinformationEmail place="Enter your email address " />
      </div>
      <div className="ml-[13.45rem] mt-[0.87rem] ">
        <ButtonSavechange />
      </div>
    </div>
  );
}

export default Email;
