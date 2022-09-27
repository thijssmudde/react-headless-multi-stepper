import React from "react";
import { IHorizontalStepChildren } from "../src";

interface IExampeContent extends IHorizontalStepChildren {
  children: React.ReactNode;
}

/**
 * This is purely an example for the MultiStepper content.
 * In an actual app you'd fill in this content yourself.
 * You can make use of the
 */
const ExampleContent = ({ goPrevious, goNext, children }: IExampeContent) => (
  <div className="flex flex-col w-full pt-16 pl-10">
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

export { ExampleContent };
