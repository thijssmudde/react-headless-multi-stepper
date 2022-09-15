import React from "react";
// import classNames from "classnames";
// import { MainStep } from "../@interfaces/interfaces";

interface IHorizontalStep {
  // dataTestId?: string;
  // active: boolean;
  // mainStep: MainStep;
  // activeMainStep: MainStep;
  label: string;
  children: ({
    goPrevious,
    goNext,
  }: {
    goPrevious: () => void;
    goNext: () => void;
  }) => React.ReactNode;
  // onClick: (mainStep: MainStep) => void;
}

const HorizontalStep = ({}: // dataTestId,
// active,
// mainStep,
// activeMainStep,
// label,
// children,
// onClick,
IHorizontalStep) => (
  <></>
  // <div onClick={() => onClick(mainStep)} className="flex-col cursor-pointer">
  //   <div
  //     className={classNames(
  //       "before:absolute before:border before:top-[5px] before:-z-10 before:left-[16px]",
  //       // @TODO this is dependent on # of steps
  //       `before:w-[calc(50%-16px)] before:border-pink-500`,
  //       // {
  //       //   "before:border-pink-500": active,
  //       // },
  //     )}
  //   />

  //   <div
  //     className={classNames(
  //       "ease-in duration-75 transition-all rounded-full mx-auto w-3 h-3",
  //       {
  //         "bg-pink-500": active,
  //         "bg-gray-200": !active,
  //       },
  //     )}
  //   />
  //   <div
  //     data-testid={dataTestId}
  //     className={classNames({
  //       "text-pink-500": active,
  //     })}
  //   >
  //     {children}
  //   </div>
  // </div>
);

export type { IHorizontalStep };
export { HorizontalStep };
