import React from "react";
import { Meta, Story } from "@storybook/react";
import { MultiStepper, IMultiStepperProps } from "../src";
// import { steps } from "./MultiStepper.testData";
import "./tailwind.css";

const meta: Meta = {
  title: "MultiStepper",
  component: MultiStepper,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IMultiStepperProps> = (args) => (
  <MultiStepper
    {...args}
    className="flex flex-col"
    // mainLabelClassName="flex justify-between pb-5 mb-5 border-b"
    // renderMainLabel={(label) => <div>{label}</div>}
    // renderSubLabel={(label) => <>{label}</>}
    // renderContent={(content) => <>{content}</>}
  >
    <MultiStepper.VerticalStep label="step 1">
      <MultiStepper.HorizontalStep label="1.1">
        <div className="text-pink-500">Content 1.1</div>
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="1.2">
        <div className="text-pink-500">Content 1.2</div>
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="1.3">
        <div className="text-pink-500">Content 1.3</div>
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep label="step 2">
      <MultiStepper.HorizontalStep label="2.1">
        <div className="text-pink-500">Content 2.1</div>
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="2.2">
        <div className="text-pink-500">Content 2.2</div>
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="2.3">
        <div className="text-pink-500">Content 2.3</div>
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep label="step 3">
      <MultiStepper.HorizontalStep label="3.1">
        <div className="text-pink-500">Content 3.1</div>
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="3.2">
        <div className="text-pink-500">Content 3.2</div>
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="3.3">
        <div className="text-pink-500">Content 3.3</div>
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
  </MultiStepper>
);

export const Default = Template.bind({});

Default.args = {};
