![cover image](https://user-images.githubusercontent.com/69138026/174492815-dfd61f4a-764c-4be1-ba85-3307b01c7ec5.png)

<h1 style={{display: "none"}}>React tiny tooltip</h1>

React tiny toolip is a simple tooltip component for React.

Here's a basic example:

```tsx
import React from "react";
import { Tooltip } from "react-tiny-tooltip";

export default () => (
  <div>
    // `content` can be a React element too!
    <Tooltip content="Hello there" side="top">
      <button className="text-2xl font-extrabold underline">Hover here!</button>
    </Tooltip>
  </div>
);
```

Read the docs for more info
