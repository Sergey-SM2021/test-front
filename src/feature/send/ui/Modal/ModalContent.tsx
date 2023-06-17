import { Button } from "shared/ui/Button/Button.style"
import { Stack } from "shared/ui/Stack/Stack.style"
import Allow from "../../assets/Allow.svg"
import NotAllow from "../../assets/NotAllow.svg"
import { Close } from "./Close.style"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "app/providers/redux"
import { close } from "feature/send/model/send"

interface IModal {
  success: boolean;
}

export const ModalContent = ({ success }: IModal) => {
	const nav = useNavigate()
	const dispatch = useAppDispatch()

	const handlerHome = () => {
		nav("/")
	}

	const handlerClose = () => {
		dispatch(close())
	}

	if (success) {
		return (
			<Stack vertical space="xl" align="center">
				<h4>Форма успешно отправлена</h4>
				<Allow />
				<div>
					<Button variant="solid" onClick={handlerHome}>
            На главную
					</Button>
				</div>
			</Stack>
		)
	}
	return (
		<Stack vertical space="xl" align="center">
			<Stack justify="between" w={"100%"}>
				<h4>Ошибка</h4>
				<Close onClick={handlerClose} />
			</Stack>
			{success ? <Allow /> : <NotAllow />}
			<Stack justify="end" w={"100%"}>
				<Button variant="solid" onClick={handlerClose}>
          Закрыть
				</Button>
			</Stack>
		</Stack>
	)
}
