import React from "react";
import classNames from "classnames";
import { IRenderLabel } from "../src";

const MainLabel: IRenderLabel = ({
  activeIndex,
  label,
  index,
  array: verticalSteps,
}) => (
  <li
    className={classNames(
      "flex w-full cursor-pointer",
      {
        "text-violet-500": index <= activeIndex,
      },
      index !== verticalSteps.length - 1
        ? {
            "after:h-[2px] after:w-full after:mt-[9px] after:ml-[20px] after:mr-[-20px]":
              true,
            "after:bg-violet-500": index < activeIndex,
            "after:bg-gray-300": index >= activeIndex,
          }
        : null,
    )}
  >
    <div className="absolute flex flex-col items-center">
      <div
        className={classNames("w-5 h-5 rounded-full", {
          "bg-violet-500": index <= activeIndex,
          "bg-gray-300": index > activeIndex,
        })}
      />

      {label}
    </div>
  </li>
);

export { MainLabel };
