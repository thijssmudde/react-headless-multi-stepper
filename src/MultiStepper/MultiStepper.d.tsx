import React from "react";

interface IBaseStep {
  label: string;
}

interface MainStep extends IBaseStep {
  steps: SubStep[];
}

interface SubStep extends IBaseStep {
  content: React.ReactNode;
}

interface IMultiStepperProps {
  dataTestId?: string;
  steps: MainStep[];
  renderMainLabel: (label: string) => React.ReactNode;
  renderSubLabel: (label: string) => React.ReactNode;
  renderContent: (content: React.ReactNode) => React.ReactNode;
}

export type { MainStep, SubStep, IMultiStepperProps };
