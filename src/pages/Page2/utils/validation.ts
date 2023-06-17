import { array, object, string } from "yup"

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
		.of(string().required())
		.test({ test: (array) => array?.length !== 0 }),
	radio: string().required(),
})
