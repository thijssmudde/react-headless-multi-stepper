import React from "react";
import { IHorizontalStep } from "./HorizontalStep";

interface IVerticalStep {
  /**
   * Unique string to distinguish between all vertical steps
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
  children:
    | React.ReactElement<IHorizontalStep>
    | React.ReactElement<IHorizontalStep>[];
}

const VerticalStep = ({}: IVerticalStep) => <></>;

export type { IVerticalStep };
export { VerticalStep };
