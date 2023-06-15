import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "shared/ui/Button/Button.style"
import { Flex } from "shared/ui/Flex/Flex"

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
		<Flex spaceBeetwen>
			<Button type="button" onClick={handlerPrevStep} variant="ghost">
        Назад
			</Button>
			<Button onClick={handlerNextStep} variant="solid">
        Вперёд
			</Button>
		</Flex>
	)
}
