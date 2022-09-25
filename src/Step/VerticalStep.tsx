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
  children:
    | React.ReactElement<IHorizontalStep>
    | React.ReactElement<IHorizontalStep>[];
}

/**
 * The main step in the MultiStepper
 */
const VerticalStep = ({}: IVerticalStep) => <></>;

export type { IVerticalStep };
export { VerticalStep };
