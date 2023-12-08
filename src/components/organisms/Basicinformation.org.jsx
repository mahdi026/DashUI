import React from "react";
import BasicinformationTitle from "../molecules/Basicinformation.Title.mol";
import BasicinformationFullname from "../molecules/basicinformation.Fullname.mol";
import BasicinformationEmail from "../molecules/Basicinformation.Biginput.mol";
import BasicinformationLocation from "../molecules/Basicinformation.Location.mol";
import IconQuestion from "../atoms/IconQuestion.atom";
import ButtonSavechange from "../atoms/Button.Savechange";

function Basicinformation() {
  return (
    <div className="mt-[2.69rem]">
      <BasicinformationTitle />
      <div className="mt-[1.5rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky  text-gray-900 font-medium">
          Full name
        </span>
        <BasicinformationFullname />
      </div>
      <div className="mt-[1rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium">
          Email
        </span>
        <BasicinformationEmail place="Email" />
      </div>
      <div className="mt-[1rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium ">
          phone
        </span>
        <BasicinformationEmail place="Phone" />
      </div>
      <div className="flex flex-col items-end gap-[0.88rem]">
        <div className="mt-[1rem] flex items-center gap-[10rem] ">
          <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium ">
            Location
          </span>
          <BasicinformationLocation />
        </div>
        <div className="flex flex-col justify-end gap-[0.88rem]">
          <BasicinformationEmail place="City" />
          <BasicinformationEmail place="State" />
        </div>
      </div>
      <div className="mt-[1.5rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium ">
          Address line 1
        </span>
        <BasicinformationEmail place="placeholder" />
      </div>
      <div className="mt-[1rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium ">
          Address line 2{" "}
          <span className="text-gray-500 font-normal">(Optional)</span>
        </span>
        <BasicinformationEmail place="placeholder" />
      </div>
      <div className="mt-[1rem] flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium ">
            Zip code
          </span>
          <IconQuestion />
        </div>
        <BasicinformationEmail place="placeholder" />
      </div>
      <div className="ml-[13.45rem] mt-[1.5rem] ">
        <ButtonSavechange />
      </div>
    </div>
  );
}

export default Basicinformation;
