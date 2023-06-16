import { Stack } from "shared/ui/Stack/Stack.style"
import { TextArea } from "shared/ui/TextArea.style"
import { Page3Inner, Page3Wrapper } from "./Page3.style"
import { StepControll } from "widgets/stepControll"

export const Page3 = () => {
	return (
		<Page3Wrapper>
			<Page3Inner>
				<Stack vertical>
					<p>About</p>
					<TextArea />
				</Stack>
			</Page3Inner>
			<StepControll />
		</Page3Wrapper>
	)
}
