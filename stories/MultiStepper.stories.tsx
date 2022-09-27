import React from "react";
import { Meta, Story } from "@storybook/react";
import classNames from "classnames";
import { MultiStepper, IMultiStepperProps } from "../src";
import { ExampleContent } from "./ExampleContent";
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
    RootContainer={<div className="flex flex-col" />}
    MainLabelContainer={<ul className="flex justify-between w-full ml-20" />}
    SubLabelContainer={<ul />}
    ContentContainer={<div className="flex" />}
    onCompleted={() => alert("onCompleted")}
    renderMainLabel={({ activeIndex, label }, index, verticalSteps) => (
      <li
        className={classNames(
          "flex items-start w-full cursor-pointer after:mt-[9px]",
          {
            "text-pink-500": index <= activeIndex,
          },
          index !== verticalSteps.length - 1
            ? {
                "after:h-[2px] after:w-full after:mt-[9px] after:ml-[20px] after:mr-[-20px]":
                  true,
                "after:bg-pink-500": index < activeIndex,
                "after:bg-gray-300": index >= activeIndex,
              }
            : null,
        )}
      >
        <div className="absolute flex flex-col items-center">
          <div
            className={classNames("w-5 h-5 rounded-full", {
              "bg-pink-500": index <= activeIndex,
              "bg-gray-300": index > activeIndex,
            })}
          />

          {label}
        </div>
      </li>
    )}
    renderSubLabel={({ activeIndex, label }, index, horizontalSteps) => (
      <li
        className={classNames(
          "flex h-40 space-x-4 cursor-pointer items-center before:w-[2px] before:mr-[-7px]",
          { "text-pink-500": index <= activeIndex },
          index !== horizontalSteps.length - 1
            ? {
                "before:h-full before:mt-40": true,

                "before:bg-pink-500": index < activeIndex,
                "before:bg-gray-300": index >= activeIndex,
              }
            : null,
        )}
      >
        <div
          className={classNames("w-3 h-3 my-auto rounded-full mr-3", {
            "bg-pink-500": index <= activeIndex,
            "bg-gray-300": index > activeIndex,
          })}
        />

        {label}
      </li>
    )}
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
    MainLabelContainer={<div className="flex" />}
    SubLabelContainer={<div />}
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
            <span className="text-pink-500">Content 1.1</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="1.2" label="1.2">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 1.2</span>
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="1.3" label="1.3">
        {({ goPrevious, goNext }) => (
          <div>
            <span className="text-pink-500">Content 1.3</span>
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
            <span className="text-pink-500">Content 2.1</span>
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
            <span className="text-pink-500">Content 3.1</span>
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
