import React from "react";
import classNames from "classnames";
import { IRenderLabel } from "../../src";
import "../../src/MultiStepper/stepper.css";

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
        "text-violet-500 relative": index <= activeIndex,
      },
      index !== verticalSteps.length - 1
        ? {
            "line after:h-[2px] after:w-full after:mt-[9px] after:ml-[20px] after:mr-[-20px]":
              true,
            "line--active": index < activeIndex,
            "after:bg-gray-300": index >= activeIndex,
          }
        : null,
    )}
  >
    <div className="absolute flex flex-col items-center">
      <div
        className={classNames("orb-top", {
          "orb-top--active before:bg-violet-500": index <= activeIndex,
          "bg-gray-300": index > activeIndex,
        })}
      />

      {label}
    </div>
  </li>
);

export { MainLabel };
