import { Stack } from "shared/ui/Stack/Stack.style"
import { TextArea } from "shared/ui/TextArea.style"
import { Page3Counter, Page3Inner, Page3Wrapper } from "./Page3.style"
import { useForm } from "react-hook-form"
import { IUser } from "entity/user/type/user"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { setAbout } from "entity/user/model/user"
import { Button } from "shared/ui/Button/Button.style"
import { useStep } from "shared/hooks/useStep"
import { yupResolver } from "@hookform/resolvers/yup"
import { validation } from "../utils/validation"

interface IForm {
  about: IUser["about"];
}

export const Page3 = () => {
	const { handlerPrev } = useStep()
	const dispatch = useAppDispatch()
	const { about } = useAppSelector((state) => state.user)
	const { register, handleSubmit } = useForm<IForm>({
		defaultValues: {
			about,
		},
		resolver: yupResolver(validation),
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
				<Page3Counter>19</Page3Counter>
			</Page3Inner>
			<Stack justify="between">
				<Button variant="ghost" type="button" onClick={handlerPrev}>
          Назад
				</Button>
				<Button variant="solid">Готово</Button>
			</Stack>
		</Page3Wrapper>
	)
}
