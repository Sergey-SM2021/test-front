import { useFieldArray, useForm } from "react-hook-form"
import { Button } from "shared/ui/Button/Button.style"
import { Page2Wrapper } from "./ui/Page2.style"
import { Input } from "shared/ui/Input/Input"
import AddIcon from "./assets/Vector.svg"
import Remove from "./assets/remove.svg"
import { Page2AdvantagesItem } from "./Page2.style"
import { Stack } from "shared/ui/Stack/Stack.style"
import { StepControll } from "widgets/stepControll"

interface IForm {
  Advantages: { value: string; id: string }[];
  Checkbox: string;
  Radio: string;
}

export const Page2 = () => {
	const { register, handleSubmit, control } = useForm<IForm>({
		defaultValues: {
			Advantages: [{ id: "field-advantages-1", value: "" }],
		},
	})

	const { fields, append, remove } = useFieldArray({
		control,
		name: "Advantages",
	})

	const onSubmit = (value: IForm) => {
		alert(value)
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
								<Input id={el.id} {...register(`Advantages.${i}.value`)} />
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
										name="Checkbox group"
										type="checkbox"
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
										type="radio"
										name="Radio group"
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
