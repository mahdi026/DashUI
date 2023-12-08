import React from "react";
import AvatarProfile from "../atoms/AvatarProfile.atom";
import ButtonChange from "../atoms/ButtonChange.atom";
import ButtonRemove from "../atoms/ButtonRemove.atom";

function GeneralsettingsAvatar() {
  return (
    <div className="flex gap-[1.25rem] items-center">
      <AvatarProfile />
      <div className="flex gap-[0.31rem]">
        <ButtonChange />
        <ButtonRemove />
      </div>
    </div>
  );
}

export default GeneralsettingsAvatar;
