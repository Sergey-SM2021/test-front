import { object, string } from "yup"

export const validation = object({
	mail: string().email().required(),
	phone: string().required(),
})
