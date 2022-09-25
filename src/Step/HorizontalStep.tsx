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
  children: ({
    goPrevious,
    goNext,
  }: IHorizontalStepChildren) => React.ReactNode;
}

/**
 * The sub step in the MultiStepper, should inside a VerticalStepper
 */
const HorizontalStep = ({}: IHorizontalStep) => <></>;

export type { IHorizontalStep };
export { HorizontalStep };
