import { Controller, useForm } from "react-hook-form"
import { Page1Wrapper } from "./Page1.style"
import { DropList } from "shared/ui/DropList/DropList"
import { setPersonalData } from "entity/user/model/user"
import { IUser } from "entity/user/type/user"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { InputField } from "shared/ui/Input/Input.style"
import { StepControll } from "widgets/stepControll"

export const Page1 = () => {
	const { personalData } = useAppSelector((state) => state.user)
	const dispatch = useAppDispatch()

	const { register, handleSubmit, control } = useForm<IUser["personalData"]>({
		defaultValues: personalData,
	})

	const onSubmit = (data: IUser["personalData"]) => {
		dispatch(setPersonalData(data))
	}

	return (
		<Page1Wrapper onSubmit={handleSubmit(onSubmit)}>
			<InputField
				placeholder="Nickname"
				id="field-nickname"
				{...register("nickname")}
			/>
			<InputField placeholder="Name" id="field-name" {...register("name")} />
			<InputField
				placeholder="Surename"
				id="field-surename"
				{...register("surename")}
			/>
			<Controller
				name="sex"
				control={control}
				render={({ field }) => (
					<DropList
						onChange={field.onChange}
						list={[
							{ id: "field-name-sex-option-man", name: "man" },
							{ id: "field-name-sex-option-woman", name: "woman" },
						]}
						value={field?.value}
					/>
				)}
			/>
			<StepControll />
		</Page1Wrapper>
	)
}
