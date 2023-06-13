import { Button } from "../../../shared/Button/Button.style"
import { Container } from "../../../shared/Container/Container.style"
import { Step } from "../../../shared/Progress/Progress"
import { StepPageWrapper } from "./Step.style"
import { useNavigate, useParams } from "react-router-dom"
import { StepForm } from "../StepForm/StepForm"

export const StepPage = () => {
	const step = Number(useParams().step)
	const nav = useNavigate()

	const handlerNextStep = () => {
		if (step <= 2) {
			nav(`/step/${step + 1}`)
		}
	}

	const handlerPrevStep = () => {
		nav(-1)
	}

	return (
		<StepPageWrapper>
			<Container>
				<Step steps={3} stepActive={step} />
				<StepForm step={step} />
				<Button onClick={handlerPrevStep} variant="ghost">
          Назад
				</Button>
				<Button onClick={handlerNextStep} variant="solid">
          Вперёд
				</Button>
			</Container>
		</StepPageWrapper>
	)
}
