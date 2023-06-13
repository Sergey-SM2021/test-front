import { StepIcon, StepItem, StepWrapper } from "./Progress.style"
import Icon from "./assets/Vector.svg"

interface IStep {
  steps: number;
  stepActive: number;
}

export const Step = (props: IStep) => {
	const { steps = 3, stepActive } = props
	return (
		<StepWrapper>
			{new Array(steps).fill("").map((el, i) => (
				<StepItem isActive={i + 1 <= stepActive} key={i}>
					<StepIcon isActive={i + 1 <= stepActive}>
						{i + 1 <= stepActive ? <Icon /> : null}
					</StepIcon>
					{i + 1}
				</StepItem>
			))}
		</StepWrapper>
	)
}
