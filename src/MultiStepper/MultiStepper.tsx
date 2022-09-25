import React from "react";
import { HorizontalStep, IHorizontalStep } from "../Step/HorizontalStep";
import { IVerticalStep, VerticalStep } from "../Step/VerticalStep";

interface IMultiStepperProps {
  dataTestId?: string;
  /**
   * Root element of the MultiStepper.
   */
  RootContainer: React.ReactElement;
  /**
   * Render prop for the label of the vertical step
   */
  renderMainLabel: (label: string, name: string) => React.ReactElement;
  /**
   * Render prop for the label of the horizontal step
   */
  renderSubLabel: (label: string, name: string) => React.ReactElement;
  /**
   * Fires on completion of the entire flow
   */
  onCompleted: () => void;
  /**
   * A number of vertical steps can be passed.
   */
  children: React.ReactElement<IVerticalStep>[];
}

// @TODO check preconditions
// - > 1 main step
// - >= 1 sub step per main step
// @TODO add disabledMainSteps: through props of VerticalStep
// @TODO add disabledSubSteps: through props of Horizontaltep
const MultiStepperRoot = ({
  dataTestId,
  renderMainLabel,
  renderSubLabel,
  onCompleted,
  RootContainer,
  children,
}: IMultiStepperProps) => {
  const verticalSteps = children;
  const [activeMainStep, setActiveMainStep] = React.useState<number>(0);
  const [activeSubStep, setActiveSubStep] = React.useState<number>(0);

  const horizontalSteps = verticalSteps[activeMainStep].props
    .children as React.ReactElement<IHorizontalStep>[];

  // Names of all main steps should be unique
  React.useMemo(() => {
    const verticalNames = verticalSteps.map(({ props: { name } }) => name);

    if (verticalNames.length !== new Set(verticalNames).size) {
      throw new Error(
        `Names for vertical steps: ${verticalNames.join(", ")} are not unique`,
      );
    }
  }, [horizontalSteps]);

  // Names of all sub steps should be unique
  React.useMemo(() => {
    const horizontalNames = verticalSteps
      .map(({ props: { children } }) => children)
      .map((horizontalStep) => {
        if (Array.isArray(horizontalStep)) {
          return horizontalStep.map(({ props: { name } }) => name);
        } else {
          return (
            horizontalSteps as unknown as React.ReactElement<IHorizontalStep>
          ).props.name;
        }
      })
      .flat();

    if (horizontalNames.length !== new Set(horizontalNames).size) {
      throw new Error(
        `Names for horizontal steps: ${horizontalNames.join(
          ", ",
        )} are not unique`,
      );
    }
  }, [horizontalSteps]);

  const activateVerticalStep = (name: string) => {
    const activeVerticalStep = verticalSteps.findIndex(
      (verticalStep) => verticalStep.props.name === name,
    );

    setActiveMainStep(activeVerticalStep);
    setActiveSubStep(0);
  };

  const activateHorizontalStep = (name: string) => {
    const activeHorizontalStep = horizontalSteps.findIndex(
      (horizontalStep) => horizontalStep.props.name === name,
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
      (activeMainStep + 1 >= verticalSteps.length &&
        activeSubStep + 1 >= horizontalSteps.length) ||
      // There is only one substep
      (horizontalSteps.length === undefined &&
        activeMainStep + 1 >= verticalSteps.length)
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

  const multipleSubSteps = Array.isArray(horizontalSteps);

  return (
    <RootContainer.type data-testid={dataTestId} {...RootContainer.props}>
      <div className="flex">
        {/* Labels of the vertical steps */}
        {verticalSteps.map(({ props: { label, name } }) => {
          const MainLabel = renderMainLabel(label, name);

          return (
            <MainLabel.type
              {...MainLabel.props}
              key={name}
              onClick={() => activateVerticalStep(name)}
            />
          );
        })}
      </div>

      <div className="flex">
        {multipleSubSteps ? (
          <div>
            {/* Labels of the horizontal steps */}
            {horizontalSteps.map(({ props: { label, name } }) => {
              const SubLabel = renderSubLabel(label, name);

              return (
                <SubLabel.type
                  {...SubLabel.props}
                  key={name}
                  onClick={() => activateHorizontalStep(name)}
                />
              );
            })}
          </div>
        ) : null}

        {multipleSubSteps
          ? horizontalSteps[activeSubStep].props.children({
              goPrevious,
              goNext,
            })
          : (
              horizontalSteps as unknown as React.ReactElement<IHorizontalStep>
            ).props.children({
              goPrevious,
              goNext,
            })}
      </div>
    </RootContainer.type>
  );
};

/**
 * Multi progress stepper. MultiStepper accepts a number of VerticalStep components
 * Each VerticalStep accepts one or multiple HorizontalStep components.
 */
export const MultiStepper = Object.assign(MultiStepperRoot, {
  VerticalStep,
  HorizontalStep,
});

export type { IMultiStepperProps };
