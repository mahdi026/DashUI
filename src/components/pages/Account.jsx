import React from "react";
import Preferences from "../organisms/preferences.org";
import Generalsetting from "../organisms/Generalsetting.org";
import HeaderEditprofile from "../molecules/HeaderEditprofile.mol";
import Email from "../organisms/Email.org";
import Changeyourpassword from "../organisms/Changeyourpassword";
import TwoStepVerification from "../organisms/Two-StepVerification.org";
import SessionandLogin from "../organisms/SessionandLogin.org";
import Notification from "../organisms/Notification.org";
import Integrated from "../organisms/Integrated.org";
import Socialaccounts from "../organisms/Socialaccounts.org";
import Dangerzone from "../organisms/Dangerzone.org";

function Account() {
  return (
    /* taggir */
    <div className="pb-12">
      <HeaderEditprofile />
      <Generalsetting />
      <Email />
      <Changeyourpassword />
      <Preferences />
      <TwoStepVerification />
      <SessionandLogin />
      <Notification />
      <Integrated />
      <Socialaccounts />
      <Dangerzone />
    </div>
  );
}

export default Account;
