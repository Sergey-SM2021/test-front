import { Stack } from "shared/ui/Stack/Stack.style"
import { TextArea } from "shared/ui/TextArea.style"
import { StepControll } from "widgets/stepControll"

export const Page3 = () => {
	return (
		<div>
			<Stack vertical>
				<p>About</p>
				<TextArea />
			</Stack>
			<StepControll />
		</div>
	)
}
