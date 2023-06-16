import { Stack } from "shared/ui/Stack/Stack.style"
import { TextArea } from "shared/ui/TextArea.style"
import { Page3Inner, Page3Wrapper } from "./Page3.style"
import { StepControll } from "widgets/stepControll"
import { useForm } from "react-hook-form"
import { IUser } from "entity/user/type/user"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { setAbout } from "entity/user/model/user"

interface IForm {
  about: IUser["about"];
}

export const Page3 = () => {
	const dispatch = useAppDispatch()
	const { about } = useAppSelector((state) => state.user)
	const { register, handleSubmit } = useForm<IForm>({
		defaultValues: {
			about,
		},
	})

	const onSubmit = (data: IForm) => {
		dispatch(setAbout(data.about))
	}

	return (
		<Page3Wrapper onSubmit={handleSubmit(onSubmit)}>
			<Page3Inner>
				<Stack vertical>
					<p>About</p>
					<TextArea {...register("about")} />
				</Stack>
			</Page3Inner>
			<StepControll />
		</Page3Wrapper>
	)
}
