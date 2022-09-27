interface IHorizontalStep {
  /**
   * Unique string to distinguish between all horizontal steps
   */
  name: string;
  /**
   * Display this value to the user in the stepper
   */
  label: string;
  /**
   * Render prop for children
   */
  children: ({
    goPrevious,
    goNext,
  }: IHorizontalStepChildren) => React.ReactElement;
}

interface IHorizontalStepChildren {
  goPrevious: () => void;
  goNext: () => void;
}

interface IMultiStepperProps {
  dataTestId?: string;
  /**
   * Root element of the MultiStepper.
   */
  RootContainer?: React.ReactElement;
  /**
   * Containing element for the main labels
   */
  MainLabelContainer?: React.ReactElement;
  /**
   * Containing element for the sub labels
   */
  SubLabelContainer?: React.ReactElement;
  /**
   * Containing element for the SubLabelContainer and step content
   */
  ContentContainer?: React.ReactElement;
  /**
   * Render prop for the label of the vertical step
   */
  renderMainLabel: IRenderLabel;
  /**
   * Render prop for the label of the horizontal step
   */
  renderSubLabel: IRenderLabel;
  /**
   * Fires for every next and previous navigation action.
   * Name refers to the newly activated step
   */
  onChange: (name: string) => void;
  /**
   * Fires on completion of the entire flow
   */
  onCompleted: () => void;
  /**
   * A number of vertical steps can be passed.
   */
  children: React.ReactElement<IVerticalStep>[];
}

/**
 * Render prop type for vertical and horizontal labels
 */
type IRenderLabel = <T extends unknown>({
  activeIndex,
  label,
  name,
  index,
  array,
}: {
  activeIndex: number;
  label: string;
  name: string;
  index: number;
  array: T[];
}) => React.ReactElement;

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
   * A number of HorizontalStep components
   */
  children:
    | React.ReactElement<IHorizontalStep>
    | React.ReactElement<IHorizontalStep>[];
}

export {
  IHorizontalStep,
  IHorizontalStepChildren,
  IMultiStepperProps,
  IRenderLabel,
  IVerticalStep,
};
