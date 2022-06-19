You can set a delay in **milliseconds** to wait before the tooltip is shown.

`delay` is `0` by default.

```jsx
<Tooltip content="Hey there" delay={5}>
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
			<Tooltip delay={500} content="Hey there">
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
