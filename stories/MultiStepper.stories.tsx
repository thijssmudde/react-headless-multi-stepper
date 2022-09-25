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

const MultiStepperStory: Story<IMultiStepperProps> = (args) => (
  <MultiStepper
    {...args}
    className="flex flex-col"
    onCompleted={() => alert("onCompleted")}
    renderMainLabel={(label) => <div className="cursor-pointer">{label}</div>}
    renderSubLabel={(label) => <div className="cursor-pointer">{label}</div>}
  >
    <MultiStepper.VerticalStep label="step 1">
      <MultiStepper.HorizontalStep label="1.1">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 1.1</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="1.2">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 1.2</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="1.3">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 1.3</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep label="step 2">
      <MultiStepper.HorizontalStep label="2.1">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 2.1</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="2.2">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 2.2</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="2.3">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 2.3</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep label="step 3">
      <MultiStepper.HorizontalStep label="3.1">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 3.1</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="3.2">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 3.2</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="3.3">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 3.3</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
  </MultiStepper>
);

export const Default = MultiStepperStory.bind({});

Default.args = {};

const SingleStepStory: Story<IMultiStepperProps> = (args) => (
  <MultiStepper
    {...args}
    className="flex flex-col"
    onCompleted={() => alert("onCompleted")}
    renderMainLabel={(label) => <div className="cursor-pointer">{label}</div>}
    renderSubLabel={(label) => <div className="cursor-pointer">{label}</div>}
  >
    <MultiStepper.VerticalStep label="step 1">
      <MultiStepper.HorizontalStep label="1.1">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 1.1</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="1.2">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 1.2</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep label="1.3">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 1.3</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep label="step 2">
      <MultiStepper.HorizontalStep label="2.1">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 2.1</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
  </MultiStepper>
);

export const SingleStep = SingleStepStory.bind({});

SingleStep.args = {};
