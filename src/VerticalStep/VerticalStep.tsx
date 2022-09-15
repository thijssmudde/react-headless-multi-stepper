import React from "react";
// import classNames from "classnames";
// import { SubStep } from "../@interfaces/interfaces";

interface IVerticalStep {
  // dataTestId?: string;
  label: string;
  // subStep: SubStep;
  // activeSubStep: SubStep;
  // onClick: (subStep: SubStep) => void;
  children: React.ReactNode;
}

// @TODO check that only HorizontalStep[] can appear as children
const VerticalStep = ({
  // dataTestId,
  // subStep,
  // activeSubStep,
  // onClick,
  label,
  children,
}: IVerticalStep) => (
  <div
  // data-testid={dataTestId}
  // onClick={() => onClick(subStep)}
  // className={classNames(
  //   "cursor-pointer before:border-r before:w-5 before:h-5 before:border-pink-500",
  //   {
  //     "text-pink-500": subStep === activeSubStep,
  //   },
  // )}
  >
    <div className="">{label}</div>

    {children}
  </div>
);

export type { IVerticalStep };
export { VerticalStep };
