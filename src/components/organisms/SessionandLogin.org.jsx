import React from "react";
import SessionandLoginTitle from "../molecules/SessionandLogin.Title.mol";
import DashpropsEmail from "../atoms/DashpropsEmail.atom";
import InfoTitle from "../atoms/InfoTitle.atom";
import SessionandLoginNavbar from "../molecules/SessionandLogin.Navbar.mol";
import SessionandLoginBrowser from "../molecules/SessionandLogin.Browser.mol";
import chrome from "../../assets/images/chrome-7.png";
import brave from "../../assets/images/brave.png";
import firefox from "../../assets/images/firefox-5.png";

function SessionandLogin() {
  return (
    <div
      className="bg-white  dark:bg-bgsection w-[50.25rem] h-[43.8rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
  "
    >
      <div className="border-b-[0.1rem] border-gray-200 pb-[1.13rem]">
        <SessionandLoginTitle />
        <DashpropsEmail />
      </div>
      <InfoTitle info="Active Sessions" />
      <SessionandLoginNavbar />
      <SessionandLoginBrowser
        icon={chrome}
        browser="Chrome on iMacPro"
        data="2021-12-02 07:50:28"
        device="iMac Pro"
        location="INDIA"
        ip="123.45.678.321"
      />
      <InfoTitle info="Login History" />
      <SessionandLoginNavbar />
      <SessionandLoginBrowser
        icon={chrome}
        browser="Chrome on iPhone"
        data="2021-12-02 07:50:28"
        device="iPhone X"
        location="INDIA"
        ip="123.45.678.321"
      />
      <SessionandLoginBrowser
        icon={chrome}
        browser="Chrome on iPhone"
        data="2021-12-02 07:50:28"
        device="iPhone X"
        location="INDIA"
        ip="123.45.678.321"
      />

      <SessionandLoginBrowser
        icon={firefox}
        browser="Mozila on iMac"
        data="2021-12-02 07:50:28"
        device="iMac Pro"
        location="INDIA"
        ip="123.45.678.321"
      />
      <SessionandLoginBrowser
        icon={brave}
        browser="Brave on iMacPro"
        data="2021-12-02 07:50:28"
        device="iMac Pro"
        location="INDIA"
        ip="123.45.678.321"
      />
      <SessionandLoginBrowser
        icon={chrome}
        browser="Chrome on iMacPro"
        data="2021-12-02 07:50:28"
        device="iMac Pro"
        location="INDIA"
        ip="123.45.678.321"
      />
      <SessionandLoginBrowser
        icon={chrome}
        browser="Chrome on iMacPro"
        data="2021-12-02 07:50:28"
        device="iMac Pro"
        location="INDIA"
        ip="123.45.678.321"
      />
      <SessionandLoginBrowser
        icon={chrome}
        browser="Chrome on iMacPro"
        data="2021-12-02 07:50:28"
        device="iMac Pro"
        location="INDIA"
        ip="123.45.678.321"
      />
    </div>
  );
}

export default SessionandLogin;
