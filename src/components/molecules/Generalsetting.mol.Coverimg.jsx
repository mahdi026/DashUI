import React from "react";

function GeneralsettingCoverimg() {
  return (
    <div>
      <div class="max-w-xl  ">
        <label class="flex justify-center w-[35.2rem] h-[6.18rem] px-4 py-6 transition  bg-white border-[1px] border-gray-300 dark:bg-transparent dark:border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span class="flex flex-col gap-1 items-center space-x-2">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00159 4.5C6.00159 5.32843 5.33001 6 4.50159 6C3.67316 6 3.00159 5.32843 3.00159 4.5C3.00159 3.67157 3.67316 3 4.50159 3C5.33001 3 6.00159 3.67157 6.00159 4.5Z"
                fill="#919EAB"
              />
              <path
                d="M2.00159 0C0.897017 0 0.00158691 0.89543 0.00158691 2V12C0.00158691 13.1046 0.897017 14 2.00159 14H14.0016C15.1062 14 16.0016 13.1046 16.0016 12V2C16.0016 0.895431 15.1062 0 14.0016 0H2.00159ZM14.0016 1C14.5539 1 15.0016 1.44772 15.0016 2V8.50001L11.2252 6.5528C11.0327 6.45655 10.8002 6.49428 10.648 6.64646L6.93788 10.3566L4.27894 8.58399C4.08063 8.45178 3.81657 8.47793 3.64803 8.64646L1.00159 11V2C1.00159 1.44772 1.4493 1 2.00159 1H14.0016Z"
                fill="#919EAB"
              />
            </svg>

            <span class="text-[12px] dark:text-textdarky font-medium dark:text- text-gray-600">
              Drop files here. or
              <span class="text-[#624bff] ">browse file</span>
            </span>
          </span>

          <input type="file" name="file_upload" class="hidden" />
        </label>
      </div>
    </div>
  );
}

export default GeneralsettingCoverimg;
