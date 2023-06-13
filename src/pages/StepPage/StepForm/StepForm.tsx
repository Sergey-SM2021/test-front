interface IStepForm {
  step: number;
}

export const StepForm = ({ step }: IStepForm) => {
	switch (step) {
	case 1:
		return <div>step1</div>
	case 2:
		return <div>step2</div>
	case 3:
		return <div>step3</div>
	default:
		return <div>not found</div>
	}
}
