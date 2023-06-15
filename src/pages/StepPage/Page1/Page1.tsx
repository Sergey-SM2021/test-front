import { Controller, useForm } from "react-hook-form"
import { Page1Wrapper } from "./Page1.style"
import { Input } from "shared/ui/Input/Input"
import { DropList } from "shared/ui/DropList/DropList"

interface IForm {
  nickname: string;
  name: string;
  surename: string;
  sex: {
    name: string;
    id: string;
  };
}

export const Page1 = () => {
	const { register, handleSubmit, control } = useForm<IForm>()

	const onSubmit = (data: IForm) => {
		alert(JSON.stringify(data))
	}

	return (
		<Page1Wrapper onSubmit={handleSubmit(onSubmit)}>
			<Input
				placeholder="Nickname"
				id="field-nickname"
				label="Nickname"
				{...register("nickname")}
			/>
			<Input
				placeholder="Name"
				id="field-name"
				label="Name"
				{...register("name")}
			/>
			<Input
				placeholder="Surename"
				id="field-surename"
				label="Surename"
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
						value={field?.value?.name}
					/>
				)}
			/>
		</Page1Wrapper>
	)
}
