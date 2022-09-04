import React from "react";
import { Meta, Story } from "@storybook/react";
import { MultiStepper, IMultiStepperProps, MainStep } from "../src";
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

const steps: MainStep[] = [
  {
    label: "step 1",
    steps: [
      {
        label: "1.1",
        content: "-1.1",
      },
      {
        label: "1.2",
        content: "-1.2",
      },
      {
        label: "1.3",
        content: "-1.3",
      },
    ],
  },
  {
    label: "step 2",
    steps: [
      {
        label: "2.1",
        content: "-2.1",
      },
      {
        label: "2.2",
        content: "-2.1",
      },
      {
        label: "2.3",
        content: "-2.1",
      },
    ],
  },
  {
    label: "step 3",
    steps: [
      {
        label: "3.1",
        content: "-3.1",
      },
      {
        label: "3.2",
        content: "-3.2",
      },
      {
        label: "3.3",
        content: "-3.3",
      },
    ],
  },
];

const Template: Story<IMultiStepperProps> = (args) => (
  <MultiStepper
    {...args}
    steps={steps}
    renderMainLabel={(label) => <>{label}</>}
    renderSubLabel={(label) => <>{label}</>}
    renderContent={(content) => <>{content}</>}
  />
);

export const Default = Template.bind({});

Default.args = {};
