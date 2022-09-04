import classNames from "classnames";
import React from "react";
import { IMultiStepperProps, MainStep, SubStep } from "./MultiStepper.d";

const MultiStepper = ({
  dataTestId,
  steps,
  renderMainLabel,
  renderSubLabel,
  renderContent,
}: IMultiStepperProps) => {
  const [activeMainStep, setActiveMainStep] = React.useState<MainStep>(
    steps[0],
  );
  const [activeSubStep, setActiveSubStep] = React.useState<SubStep>(
    steps[0].steps[0],
  );

  const subSteps = React.useMemo(
    () => steps.find((step) => step.label === activeMainStep.label),
    [steps, activeMainStep],
  )!;

  const onClickMainStep = (mainStep: MainStep) => {
    setActiveMainStep(mainStep);
    setActiveSubStep(mainStep.steps[0]);
  };

  const onClickSubStep = (subStep: SubStep) => setActiveSubStep(subStep);

  return (
    <>
      <div className="flex justify-between w-full pb-5 mb-5 border-b">
        {steps.map((mainStep, index) => (
          <div
            key={mainStep.label}
            data-testid={dataTestId?.concat(`-main-${index}`)}
            onClick={() => onClickMainStep(mainStep)}
            className={classNames("cursor-pointer", {
              "text-pink-500": mainStep === activeMainStep,
            })}
          >
            {renderMainLabel(mainStep.label)}
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="space-y-4">
          {subSteps.steps.map((subStep, index) => (
            <div
              key={subStep.label}
              data-testid={dataTestId?.concat(`-sub-${index}`)}
              onClick={() => onClickSubStep(subStep)}
              className={classNames("cursor-pointer", {
                "text-pink-500": subStep === activeSubStep,
              })}
            >
              {renderSubLabel(subStep.label)}
            </div>
          ))}
        </div>
        <div className="p-10">{renderContent(activeSubStep.content)}</div>
      </div>
    </>
  );
};

export type { IMultiStepperProps };
export { MultiStepper };
