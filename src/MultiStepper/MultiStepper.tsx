import React from "react";
import { IHorizontalStep, IMultiStepperProps } from "../@interfaces/types";
import { HorizontalStep } from "../Step/HorizontalStep";
import { VerticalStep } from "../Step/VerticalStep";

const MultiStepperRoot = ({
  dataTestId,
  RootContainer = <div />,
  MainLabelContainer = <div />,
  SubLabelContainer = <div />,
  ContentContainer = <div />,
  renderMainLabel,
  renderSubLabel,
  onChange,
  onCompleted,
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

  // Get an array of all sub steps
  // const allSteps =
  React.useMemo(() => {
    const horizontalNames = verticalSteps
      .map(({ props: { children } }) => children)
      .map((horizontalStep) => {
        if (Array.isArray(horizontalStep)) {
          return horizontalStep.map(({ props: { name } }) => name);
        } else {
          const step =
            horizontalStep as unknown as React.ReactElement<IHorizontalStep>;

          return step.props.name;
        }
      })
      .flat()
      .filter((item) => item !== undefined);

    // Names of all sub steps should be unique
    if (horizontalNames.length !== new Set(horizontalNames).size) {
      throw new Error(
        `Names for horizontal steps: ${horizontalNames.join(
          ", ",
        )} are not unique`,
      );
    }

    // return horizontalNames;
  }, [verticalSteps]);

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
    // Move through sub steps first
    if (activeSubStep + 1 < horizontalSteps.length) {
      setActiveSubStep(activeSubStep + 1);
    } else if (activeMainStep + 1 < verticalSteps.length) {
      setActiveMainStep(activeMainStep + 1);
      setActiveSubStep(0);
    }

    if (
      (activeMainStep + 1 >= verticalSteps.length &&
        activeSubStep + 1 >= horizontalSteps.length) ||
      // If there is only one substep
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

  const firstUpdate = React.useRef(true);
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    onChange(
      multipleSubSteps
        ? horizontalSteps[activeSubStep].props.name
        : (horizontalSteps as unknown as React.ReactElement<IHorizontalStep>)
            .props.name,
    );
  }, [activeSubStep, horizontalSteps, multipleSubSteps]);

  return (
    <RootContainer.type data-testid={dataTestId} {...RootContainer.props}>
      <MainLabelContainer.type {...MainLabelContainer.props}>
        {/* Labels of the vertical steps */}
        {verticalSteps.map(({ props }, index, array) => {
          const MainLabel = renderMainLabel({
            activeIndex: activeMainStep,
            label: props.label,
            name: props.name,
            index,
            array,
          });

          return (
            <MainLabel.type
              {...MainLabel.props}
              key={props.name}
              onClick={() => activateVerticalStep(props.name)}
            />
          );
        })}
      </MainLabelContainer.type>

      <ContentContainer.type {...ContentContainer.props}>
        {multipleSubSteps ? (
          <SubLabelContainer.type {...SubLabelContainer.props}>
            {/* Labels of the horizontal steps */}
            {horizontalSteps.map(({ props }, index, array) => {
              const SubLabel = renderSubLabel({
                activeIndex: activeSubStep,
                label: props.label,
                name: props.name,
                index,
                array,
              });

              return (
                <SubLabel.type
                  {...SubLabel.props}
                  key={props.name}
                  onClick={() => activateHorizontalStep(props.name)}
                />
              );
            })}
          </SubLabelContainer.type>
        ) : null}

        {multipleSubSteps
          ? // If multiple sub steps, render the active substep children
            horizontalSteps[activeSubStep].props.children({
              goPrevious,
              goNext,
            })
          : // Otherwise render the single sub step children
            (
              horizontalSteps as unknown as React.ReactElement<IHorizontalStep>
            ).props.children({
              goPrevious,
              goNext,
            })}
      </ContentContainer.type>
    </RootContainer.type>
  );
};

/**
 * Multi progress stepper. MultiStepper accepts a number of VerticalStep components
 * Each VerticalStep accepts one or multiple HorizontalStep components.
 */
export const MultiStepper = Object.assign(MultiStepperRoot, {
  /**
   * The main step in the MultiStepper
   */
  VerticalStep,
  /**
   * The sub step in the MultiStepper, should be inside a VerticalStepper
   */
  HorizontalStep,
});
