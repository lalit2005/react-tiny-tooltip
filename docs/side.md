You can set a side in which the tooltip will appear. It can be one of the values - `"top" | "bottom" | "left" | "right"`

By default, the tooltip will appear at `"bottom"` and change automatically to avoid collsions.

```jsx
<Tooltip content="Hey there" side="top">
  Hover me 🙌
</Tooltip>
```

## Playground

Play around with the library here

<Sandpack
template="react"
files={{
	"/App.js": `import {Tooltip} from 'react-tiny-tooltip'
	export default function App() {
	return (
		<div style={{marginTop: 50, marginLeft: 50, display: "inline-block"}}>
			<Tooltip side="top" content="Hey there">
				Hover me 🙌
			</Tooltip>
		</div>
)
}`,
}}
customSetup={{
	dependencies: {
		react: "17.0.2",
		"react-dom": "17.0.2",
		"react-scripts": "4.0.0",
		"react-tiny-tooltip": "*"
	},
	}}
/>
