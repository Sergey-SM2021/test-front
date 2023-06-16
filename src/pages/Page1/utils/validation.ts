import { object, string } from "yup"

export const userSchema = object({
	nickname: string()
		.max(30)
		.matches(/^[a-zA-Zа-яА-Я0-9]*$/)
		.required(),
	name: string()
		.required()
		.max(50)
		.matches(/^[a-zA-Zа-яА-Я]*$/),
	surename: string()
		.required()
		.max(50)
		.matches(/^[a-zA-Zа-яА-Я]*$/),
	sex: string().oneOf(["man", "woman"]),
})
