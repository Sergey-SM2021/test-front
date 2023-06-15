import { StepPageWrapper } from "./Step.style"
import { useParams } from "react-router-dom"
import { StepForm } from "../StepForm/StepForm"
import { Container } from "shared/ui/Container/Container.style"
import { Step } from "shared/ui/Progress/Progress"

export const StepPage = () => {
	const step = Number(useParams().step)

	return (
		<StepPageWrapper>
			<Container>
				<Step steps={3} stepActive={step} />
				<StepForm step={step} />
			</Container>
		</StepPageWrapper>
	)
}
