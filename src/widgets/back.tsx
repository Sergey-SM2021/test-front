import { useNavigate } from "react-router-dom"
import { Button } from "shared/ui/Button/Button.style"

export const Back = () => {
	const nav = useNavigate()
	const handlerClick = () => {
		nav(-1)
	}
	return (
		<Button onClick={handlerClick} variant="ghost">
      Назад
		</Button>
	)
}
