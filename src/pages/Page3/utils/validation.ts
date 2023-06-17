import { object, string } from "yup"

export const validation = object({
	about: string().required().max(200)
})