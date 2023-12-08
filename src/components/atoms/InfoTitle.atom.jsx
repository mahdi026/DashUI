import React from "react";

function InfoTitle(props) {
  return (
    <div>
      <div>
        <p className="text-gray-900  dark:text-textdarky text-[16px] font-bold mt-[2.06rem]">
          {props.info}
        </p>
      </div>
    </div>
  );
}

export default InfoTitle;
