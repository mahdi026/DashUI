import React from "react";
import Xlogo from "../atoms/X.logo.atom";

function Notificationboxwarning() {
  return (
    <div className="w-[46.47rem] h-[3.75rem] bg-[#ffecb5] flex justify-between items-center p-[1.12rem] border-[1px] border-[#ffecb5] rounded-lg mt-6">
      <span>
        To start using Slack for personal notifications, you should first
        connect Slack.
      </span>
      <button>
        <Xlogo />
      </button>
    </div>
  );
}

export default Notificationboxwarning;
