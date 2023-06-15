import { useFieldArray, useForm } from "react-hook-form"
import { Button } from "shared/ui/Button/Button.style"
import { Page2Wrapper } from "../ui/Page2.style"
import AddIcon from "../assets/Vector.svg"
import Remove from "../assets/remove.svg"
import { Page2AdvantagesItem } from "./Page2.style"
import { Stack } from "shared/ui/Stack/Stack.style"
import { StepControll } from "widgets/stepControll"
import { InputField } from "shared/ui/Input/Input.style"
import { IUser } from "entity/user/type/user"
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { setSecondaryData } from "entity/user/model/user"

export const Page2 = () => {
	const { secondaryData } = useAppSelector((state) => state.user)
	const { register, handleSubmit, control } = useForm<IUser["secondaryData"]>({
		defaultValues: secondaryData,
	})
	const { fields, append, remove } = useFieldArray({
		control,
		name: "Advantages",
	})
	const dispatch = useAppDispatch()

	const onSubmit = (value: IUser["secondaryData"]) => {
		dispatch(setSecondaryData(value))
	}

	const handlerAppend = () => {
		append({ id: "field-advantages-2", value: "" })
	}

	const handlerRemove = (index: number) => {
		remove(index)
	}

	const CheckBoxes = new Array(3).fill({
		id: "field-checkbox-group-option-",
		value: "field-checkbox-group-option-",
	})

	const RadioBoxes = new Array(3).fill({
		id: "field-checkbox-group-option-",
		value: "field-checkbox-group-option-",
	})

	return (
		<Page2Wrapper onSubmit={handleSubmit(onSubmit)}>
			<Stack vertical space="md">
				<Stack vertical>
					<p>Advantages</p>
					<Stack vertical>
						{fields.map((el, i) => (
							<Page2AdvantagesItem key={el.id}>
								<InputField id={el.id} {...register(`Advantages.${i}.value`)} />
								<div onClick={() => handlerRemove(i)}>
									<Remove />
								</div>
							</Page2AdvantagesItem>
						))}
					</Stack>
					<span>
						<Button
							type="button"
							variant="ghost"
							onClick={handlerAppend}
							id="button-add"
						>
							<AddIcon />
						</Button>
					</span>
				</Stack>
				<div>
					<p>Checkbox group</p>
					<ul>
						<li>
							{CheckBoxes.map((el, i) => (
								<Stack key={el.id}>
									<input
										{...register(`CheckboxGroup.${i}`)}
										type="checkbox"
										value={el.id}
										id={`${el.id}${i + 1}`}
									/>
									<label htmlFor={`field-checkbox-group-option-${i + 1}`}>
										{i + 1}
									</label>
								</Stack>
							))}
						</li>
					</ul>
				</div>
				<div>
					<p>Radio group</p>
					<ul>
						<li>
							{RadioBoxes.map((el, i) => (
								<Stack key={el.id}>
									<input
										{...register("Radio")}
										type="radio"
										value={`${el.id}${i + 1}`}
										id={`${el.id}${i + 1}`}
									/>
									<label htmlFor={`field-checkbox-group-option-${i + 1}`}>
										{i + 1}
									</label>
								</Stack>
							))}
						</li>
					</ul>
				</div>
			</Stack>
			<StepControll />
		</Page2Wrapper>
	)
}
