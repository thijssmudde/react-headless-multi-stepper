import React from "react";

interface IHorizontalStepChildren {
  goPrevious: () => void;
  goNext: () => void;
}

interface IHorizontalStep {
  label: string;
  children: ({
    goPrevious,
    goNext,
  }: IHorizontalStepChildren) => React.ReactNode;
}

const HorizontalStep = ({}: IHorizontalStep) => <></>;

export type { IHorizontalStep };
export { HorizontalStep };
