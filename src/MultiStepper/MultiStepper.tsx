import React from "react";
import // MainStep,
// SubStep,
"../@interfaces/interfaces";
import {
  HorizontalStep,
  IHorizontalStep,
} from "../HorizontalStep/HorizontalStep";
import { IVerticalStep, VerticalStep } from "../VerticalStep/VerticalStep";

interface IMultiStepperProps {
  // dataTestId?: string;
  // steps: MainStep[];
  // renderMainLabel: (label: string) => React.ReactNode;
  // renderSubLabel: (label: string) => React.ReactNode;
  // renderContent: (content: React.ReactNode) => React.ReactNode;
  className?: string;
  children: React.ReactElement<IVerticalStep>[];
}

// @TODO check preconditions
// >= 1 main step
// >= 1 sub step per main step
// labels of main steps must be unique
// labels of sub steps must be unique
const MultiStepperRoot = ({
  // dataTestId,
  // steps,
  // renderMainLabel,
  // renderSubLabel,
  // renderContent,
  className,
  // @TODO check that only VerticalSteps can appear as children
  children,
}: IMultiStepperProps) => {
  const verticalSteps = children;
  const [activeMainStep, setActiveMainStep] = React.useState<number>(0);
  const [activeSubStep, setActiveSubStep] = React.useState<number>(0);

  const horizontalSteps = verticalSteps[activeMainStep].props
    .children as React.ReactElement<IHorizontalStep>[];

  const activateVerticalStep = (label: string) => {
    const activeVerticalStep = verticalSteps.findIndex(
      (verticalStep) => verticalStep.props.label === label,
    );

    setActiveMainStep(activeVerticalStep);
    setActiveSubStep(0);
  };

  const activateHorizontalStep = (label: string) => {
    const activeHorizontalStep = horizontalSteps.findIndex(
      (horizontalStep) => horizontalStep.props.label === label,
    );

    setActiveSubStep(activeHorizontalStep);
  };

  return (
    <div className={className}>
      <div className="flex border border-pink-500">
        {verticalSteps.map((verticalStep) => (
          <div
            onClick={() =>
              activateVerticalStep(verticalStep.props.label as string)
            }
            className="cursor-pointer"
          >
            {verticalStep.props.label}
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="flex flex-col">
          {horizontalSteps.map((horizontalStep) => (
            <div
              onClick={() => activateHorizontalStep(horizontalStep.props.label)}
              className="cursor-pointer"
            >
              {horizontalStep.props.label}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {horizontalSteps[activeSubStep].props.children({
            goNext: 
          })}
        </div>
      </div>
    </div>
  );
};

/**
 * Re-exports all components belonging to a Table from the Table namespace
 */
export const MultiStepper = Object.assign(MultiStepperRoot, {
  VerticalStep,
  HorizontalStep,
});

export type { IMultiStepperProps };
