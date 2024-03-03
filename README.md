# Scrolling Animated Counter

![GitHub](https://img.shields.io/github/license/programmerbanna/scrolling-animated-counter)

A simple React component for creating smooth animated counters that start counting when they become visible on the screen or when they enter the scroll view position.

## Demo

Check out simple demo [here](https://codesandbox.io/p/sandbox/scrolling-animated-counter-xwkdrz?file=%2Fsrc%2Findex.tsx).

## Installation

You can install the scrolling-animated-counter package via npm:

```bash
npm install scrolling-animated-counter
```

Or, if you're using Yarn:

```bash
yarn add scrolling-animated-counter
```

## Usage

```jsx
import React from "react";
import { ScrollingAnimatedCounter } from "scrolling-animated-counter";

const App = () => {
  return (
    <div>
      <h1>Welcome to My Website!</h1>
      <p>
        Here's the scrolling animated counter:
        <ScrollingAnimatedCounter targetValue={100} threshold={0.5} />
      </p>
    </div>
  );
};

export default App;
```

## Props

| Name         | Type              | Description                                                                                                                                                                          |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| initialValue | number (optional) | The initial value of the counter. Defaults to `0`.                                                                                                                                   |
| targetValue  | number (required) | The target value to which the counter should animate.                                                                                                                                |
| duration     | number (optional) | The duration in milliseconds for the counter animation. Defaults to `2000` milliseconds.                                                                                             |
| threshold    | number (optional) | The ratio of the target element's visibility in the viewport at which the Intersection Observer triggers the animation. It should be a value between `0` and `1`. Defaults to `0.5`. |
| className    | string (optional) | CSS class name to be applied to the `span` element wrapping the counter.                                                                                                             |
