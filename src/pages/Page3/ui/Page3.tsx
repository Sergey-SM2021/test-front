import { Stack } from "shared/ui/Stack/Stack.style"
import {
	Page3Actions,
	Page3Counter,
	Page3Inner,
	Page3TextArea,
	Page3TextAreaWrapper,
	Page3Wrapper,
} from "./Page3.style"
import { useForm } from "react-hook-form"
import { IUser } from "entity/user/type/user"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { Button } from "shared/ui/Button/Button.style"
import { useStep } from "shared/hooks/useStep"
import { yupResolver } from "@hookform/resolvers/yup"
import { validation } from "../utils/validation"
import { ErrorText } from "shared/ui/ErrorText/ErrorText"
import { Modal } from "feature/send/ui/Modal/Modal"
import { sendData } from "feature/send/model/send"
import { setAbout } from "entity/user/model/user"

interface IForm {
  about: IUser["about"];
}

export const Page3 = () => {
	const { handlerPrev } = useStep()
	const dispatch = useAppDispatch()
	const { about } = useAppSelector((state) => state.user)
	const { user } = useAppSelector((state) => state)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IForm>({
		defaultValues: {
			about,
		},
		resolver: yupResolver(validation),
	})

	const aboutLength = watch("about").length

	const onSubmit = async (data: IForm) => {
		dispatch(setAbout(data.about))
		await dispatch(sendData({ ...user, about: data.about }))
	}

	return (
		<>
			<Page3Wrapper onSubmit={handleSubmit(onSubmit)}>
				<Page3Inner>
					<Stack vertical>
						<p>About</p>
						<Page3TextAreaWrapper>
							<Page3TextArea {...register("about")} id="field-about" />
							<Page3Counter>{aboutLength}</Page3Counter>
						</Page3TextAreaWrapper>
						{errors.about && <ErrorText>{errors.about.message}</ErrorText>}
					</Stack>
				</Page3Inner>
				<Page3Actions>
					<Button
						variant="ghost"
						type="button"
						id="button-back"
						onClick={handlerPrev}
					>
            Назад
					</Button>
					<Button variant="solid" id="button-send">
            Готово
					</Button>
				</Page3Actions>
			</Page3Wrapper>
			<Modal />
		</>
	)
}
