import React from "react";
import { IHorizontalStep } from "../HorizontalStep/HorizontalStep";

interface IVerticalStep {
  label: string;
  children:
    | React.ReactElement<IHorizontalStep>
    | React.ReactElement<IHorizontalStep>[];
}

const VerticalStep = ({}: IVerticalStep) => <></>;

export type { IVerticalStep };
export { VerticalStep };
