import { Controller, useForm } from "react-hook-form"
import { Page1Wrapper } from "./Page1.style"
import { DropList } from "shared/ui/DropList/DropList"
import { Flex } from "shared/ui/Flex/Flex"
import { Button } from "shared/ui/Button/Button.style"
import { useNavigate, useParams } from "react-router-dom"
import { setPersonalData } from "entity/user/model/user"
import { IUser } from "entity/user/type/user"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { InputField } from "shared/ui/Input/Input.style"

export const Page1 = () => {
	const step = Number(useParams().step)
	const { personalData } = useAppSelector((state) => state.user)
	const dispatch = useAppDispatch()

	const nav = useNavigate()

	const handlerNextStep = () => {
		if (step <= 2) {
			nav(`/step/${step + 1}`)
		}
	}

	const handlerPrevStep = () => {
		nav(-1)
	}

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
			<Flex spaceBeetwen>
				<Button type="button" onClick={handlerPrevStep} variant="ghost">
          Назад
				</Button>
				<Button onClick={handlerNextStep} variant="solid">
          Вперёд
				</Button>
			</Flex>
		</Page1Wrapper>
	)
}
