import React from "react";
import { Meta, Story } from "@storybook/react";
import classNames from "classnames";
import { MultiStepper, IMultiStepperProps } from "../src";
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

const ExampleContent = ({
  goPrevious,
  goNext,
  children,
}: {
  goPrevious: () => void;
  goNext: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col w-full p-10">
      <span className="flex-grow text-pink-500">{children}</span>
      <div className="ml-auto">
        <button
          type="button"
          className="px-4 py-2 m-2 text-white transition duration-500 bg-pink-400 border border-pink-400 rounded-md select-none ease hover:bg-pink-500 focus:outline-none focus:shadow-outline"
          onClick={goPrevious}
        >
          Previous
        </button>
        <button
          type="button"
          className="px-4 py-2 m-2 text-white transition duration-500 bg-pink-500 border border-pink-500 rounded-md select-none ease hover:bg-pink-600 focus:outline-none focus:shadow-outline"
          onClick={goNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const MultiStepperStory: Story<IMultiStepperProps> = (args) => (
  <MultiStepper
    {...args}
    RootContainer={<div className="flex flex-col " />}
    MainLabelContainer={
      <div className="relative flex justify-between w-full px-20" />
    }
    SubLabelContainer={<div />}
    ContentContainer={<div className="flex" />}
    onCompleted={() => alert("onCompleted")}
    renderMainLabel={({ isActive, label }) => (
      <div className="flex flex-col cursor-pointer">
        <div className="w-5 h-5 mx-auto bg-pink-500 rounded-full" />
        <div
          className={classNames(
            // "before:absolute before:border before:top-[5px] before:-z-10 before:w-[90%] before:left-[20px] before:border-gray-200",
            {
              "text-pink-500": isActive,
            },
          )}
        >
          {label}
        </div>
      </div>
    )}
    renderSubLabel={({ isActive, label }) => (
      <div className="flex h-40 space-x-4 cursor-pointer">
        <div className="w-3 h-3 my-auto bg-pink-500 rounded-full" />

        <div
          className={classNames("my-auto", {
            "text-pink-500": isActive,
            // "opacity-50": disabled,
            // "cursor-pointer": !disabled,
          })}
        >
          {label}
        </div>
      </div>
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
    renderMainLabel={({
      label,
      name,
      //disabled
    }) => <div className="cursor-pointer">{label}</div>}
    renderSubLabel={({
      label,
      name, //disabled
    }) => <div className="cursor-pointer">{label}</div>}
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
