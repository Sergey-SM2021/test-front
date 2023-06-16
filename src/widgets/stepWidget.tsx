import { useLocation } from "react-router-dom"
import { Step } from "shared/ui/Progress/ui/Progress"

export const ProgressBar = () => {
	const step = useLocation().pathname.split("").at(-1) as string
	return <Step stepActive={Number(step)} steps={3} />
}
