import { useLocation, useNavigate } from "react-router-dom"

export const useStep = () => {
	const step = Number(useLocation().pathname.split("").at(-1) as string)
	const nav = useNavigate()

	const handlerNextStep = () => {
		if (step <= 2) {
			nav(`/step/${step + 1}`)
		}
	}

	const handlerPrev = () => {
		if (step > 1) {
			nav(`/step/${step - 1}`)
		} else {
			nav("/")
		}
	}

	return {
		handlerPrev,
		handlerNextStep,
	}
}
