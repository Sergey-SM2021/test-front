import { Controller, useForm } from "react-hook-form"
import { Page1Actions, Page1Inner, Page1Wrapper } from "./Page1.style"
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
							id="field-nickname"
						/>
						<Field
							label="Name"
							error={errors.name?.message}
							{...register("name")}
							id="field-name"
						/>
						<Field
							label="Surename"
							error={errors.surename?.message}
							{...register("surename")}
							id="field-sername"
						/>
						<Stack vertical>
							<p>Sex</p>
							<Controller
								name="sex"
								control={control}
								render={({ field }) => (
									<Select {...field} id="field-sex">
										<OptionWrapper id="field-sex-option-man" data-label={sex.man}>man</OptionWrapper>
										<OptionWrapper id="field-sex-option-woman" data-label={sex.woman}>woman</OptionWrapper>
									</Select>
								)}
							/>
						</Stack>
					</Stack>
				</Page1Inner>
			</Stack>
			<Page1Actions>
				<Button id="button-back" variant="ghost" type="button" onClick={handlerPrev}>Назад</Button>
				<Button id="button-next" variant="solid">Вперёд</Button>
			</Page1Actions>
		</Page1Wrapper>
	)
}
