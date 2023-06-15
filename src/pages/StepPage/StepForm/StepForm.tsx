import { Page1 } from "../Page1/Page1"
import { Page2 } from "../Page2/Page2"
import { Page3 } from "../Page3/Page3"
import { StepFormWrapper } from "./StepForm.style"

interface IStepForm {
  step: number;
}

export const StepForm = ({ step }: IStepForm) => {
	switch (step) {
	case 1:
		return (
			<StepFormWrapper>
				<Page1 />
			</StepFormWrapper>
		)
	case 2:
		return (
			<StepFormWrapper>
				<Page2 />
			</StepFormWrapper>
		)
	case 3:
		return (
			<StepFormWrapper>
				<Page3 />
			</StepFormWrapper>
		)
	default:
		return <div>not found</div>
	}
}
