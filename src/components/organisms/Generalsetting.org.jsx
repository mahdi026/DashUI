import React from "react";
import GeneralsettingsTitle from "../molecules/GeneralsettingsTitle.mol";
import GeneralsettingsAvatar from "../molecules/GeneralsettingsAvatar.mol";
import GeneralsettingCoverimg from "../molecules/Generalsetting.mol.Coverimg";
import ButtonChange from "../atoms/ButtonChange.atom";
import Basicinformation from "./Basicinformation.org";

function Generalsetting() {
  return (
    <div
      className="bg-white dark:bg-bgsection w-[50.25rem] h-[67.6rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
  "
    >
      <GeneralsettingsTitle />
      <div className="flex items-center mt-[1.25rem] gap-[9.2rem]">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium">
          Avatar
        </span>
        <GeneralsettingsAvatar />
      </div>

      <div className="flex items-start mt-[1.94rem] justify-between">
        <p className="text-[15px] dark:text-textdarky text-gray-900 font-medium">
          Cover photo
        </p>
        <GeneralsettingCoverimg />
      </div>
      <div className="ml-[12rem] mt-[0.56rem]">
        <ButtonChange />
      </div>

      <div>
        <Basicinformation />
      </div>
    </div>
  );
}

export default Generalsetting;
