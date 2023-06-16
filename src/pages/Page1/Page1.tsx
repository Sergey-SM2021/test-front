import { Controller, useForm } from "react-hook-form"
import { Page1Inner, Page1Wrapper } from "./Page1.style"
import { setPersonalData } from "entity/user/model/user"
import { IUser, sex } from "entity/user/type/user"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { Stack } from "shared/ui/Stack/Stack.style"
import { yupResolver } from "@hookform/resolvers/yup"
import { userSchema } from "./utils/validation"
import { Select } from "shared/ui/Selcet/Select"
import { OptionWrapper } from "shared/ui/Option/Option.style"
import { Button } from "shared/ui/Button/Button.style"
import { Field } from "shared/ui/Field/Field"
import { useStep } from "shared/hooks/useStep"

export const Page1 = () => {
	const { handlerNextStep, handlerPrev } = useStep()
	const { personalData } = useAppSelector((state) => state.user)
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IUser["personalData"]>({
		defaultValues: personalData,
		resolver: yupResolver(userSchema),
	})

	const onSubmit = (data: IUser["personalData"]) => {
		dispatch(setPersonalData(data))
		handlerNextStep()
	}

	return (
		<Page1Wrapper onSubmit={handleSubmit(onSubmit)}>
			<Stack vertical>
				<Page1Inner>
					<Stack vertical space="lg">
						<Field
							label="Nickname"
							error={errors.nickname?.message}
							{...register("nickname")}
						/>
						<Field
							label="Name"
							error={errors.name?.message}
							{...register("name")}
						/>
						<Field
							label="Surename"
							error={errors.surename?.message}
							{...register("surename")}
						/>
						<Stack vertical>
							<p>Sex</p>
							<Controller
								name="sex"
								control={control}
								render={({ field }) => (
									<Select {...field}>
										<OptionWrapper data-label={sex.man}>man</OptionWrapper>
										<OptionWrapper data-label={sex.woman}>woman</OptionWrapper>
									</Select>
								)}
							/>
						</Stack>
					</Stack>
				</Page1Inner>
			</Stack>
			<Stack justify="between">
				<Button variant="ghost" type="button" onClick={handlerPrev}>Назад</Button>
				<Button variant="solid">Вперёд</Button>
			</Stack>
		</Page1Wrapper>
	)
}
