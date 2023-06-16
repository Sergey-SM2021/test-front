import {
	ProgressStepIcon,
	ProgressStepItem,
	ProgressStepNumber,
	ProgressStepPending,
} from "./Progress.style"
import Icon from "../assets/Vector.svg"

interface IProgressStep {
  step: number;
  stepActive: number;
}

export const ProgressStep = ({ step, stepActive }: IProgressStep) => {
	return (
		<ProgressStepItem>
			<ProgressStepIcon disabled={step > stepActive}>
				{step < stepActive ? <Icon /> : null}
				{step === stepActive ? <ProgressStepPending /> : null}
			</ProgressStepIcon>
			<ProgressStepNumber>{step}</ProgressStepNumber>
		</ProgressStepItem>
	)
}
