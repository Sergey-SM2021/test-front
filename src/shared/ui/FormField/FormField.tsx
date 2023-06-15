import { PropsWithChildren } from "react"
import { FormFieldWrapper } from "./FormField.style"

export const FormField = ({ children }: PropsWithChildren) => {
	return <FormFieldWrapper>{children}</FormFieldWrapper>
}
