import { createRoot } from "react-dom/client"

export const Index = () => {
	return <div>index</div>
}

const root = createRoot(document.getElementById("root") as HTMLInputElement)
root.render(<Index />)
