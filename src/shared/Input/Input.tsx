import { InputHTMLAttributes } from "react"
import { InputField, InputWrapper } from "./Input.style"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = (props: IInput) => {
	const { label, ...restProps } = props
	return (
		<InputWrapper>
			<p>{label}</p>
			<InputField {...restProps} />
		</InputWrapper>
	)
}
