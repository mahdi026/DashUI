import React from "react";
import DangerzoneTitle from "../molecules/DangerzoneTitle.mol";
import ButtonDeleteAc from "../atoms/Button.DeleteAc.atom";
import DangerZoneFooter from "../atoms/DangerZoneFooter.atom";

function Dangerzone() {
  return (
    <div
      className="bg-white  dark:bg-bgsection w-[50.25rem] h-[18.5rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
  "
    >
      <DangerzoneTitle />
      <div className="mt-6 max-w-[41rem]">
        <span className="text-gray-600 dark:text-textdarky font-medium text-[14px]">
          Delete any and all content you have, such as articles, comments, your
          reading list or chat messages. Allow your username to become available
          to anyone.
        </span>
      </div>
      <div className="mt-[1.25rem]">
        <ButtonDeleteAc />
      </div>
      <div className="mt-[1.25rem]">
        <DangerZoneFooter />
      </div>
    </div>
  );
}

export default Dangerzone;
