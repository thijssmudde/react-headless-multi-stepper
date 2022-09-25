import React from "react";
import {
  HorizontalStep,
  IHorizontalStep,
} from "../HorizontalStep/HorizontalStep";
import { IVerticalStep, VerticalStep } from "../VerticalStep/VerticalStep";

interface IMultiStepperProps {
  dataTestId?: string;
  renderMainLabel: (label: string) => React.ReactElement;
  renderSubLabel: (label: string) => React.ReactElement;
  /**
   * Fires on completion of the entire flow
   */
  onCompleted: () => void;
  className?: string;
  children: React.ReactElement<IVerticalStep>[];
}

// @TODO check preconditions
// >= 1 main step
// >= 1 sub step per main step
// labels of main steps must be unique
// labels of sub steps must be unique
// @TODO add disabledMainSteps
// @TODO add disabledSubSteps
const MultiStepperRoot = ({
  dataTestId,
  renderMainLabel,
  renderSubLabel,
  onCompleted,
  className,
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

  const goNext = () => {
    // Move through sub steps firstt
    if (activeSubStep + 1 < horizontalSteps.length) {
      setActiveSubStep(activeSubStep + 1);
    } else if (activeMainStep + 1 < verticalSteps.length) {
      setActiveMainStep(activeMainStep + 1);
      setActiveSubStep(0);
    }

    if (
      activeMainStep + 1 >= verticalSteps.length &&
      activeSubStep + 1 >= horizontalSteps.length
    ) {
      onCompleted();
    }
  };

  const goPrevious = () => {
    // Move through sub steps firstt
    if (activeSubStep > 0) {
      setActiveSubStep(activeSubStep - 1);
    } else if (activeMainStep > 0) {
      setActiveMainStep(activeMainStep - 1);
      const horizontalSteps = verticalSteps[activeMainStep - 1].props
        .children as React.ReactElement<IHorizontalStep>[];
      setActiveSubStep(horizontalSteps.length - 1);
    }
  };

  console.log({ horizontalSteps });

  return (
    <div data-testid={dataTestId} className={className}>
      <div className="flex">
        {verticalSteps.map((verticalStep) => {
          const MainLabel = renderMainLabel(verticalStep.props.label);

          return (
            <MainLabel.type
              {...MainLabel.props}
              key={verticalStep.props.label}
              onClick={() =>
                activateVerticalStep(verticalStep.props.label as string)
              }
            />
          );
        })}
      </div>

      <div className="flex">
        <div>
          {Array.isArray(horizontalSteps) && horizontalSteps.length > 0
            ? horizontalSteps.map((horizontalStep) => {
                const SubLabel = renderSubLabel(horizontalStep.props.label);

                return (
                  <SubLabel.type
                    {...SubLabel.props}
                    key={horizontalStep.props.label}
                    onClick={() =>
                      activateHorizontalStep(horizontalStep.props.label)
                    }
                  />
                );
              })
            : null}

          {/* {!Array.isArray(horizontalSteps)
            ? renderSingleSub : null} */}
        </div>

        {horizontalSteps[activeSubStep].props.children({
          goPrevious,
          goNext,
        })}
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
