import { useLocation } from "react-router-dom"
import { Progress } from "shared/ui/Progress/ui/Progress"

export const ProgressBar = () => {
	const step = useLocation().pathname.split("").at(-1) as string
	return <Progress stepActive={Number(step)} steps={3} />
}
