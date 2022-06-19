Here's how you can show a basic tooltip with `react-tiny-tooltip`.

```jsx
<Tooltip content="Hey there">Hover me 🙌</Tooltip>
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
			<Tooltip content="Hey there">
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
