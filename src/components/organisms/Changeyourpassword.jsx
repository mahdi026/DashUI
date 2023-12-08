import React from "react";
import ChangeyourpaaswordTitle from "../molecules/Changeyourpaasword.Title.mol";
import DashpropsEmail from "../atoms/DashpropsEmail.atom";
import BasicinformationEmail from "../molecules/Basicinformation.Biginput.mol";
import PasswordListandItem from "../molecules/Changepasswordinfo.mol";
import PasswordList from "../molecules/ChangePasswordList.mol";
import ButtonSavechange from "../atoms/Button.Savechange";

function Changeyourpassword() {
  return (
    <div
      className="bg-white  dark:bg-bgsection w-[50.25rem] h-[32rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
  "
    >
      <div className="border-b-[0.1rem] border-gray-200 pb-[1.13rem]">
        <ChangeyourpaaswordTitle />
        <DashpropsEmail />
      </div>
      <div className="mt-[1.38rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium ">
          Current password
        </span>
        <BasicinformationEmail place="Enter Current password" />
      </div>
      <div className="mt-[0.94rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium ">
          New password
        </span>
        <BasicinformationEmail place="Enter New password" />
      </div>
      <div className="mt-[0.94rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium ">
          Confirm new password
        </span>
        <BasicinformationEmail place="Confirm new password" />
      </div>
      <div className="mt-[1.13rem] ml-[13.7rem]">
        <PasswordListandItem />
      </div>
      <div className="mt-[0.81rem] ml-[14.7rem]">
        <PasswordList />
      </div>

      <div className="mt-[1.81rem] ml-[13.7rem]">
        <ButtonSavechange />
      </div>
    </div>
  );
}

export default Changeyourpassword;
