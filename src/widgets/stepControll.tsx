import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "shared/ui/Button/Button.style"
import { Stack } from "shared/ui/Stack/Stack.style"

export const StepControll = () => {
	const step = Number(useLocation().pathname.split("").at(-1) as string)
	const nav = useNavigate()

	const handlerPrevStep = () => {
		nav(-1)
	}

	const handlerNextStep = () => {
		if (step <= 2) {
			nav(`/step/${step + 1}`)
		}
	}

	return (
		<Stack justify="between">
			<Button type="button" onClick={handlerPrevStep} variant="ghost">
        Назад
			</Button>
			<Button type="submit" onClick={handlerNextStep} variant="solid">
        Вперёд
			</Button>
		</Stack>
	)
}
