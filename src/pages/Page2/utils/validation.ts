import { array, number, object, string } from "yup"

export const validation = object({
	advantages: array()
		.of(
			object({
				value: string().required(),
				id: string(),
			}).required()
		)
		.required()
		.test({ test: (array) => array?.length !== 0 }),
	checkbox: array()
		.of(number().required())
		.test({ test: (array) => array?.length !== 0 }),
	radio: number().required(),
})
