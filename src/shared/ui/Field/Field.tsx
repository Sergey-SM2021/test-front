import { InputHTMLAttributes, forwardRef } from "react"
import { ErrorText } from "../ErrorText/ErrorText"
import { InputField } from "../Input/Input.style"
import { Stack } from "../Stack/Stack.style"

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

export const Field = forwardRef<HTMLInputElement, IField>((props, ref) => {
	const { error, label, ...restProps } = props
	return (
		<Stack vertical>
			<p>{label}</p>
			<InputField {...restProps} ref={ref} />
			{error ? <ErrorText>{error}</ErrorText> : null}
		</Stack>
	)
})

Field.displayName = "Field"
