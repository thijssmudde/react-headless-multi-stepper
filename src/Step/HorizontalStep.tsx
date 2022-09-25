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
   * String that will be displayed to the user in stepper
   */
  label: string;
  /**
   * Disable this step to skip it.
   */
  // disabled?: boolean;
  children: ({
    goPrevious,
    goNext,
  }: IHorizontalStepChildren) => React.ReactElement;
}

const HorizontalStep = ({}: IHorizontalStep) => <></>;

export type { IHorizontalStep };
export { HorizontalStep };
