import React from "react";
import classNames from "classnames";
import { IRenderLabel } from "../../src";
import "../../src/MultiStepper/stepper.css";

const SubLabel: IRenderLabel = ({
  activeIndex,
  label,
  index,
  array: horizontalSteps,
}) => (
  <li
    className={classNames(
      "flex h-40 space-x-4 cursor-pointer items-center relative v_line",
      { "text-violet-500": index <= activeIndex },
      index !== horizontalSteps.length - 1
        ? {
            "before:h-full before:mt-40": true,

            "v_line--active": index < activeIndex,
            "before:bg-gray-300": index >= activeIndex,
          }
        : null,
    )}
  >
    <div
      className={classNames("w-3 h-3 rounded-full relative z-1 mr-3 orb", {
        "orb--active": index <= activeIndex,
        "bg-gray-300": index > activeIndex,
      })}
    />

    {label}
  </li>
);

export { SubLabel };
