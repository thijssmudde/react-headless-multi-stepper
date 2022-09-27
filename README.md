# React Headless Multi Stepper

Design your own Multi Stepper component without having to worry about the logic? Then this tiny and performant package is for you. `react-headless-multi-stepper` is ideal if you are working with a utility-based css framework like TailwindCSS. `react-headless-multi-stepper` offers plenty of customization through generics and is also fully typed.

[![npm](https://img.shields.io/npm/v/react-headless-multi-stepper)](https://www.npmjs.com/package/react-headless-multi-stepper)

<!-- ![Jest unit tests](https://github.com/fullhdpixel/react-headless-multi-stepper/actions/workflows/main.yml/badge.svg) -->
<!-- ![code coverage](https://img.shields.io/badge/Code%20Coverage-100%25-success?style=flat) -->

[![issues](https://img.shields.io/github/issues/fullhdpixel/react-headless-multi-stepper)](https://github.com/fullhdpixel/react-headless-multi-stepper/issues)
[![stargazers](https://img.shields.io/github/stars/fullhdpixel/react-headless-multi-stepper)](https://github.com/fullhdpixel/react-headless-multi-stepper)

## Install

```sh
yarn add react-headless-multi-stepper
```

## Demo: Unstyled & TailwindCSS

[Storybook](https://react-headlesss-multi-stepper.netlify.app/)

## Usage

```tsx
import { MultiStepper } from "react-headless-multi-stepper";

...
return (
  <MultiStepper
    {...args}
    RootContainer={<div />}
    MainLabelContainer={<ul />}
    SubLabelContainer={<ul />}
    ContentContainer={<div />}
    onChange={(step)}
    onCompleted={() => alert("onCompleted")}
    renderMainLabel={(props) => <li>{props.label}</li>}
    renderSubLabel={(props) => <li>{props.label}</li>}
  >
    <MultiStepper.VerticalStep name="1" label="step 1">
      <MultiStepper.HorizontalStep name="1.1" label="1.1">
        {({ goPrevious, goNext }) => (
          <div>
            Content 1.1
            <button onClick={goPrevious}>previous</button>
            <button onClick={goNext}>next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="1.2" label="1.2">
        {({ goPrevious, goNext }) => (
          <div>
            Content 1.2
            <button onClick={goPrevious}>previous</button>
            <button onClick={goNext}>next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="1.3" label="1.3">
        {({ goPrevious, goNext }) => (
          <div>
            Content 1.3
            <button onClick={goPrevious}>previous</button>
            <button onClick={goNext}>next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep name="2" label="step 2">
      <MultiStepper.HorizontalStep name="2.1" label="2.1">
        {({ goPrevious, goNext }) => (
          <div>
            Content 2.1
            <button onClick={goPrevious}>previous</button>
            <button onClick={goNext}>next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="2.2" label="2.2">
        {({ goPrevious, goNext }) => (
          <div>
            Content 2.2
            <button onClick={goPrevious}>previous</button>
            <button onClick={goNext}>next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
      <MultiStepper.HorizontalStep name="2.3" label="2.3">
        {({ goPrevious, goNext }) => (
          <div>
            Content 2.3
            <button onClick={goPrevious}>previous</button>
            <button onClick={goNext}>next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
    <MultiStepper.VerticalStep name="3" label="step 3">
      <MultiStepper.HorizontalStep name="3.1" label="3.1">
        {({ goPrevious, goNext }) => (
          <div>
            Content 3.1
            <button onClick={goPrevious}>previous</button>
            <button onClick={goNext}>next</button>
          </div>
        )}
      </MultiStepper.HorizontalStep>
    </MultiStepper.VerticalStep>
  </MultiStepper>
);
```

An example of a styled version can be found in stories/MultiStepper.stories.tsx.

## MultiStepper props

The following table contains all optional and required props for the MultiStepper. The library is strictly typed and uses generics to support many different kinds of data.

| Name               | Type                                   | Default | Description                                                                                   |
| ------------------ | -------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| dataTestId         | `string`                               |         | Places a data-testid on several elements                                                      |
| RootContainer      | `React.ReactElement`                   | `div`   | Root element of the MultiStepper.                                                             |
| MainLabelContainer | `React.ReactElement`                   | `ul`    | Containing element for the main labels.                                                       |
| SubLabelContainer  | `React.ReactElement`                   | `ul`    | Containing element for the sub labels.                                                        |
| ContentContainer   | `React.ReactElement`                   | `div`   | Containing element for the SubLabelContainer and step content.                                |
| renderMainLabel\*  | `IRenderLabel`\*\*                     |         | Render prop for the label of the vertical step.                                               |
| renderSubLabel\*   | `IRenderLabel`\*\*                     |         | Render prop for the label of the horizontal step.                                             |
| onChange\*         | `(name: string) => void`               |         | Fires for every next and previous navigation action. Name refers to the newly activated step. |
| onCompleted\*      | `() => void`                           |         | Fires on completion of the entire flow.                                                       |
| children\*         | `React.ReactElement <IVerticalStep>[]` |         | A number of VerticalStep components.                                                          |

\*these are required \
\*\*IRenderLabel contains all information to render your horizontal or vertical (i.e. label activeIndex, label, name, index, array).

## VerticalStep props

The following table contains all optional and required props for the VerticalStep component. VerticalSteps are placed as children inside the MultiStepper.

| Name       | Type                                                                             | Description                                             |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| name\*     | `string`                                                                         | Unique string to distinguish between all vertical steps |
| label\*    | `string`                                                                         | Display this value to the user in the stepper.          |
| children\* | `React.ReactElement<IHorizontalStep>` or `React.ReactElement<IHorizontalStep>[]` | A number of HorizontalStep components.                  |

\*these are required

## HorizontalStep props

The following table contains all optional and required props for the HorizontalStep component. HorizontalSteps are placed as children inside the VerticalStep.

| Name       | Type                    | Description                                               |
| ---------- | ----------------------- | --------------------------------------------------------- |
| name\*     | `string`                | Unique string to distinguish between all horizontal steps |
| label\*    | `string`                | Display this value to the user in the stepper.            |
| children\* | `({goPrevious,goNext})` | Render prop for children                                  |

\*these are required \
\*\* IHorizontalStep: goPrevious and goNext are both callback functions that return nothing.

## Authors

- [Fullhdpixel](https://github.com/fullhdpixel)
