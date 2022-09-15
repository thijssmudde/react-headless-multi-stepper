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

export type { MainStep, SubStep };
