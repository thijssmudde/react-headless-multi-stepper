import React from "react";
import classNames from "classnames";
import { IRenderLabel } from "../../src";

const SubLabel: IRenderLabel = ({
  activeIndex,
  label,
  index,
  array: horizontalSteps,
}) => (
  <li
    className={classNames(
      "flex h-40 space-x-4 cursor-pointer items-center before:w-[2px] before:mr-[-7px]",
      { "text-violet-500": index <= activeIndex },
      index !== horizontalSteps.length - 1
        ? {
            "before:h-full before:mt-40": true,

            "before:bg-violet-500": index < activeIndex,
            "before:bg-gray-300": index >= activeIndex,
          }
        : null,
    )}
  >
    <div
      className={classNames("w-3 h-3 rounded-full mr-3", {
        "bg-violet-500": index <= activeIndex,
        "bg-gray-300": index > activeIndex,
      })}
    />

    {label}
  </li>
);

export { SubLabel };
