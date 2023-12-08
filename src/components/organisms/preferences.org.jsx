import React from "react";
import PreferencesTitle from "../molecules/Preferences.Title";
import SelectOptionLanguage from "../molecules/Preferences.SelectOptionLanguage";
import Timezone from "../molecules/Preferences.SelectOptionTimezone";
import Dateformat from "../molecules/Preferences.SelectOptionDateformat";
import PreferencesButton from "../molecules/Preferences.Button";
import Preferencescheckbox from "../molecules/Preferences.checkbox";
import ButtonSavechange from "../atoms/Button.Savechange";

function preferences() {
  return (
    <div
      className="bg-white dark:bg-bgsection w-[50.25rem] h-[37.825rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
    "
    >
      <PreferencesTitle />
      <div className="mt-[1.5rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium">
          Language
        </span>
        <SelectOptionLanguage />
      </div>
      <div className="mt-[1.5rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky  text-gray-900 font-medium">
          Time Zone
        </span>
        <Timezone />
      </div>
      <div className="mt-[1.5rem] flex items-center justify-between">
        <span className="text-[15px] dark:text-textdarky text-gray-900 font-medium">
          Date Format
        </span>
        <Dateformat />
      </div>

      <div className="flex items-center mt-[1.94rem] gap-[10.1rem]">
        <span className=" text-[15px] dark:text-textdarky text-gray-900 font-medium">
          Defult
        </span>
        <PreferencesButton />
      </div>
      <div className="flex items-start mt-[1rem] gap-[2.9rem]">
        <span className="mt-2 dark:text-textdarky  text-gray-900 font-medium">
          Choose option default
        </span>
        <Preferencescheckbox />
      </div>
      <div className="ml-[13.45rem] mt-[1.5rem] ">
        <ButtonSavechange />
      </div>
    </div>
  );
}

export default preferences;
