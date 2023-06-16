import { ProgressStepLine, ProgressWrapper } from "./Progress.style"
import { ProgressStep } from "./ProgressStep"

interface IStep {
  steps: number;
  stepActive: number;
}

export const Step = ({ stepActive, steps }: IStep) => {
	return (
		<ProgressWrapper>
			{new Array(steps - 1).fill(null).map((el, i) => (
				<ProgressStepLine key={el} isPassed={i + 1 < stepActive}>
					<ProgressStep step={i + 1} stepActive={stepActive} />
				</ProgressStepLine>
			))}
			<ProgressStep step={3} stepActive={stepActive} />
		</ProgressWrapper>
	)
}
