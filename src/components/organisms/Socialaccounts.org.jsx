import React from "react";
import SocialaccountsTitle from "../molecules/SocialaccountsTitle.mol";
import SocialaccountsInputs from "../molecules/SocialaccountsInputs.mol";
import Buttonsavesocial from "../atoms/Button.savesocial.atom";

function Socialaccounts() {
  return (
    <div
      className="bg-white  dark:bg-bgsection w-[50.25rem] h-[33.5rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
  "
    >
      <SocialaccountsTitle />

      <SocialaccountsInputs
        name="Twitter"
        place="Add Twitter Name"
        style="flex justify-between mt-[2.06rem] "
      />
      <SocialaccountsInputs
        name="Facebook"
        place="Add Facebook Name"
        style="flex justify-between mt-[1rem] "
      />
      <SocialaccountsInputs
        name="Instagram"
        place="Add Instagram Name"
        style="flex justify-between mt-[1rem] "
      />
      <SocialaccountsInputs
        name="Github"
        place="Add Github Name"
        style="flex justify-between mt-[1rem] "
      />
      <SocialaccountsInputs
        name="Youtube"
        place="Add Youtube Name"
        style="flex justify-between mt-[1rem] "
      />
      <SocialaccountsInputs
        name="Dribbble"
        place="Add Dribbble Name"
        style="flex justify-between mt-[1rem] "
      />

      <div className="text-end w-full max-w-[45rem] mt-4">
        {" "}
        <Buttonsavesocial />
      </div>
    </div>
  );
}

export default Socialaccounts;
