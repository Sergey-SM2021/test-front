import { useFieldArray, useForm } from "react-hook-form"
import { Button } from "shared/ui/Button/Button.style"
import { Page2Actions, Page2Inner, Page2Wrapper } from "../ui/Page2.style"
import AddIcon from "../assets/Vector.svg"
import Remove from "../assets/remove.svg"
import { Page2AdvantagesItem } from "./Page2.style"
import { Stack } from "shared/ui/Stack/Stack.style"
import { InputField } from "shared/ui/Input/Input.style"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { setSecondaryData } from "entity/user/model/user"
import { useStep } from "shared/hooks/useStep"
import { yupResolver } from "@hookform/resolvers/yup"
import { validation } from "../utils/validation"
import { ErrorText } from "shared/ui/ErrorText/ErrorText"

const CheckBoxes = new Array(3).fill({
	id: "field-checkbox-group-option-",
	value: "field-checkbox-group-option-",
})

const RadioBoxes = new Array(3).fill({
	id: "field-checkbox-group-option-",
	value: "field-checkbox-group-option-",
})

interface IForm {
  advantages: { value: string; id: string }[];
  radio: string;
  checkbox: Array<string>;
}

export const Page2 = () => {
	const secondaryData = useAppSelector((state) => ({
		...state.user?.secondaryData,
		advantages: state.user.secondaryData.advantages.map((el) => ({
			value: el,
			id: Math.random.toString(),
		})),
		radio: state.user.secondaryData.radio?.toString(),
		checkbox: state.user.secondaryData.checkbox.map((el) => el.toString()),
	}))

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IForm>({
		defaultValues: secondaryData,
		resolver: yupResolver(validation),
	})

	const { handlerNextStep, handlerPrev } = useStep()

	const { fields, append, remove } = useFieldArray({
		control,
		name: "advantages",
	})

	const dispatch = useAppDispatch()

	const onSubmit = (value: IForm) => {
		dispatch(
			setSecondaryData({
				...value,
				advantages: value.advantages.map((el) => el.value),
				radio: Number(value.radio),
				checkbox: value.checkbox.map((el) => Number(el)),
			})
		)
		handlerNextStep()
	}

	const handlerAppend = () => {
		append({ id: "field-advantages-2", value: "" })
	}

	const handlerRemove = (index: number) => {
		remove(index)
	}

	return (
		<Page2Wrapper onSubmit={handleSubmit(onSubmit)}>
			<Page2Inner>
				<Stack vertical space="lg">
					<Stack vertical>
						<p>Advantages</p>
						<Stack vertical>
							{fields.map((el, i) => (
								<Page2AdvantagesItem key={el.id}>
									<InputField
										id={`field-advantages-${i + 1}`}
										{...register(`advantages.${i}.value`)}
									/>
									<div
										onClick={() => handlerRemove(i)}
										id={`button-remove-${i + 1}`}
									>
										<Remove />
									</div>
								</Page2AdvantagesItem>
							))}
						</Stack>
						<span>
							<Button
								w={44}
								h={44}
								type="button"
								variant="ghost"
								onClick={handlerAppend}
								id="button-add"
							>
								<AddIcon />
							</Button>
						</span>
						{errors.advantages ? (
							<ErrorText>{errors.advantages?.message}</ErrorText>
						) : null}
					</Stack>
					<Stack vertical>
						<p>Checkbox group</p>
						<ul>
							{CheckBoxes.map((el, i) => (
								<li key={i}>
									<Stack key={el.id}>
										<input
											{...register("checkbox")}
											type="checkbox"
											value={i + 1}
											id={`field-checkbox-group-option-${i + 1}`}
										/>
										<label htmlFor={`field-checkbox-group-option-${i + 1}`}>
											{i + 1}
										</label>
									</Stack>
								</li>
							))}
						</ul>
						{errors.checkbox ? (
							<ErrorText>{errors.checkbox.message}</ErrorText>
						) : null}
					</Stack>
					<Stack vertical>
						<p>Radio group</p>
						<ul>
							{RadioBoxes.map((el, i) => (
								<li key={i}>
									<Stack>
										<input
											{...register("radio")}
											type="radio"
											value={i + 1}
											id={`field-radio-group-option-${i + 1}`}
										/>
										<label htmlFor={`field-radio-group-option-${i + 1}`}>
											{i + 1}
										</label>
									</Stack>
								</li>
							))}
						</ul>
						{errors.radio ? (
							<ErrorText>{errors.radio.message}</ErrorText>
						) : null}
					</Stack>
				</Stack>
			</Page2Inner>
			<Page2Actions>
				<Button
					variant="ghost"
					type="button"
					id="button-back"
					onClick={handlerPrev}
				>
          Назад
				</Button>
				<Button variant="solid" id="button-next">
          Вперёд
				</Button>
			</Page2Actions>
		</Page2Wrapper>
	)
}
