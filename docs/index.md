# React tiny tooltip

This library provides a simple tooltip component for React.

Here's a basic example:

```tsx
import React from 'react';
import { Tooltip } from 'react-tiny-tooltip';

export default () => (
	<div>
		// `content` can be a React element too!
		<Tooltip content="Hello there" side="top">
			<button className="text-2xl font-extrabold underline">
				Hover here!
			</button>
		</Tooltip>
	</div>
);
```

Read the docs for more info