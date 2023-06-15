import { Button } from "shared/ui/Button/Button.style"
import { StepPageWrapper } from "./Step.style"
import { useNavigate, useParams } from "react-router-dom"
import { StepForm } from "../StepForm/StepForm"
import { Container } from "shared/ui/Container/Container.style"
import { Step } from "shared/ui/Progress/Progress"
import { Flex } from "shared/ui/Flex/Flex"

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
				<Flex spaceBeetwen>
					<Button onClick={handlerPrevStep} variant="ghost">
            Назад
					</Button>
					<Button onClick={handlerNextStep} variant="solid">
            Вперёд
					</Button>
				</Flex>
			</Container>
		</StepPageWrapper>
	)
}
