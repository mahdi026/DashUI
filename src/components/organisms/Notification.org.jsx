import React from "react";
import NotificationTitle from "../molecules/Notification.Title.mol";
import Notificationboxwarning from "../molecules/Notification.Boxwarning.mol";
import NotificationNavbar from "../molecules/Notification.Navbar.mol";
import NotificationContent from "../molecules/NotificationContent.mol";
import Box from "../atoms/Checkbox.atom";
import IconRectangle from "../atoms/IconRectangle.atom";
import NotificationTitleSelectOption from "../molecules/NotificationTitleSelectOption.mol";
import NotificataionSelectOptionTime from "../molecules/NotificataionSelectOptionTime.mol";
import NotificataionCelectOptionAlways from "../molecules/NotificataionselectOptionAlways.mol";
import NotificataionSelectOptionEveryday from "../molecules/NotificataionSelectOptionEveryday.mol";
import ButtonSavechange from "../atoms/Button.Savechange";

function Notification() {
  return (
    <div
      className="bg-white  dark:bg-bgsection w-[50.25rem] h-[70rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
  "
    >
      <NotificationTitle />
      <Notificationboxwarning />

      <NotificationNavbar />
      <div className="mt-5">
        <NotificationContent
          text="When a Files is shared with a team"
          icon1={<Box />}
          icon2={<Box />}
          icon3={<Box />}
        />
        <NotificationContent
          text="When a Files is shared with a team"
          icon1={<Box />}
          icon2={<IconRectangle />}
          icon3={<Box />}
          style2={"mr-[2rem] "}
        />
        <NotificationContent
          text="When someone requests access to my design"
          icon1={<Box />}
          icon2={<Box />}
          icon3={<Box />}
        />
        <NotificationContent
          text="When someone comments in threads I’m following"
          icon1={<Box />}
          icon2={<Box />}
          icon3={<Box />}
        />
        <NotificationContent
          text="When someone @mentions me in any comments"
          icon1={<Box />}
          icon2={<IconRectangle />}
          icon3={<IconRectangle />}
          style2={"mr-[2rem]"}
        />
      </div>
      <NotificationNavbar />

      <div className="mt-5">
        <NotificationContent
          text="When someone adds me to a project"
          icon1={<Box />}
          icon2={<IconRectangle />}
          icon3={<Box />}
          style2={"mr-[2rem]"}
        />
      </div>
      <NotificationNavbar />

      <div className="mt-5 border-b-[0.1rem] border-gray-200 pb-[1.13rem]">
        <NotificationContent
          text="When a Files is shared with a team"
          icon1={<Box />}
          icon2={<Box />}
          icon3={<Box />}
        />
        <NotificationContent
          text="When someone requests access to my team"
          icon1={<Box />}
          icon2={<IconRectangle />}
          icon3={<Box />}
          style2={"mr-[2rem]"}
        />
        <NotificationContent
          text="When a Files is shared with a team"
          icon1={<Box />}
          icon2={<Box />}
          icon3={<Box />}
        />
      </div>
      <div className="mt-[1.69rem]">
        <NotificationTitleSelectOption />
      </div>

      <div className="flex  gap-[0.81rem] mt-[1.06rem]">
        <NotificataionCelectOptionAlways />
        <NotificataionSelectOptionEveryday />
        <NotificataionSelectOptionTime />
      </div>
      <div className="mt-[1.25rem]">
        <ButtonSavechange />
      </div>
    </div>
  );
}

export default Notification;
