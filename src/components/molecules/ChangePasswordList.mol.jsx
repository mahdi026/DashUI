import React from "react";

function PasswordList() {
  return (
    <div>
      <ul className="list-disc">
        <li className="text-[12px] dark:text-textdarky font-medium text-gray-600">
          Minimum 8 characters long - the more, the better
        </li>
        <li className="text-[12px] dark:text-textdarky font-medium text-gray-600">
          At least one lowercase character
        </li>
        <li className="text-[12px] dark:text-textdarky font-medium text-gray-600">
          At least one uppercase character
        </li>
        <li className="text-[12px] dark:text-textdarky font-medium text-gray-600">
          At least one number, symbol, or whitespace character
        </li>
      </ul>
    </div>
  );
}

export default PasswordList;
