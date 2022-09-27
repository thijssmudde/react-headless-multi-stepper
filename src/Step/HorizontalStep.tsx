import React from "react";

interface IHorizontalStepChildren {
  goPrevious: () => void;
  goNext: () => void;
}

interface IHorizontalStep {
  /**
   * Unique string to distinguish between all horizontal steps
   */
  name: string;
  /**
   * Display this value to the user in the stepper
   */
  label: string;
  /**
   * Render prop for children
   */
  children: ({
    goPrevious,
    goNext,
  }: IHorizontalStepChildren) => React.ReactElement;
}

const HorizontalStep = ({}: IHorizontalStep) => <></>;

export type { IHorizontalStep, IHorizontalStepChildren };
export { HorizontalStep };
