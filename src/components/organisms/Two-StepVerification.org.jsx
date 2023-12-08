import React from "react";
import TwoStepVerificationTitle from "../molecules/TwoStepVerification.Title.mol";
import TwoStepVerificationAddPhoneNumber from "../molecules/TwoStepVerification.AddPhoneNumber.mol";
import TwoStepVerificationAddPhoneSelectbox from "../molecules/TwoStepVerification.AddPhoneSelectbox.mol";
import TwoStepVerificationAddPhoneInput from "../molecules/TwoStepVerification.AddPhoneInput.mol";
import ButtonNext from "../atoms/ButtonNext.atom";
import Stepverification from "../molecules/TwoStepVerification.2stepverification.mol";
import StepverificationInput from "../molecules/TwoStepVerification.2stepverification.Input.mol";
import TwoStepVerificationCheckbox from "../molecules/TwoStepVerification.2stepverification.Checkbox.mol";
import ButtonVerify from "../atoms/Button.Verify.atom";
import ButtonCancel from "../atoms/Button.Cancel.atom";
import TextWarning from "../atoms/TextWarning.atom";

function TwoStepVerification() {
  return (
    <div
      className="bg-white dark:bg-bgsection w-[50.25rem] h-[36.8rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
    "
    >
      <TwoStepVerificationTitle />
      <TwoStepVerificationAddPhoneNumber />
      <div className="flex justify-between mt-[1.19rem]">
        <TwoStepVerificationAddPhoneSelectbox />
        <TwoStepVerificationAddPhoneInput />
      </div>
      <div className="mt-[1.5rem] border-b-[0.1rem] border-gray-200 pb-[2rem] ">
        <ButtonNext />
      </div>
      <Stepverification />

      <div className="flex gap-[0.9rem] mt-[1.19rem]">
        <StepverificationInput />
        <StepverificationInput />
        <StepverificationInput />
        <StepverificationInput />
        <StepverificationInput />
        <StepverificationInput />
      </div>

      <div className="flex items-center ">
        <TwoStepVerificationCheckbox />
        <span className="text-gray-600 dark:text-textdarky font-normal -ml-5 ">
          Remember me for 30 days
        </span>
      </div>

      <div className="flex gap-[0.31rem] mt-[0.75rem]">
        <ButtonVerify />
        <ButtonCancel />
      </div>
      <div className="mt-[1.13rem]">
        <TextWarning />
      </div>
    </div>
  );
}

export default TwoStepVerification;
