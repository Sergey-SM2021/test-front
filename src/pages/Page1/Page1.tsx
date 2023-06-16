import { Controller, useForm } from "react-hook-form"
import { Page1Inner, Page1Wrapper } from "./Page1.style"
import { setPersonalData } from "entity/user/model/user"
import { IUser } from "entity/user/type/user"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { InputField } from "shared/ui/Input/Input.style"
import { Stack } from "shared/ui/Stack/Stack.style"
import { StepControll } from "widgets/stepControll"
import { yupResolver } from "@hookform/resolvers/yup"
import { userSchema } from "./utils/validation"
import { Select } from "shared/ui/Selcet/Select"
import { OptionWrapper } from "shared/ui/Option/Option.style"

export const Page1 = () => {
	const { personalData } = useAppSelector((state) => state.user)
	const dispatch = useAppDispatch()

	const { register, handleSubmit, control } = useForm<IUser["personalData"]>({
		defaultValues: personalData,
		resolver: yupResolver(userSchema),
	})

	const onSubmit = (data: IUser["personalData"]) => {
		dispatch(setPersonalData(data))
	}

	return (
		<Page1Wrapper onSubmit={handleSubmit(onSubmit)}>
			<Stack vertical>
				<Page1Inner>
					<Stack vertical space="lg">
						<Stack vertical>
							<p>Nickname</p>
							<InputField
								placeholder="Nickname"
								id="field-nickname"
								{...register("nickname")}
							/>
						</Stack>
						<Stack vertical>
							<p>Name</p>
							<InputField
								placeholder="Name"
								id="field-name"
								{...register("name")}
							/>
						</Stack>
						<Stack vertical>
							<p>Surename</p>
							<InputField
								placeholder="Surename"
								id="field-surename"
								{...register("surename")}
							/>
						</Stack>
						<Stack vertical>
							<p>Sex</p>
							<Controller
								name="sex"
								control={control}
								render={({ field }) => (
									<Select {...field}>
										<OptionWrapper data-label="man">man</OptionWrapper>
										<OptionWrapper data-label="woman">woman</OptionWrapper>
									</Select>
								)}
							/>
						</Stack>
					</Stack>
				</Page1Inner>
			</Stack>
			<StepControll />
		</Page1Wrapper>
	)
}
