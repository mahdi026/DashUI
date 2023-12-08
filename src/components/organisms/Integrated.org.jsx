import React from "react";
import IntegratedTitle from "../molecules/Integrated.Title.mol";
import Integratedbody from "../molecules/Integrated.body.mol";
import Iconfacebook from "../atoms/Iconfacebook.atom";
import Icongoogle from "../atoms/Icongoogle.atom";
import Iconlinkdin from "../atoms/Iconlinkdin.atom";
import Icontwitter from "../atoms/Icontwitter.atom";
import Iconslack from "../atoms/Iconslack.atom.mol";
import Icongithup from "../atoms/Icongithup.atom";
import Buttonconnect from "../atoms/Button.connect.atom";
import IntegratedSignout from "../molecules/Integrated.Signout.mol";

function Integrated() {
  return (
    <div
      className="bg-white  dark:bg-bgsection w-[50.25rem] h-[49rem] ml-[32.45rem] mt-[2rem] mb-[3rem] rounded-[0.5rem] p-[1.5rem] shadow-md
  "
    >
      <IntegratedTitle />
      <div className="border-b-[0.1rem] border-gray-200 pb-[1.94rem]">
        <Integratedbody
          logo={<Iconfacebook />}
          titlelogo="facebook"
          infologo="Login with Facebook"
          connect={<Buttonconnect />}
        />
      </div>
      <div className="border-b-[0.1rem] border-gray-200 pb-[1.94rem]">
        <Integratedbody
          logo={<Icongoogle />}
          titlelogo="Google"
          infologo="Login with Google"
          connect={<IntegratedSignout />}
        />
      </div>
      <div className="border-b-[0.1rem] border-gray-200 pb-[1.94rem]">
        <Integratedbody
          logo={<Icongithup />}
          titlelogo="Github"
          infologo="Login with Github"
          connect={<Buttonconnect />}
        />
      </div>

      <div className="border-b-[0.1rem] border-gray-200 pb-[1.94rem]">
        <Integratedbody
          logo={<Iconslack />}
          titlelogo="Slack"
          infologo="Login with Slack"
          connect={<Buttonconnect />}
        />
      </div>

      <div className="border-b-[0.1rem] border-gray-200 pb-[1.94rem]">
        <Integratedbody
          logo={<Icontwitter />}
          titlelogo="Twitter"
          infologo="Login with Twitter"
          connect={<Buttonconnect />}
        />
      </div>
      <div>
        <Integratedbody
          logo={<Iconlinkdin />}
          titlelogo="LinkedIn"
          infologo="Login with LinkedIn"
          connect={<Buttonconnect />}
        />
      </div>
    </div>
  );
}

export default Integrated;
