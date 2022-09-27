import React from "react";
import { Meta, Story } from "@storybook/react";
import { IMultiStepperProps, MultiStepper } from "../src";
import { ExampleContent } from "./ExampleContent";
import "./tailwind.css";
import { MainLabel } from "./MainLabel";
import { SubLabel } from "./SubLabel";

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
    RootContainer={<div className="flex flex-col" />}
    MainLabelContainer={<ul className="flex justify-between w-full pl-20" />}
    SubLabelContainer={<ul className="w-11" />}
    ContentContainer={<div className="flex" />}
    onCompleted={() => alert("onCompleted")}
    renderMainLabel={(props) => <MainLabel {...props} />}
    renderSubLabel={(props) => <SubLabel {...props} />}
  >
    <MultiStepper.VerticalStep name="1" label="step 1">
      <MultiStepper.HorizontalStep name="1.1" label="1.1">
        {({ goPrevious, goNext }) => (
          <ExampleContent goPrevious={goPrevious} goNext={goNext}>
            Content 1.1
          </ExampleContent>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="1.2" label="1.2">
        {({ goPrevious, goNext }) => (
          <ExampleContent goPrevious={goPrevious} goNext={goNext}>
            Content 1.2
          </ExampleContent>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="1.3" label="1.3">
        {({ goPrevious, goNext }) => (
          <ExampleContent goPrevious={goPrevious} goNext={goNext}>
            Content 1.3
          </ExampleContent>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep name="2" label="step 2">
      <MultiStepper.HorizontalStep name="2.1" label="2.1">
        {({ goPrevious, goNext }) => (
          <ExampleContent goPrevious={goPrevious} goNext={goNext}>
            Content 2.1
          </ExampleContent>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="2.2" label="2.2">
        {({ goPrevious, goNext }) => (
          <ExampleContent goPrevious={goPrevious} goNext={goNext}>
            Content 2.2
          </ExampleContent>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="2.3" label="2.3">
        {({ goPrevious, goNext }) => (
          <ExampleContent goPrevious={goPrevious} goNext={goNext}>
            Content 2.3
          </ExampleContent>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep name="3" label="step 3">
      <MultiStepper.HorizontalStep name="3.1" label="3.1">
        {({ goPrevious, goNext }) => (
          <ExampleContent goPrevious={goPrevious} goNext={goNext}>
            Content 3.1
          </ExampleContent>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="3.2" label="3.2">
        {({ goPrevious, goNext }) => (
          <ExampleContent goPrevious={goPrevious} goNext={goNext}>
            Content 3.2
          </ExampleContent>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="3.3" label="3.3">
        {({ goPrevious, goNext }) => (
          <ExampleContent goPrevious={goPrevious} goNext={goNext}>
            Content 3.3
          </ExampleContent>
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
    RootContainer={<div className="flex flex-col" />}
    MainLabelContainer={<ul className="flex justify-between w-full mx-20" />}
    SubLabelContainer={<ul />}
    ContentContainer={<div className="flex" />}
    onCompleted={() => alert("onCompleted")}
    renderMainLabel={({ label }) => (
      <div className="cursor-pointer">{label}</div>
    )}
    renderSubLabel={({ label }) => (
      <div className="cursor-pointer">{label}</div>
    )}
  >
    <MultiStepper.VerticalStep name="1" label="step 1">
      <MultiStepper.HorizontalStep name="1.1" label="1.1">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-violet-500">Content 1.1</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="1.2" label="1.2">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-violet-500">Content 1.2</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="1.3" label="1.3">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-violet-500">Content 1.3</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep name="2" label="step 2">
      <MultiStepper.HorizontalStep name="2.1" label="2.1">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-violet-500">Content 2.1</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep name="3" label="step 3">
      <MultiStepper.HorizontalStep name="3.1" label="3.1">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-violet-500">Content 3.1</span>
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
