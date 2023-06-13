import { useNavigate } from "react-router-dom"
import { Button } from "../../../shared/Button/Button.style"
import Folder from "../assets/Folder.svg"
import {
	BodyFields,
	HeaderAvatar,
	HeaderContent,
	HeaderLink,
	HeaderLinks,
	HeaderName,
	MainPageBody,
	MainPageHeader,
	MainPageWrapper,
} from "./MainPage.style"
import { Input } from "../../../shared/Input/Input"

export const MainPage = () => {
	const nav = useNavigate()

	const handlerStart = () => {
		nav("/step/1")
	}

	const links = [
		{ name: "Telegram", id: "0" },
		{ name: "Resume", id: "1" },
		{ name: "Github", id: "2" },
	]

	return (
		<MainPageWrapper>
			<MainPageHeader>
				<HeaderAvatar>АИ</HeaderAvatar>
				<HeaderContent>
					<HeaderName>Иван Иванов</HeaderName>
					<HeaderLinks>
						{links.map(({ id, name }) => (
							<HeaderLink key={id}>
								<Folder />
								{name}
							</HeaderLink>
						))}
					</HeaderLinks>
				</HeaderContent>
			</MainPageHeader>
			<MainPageBody>
				<BodyFields>
					<Input label="Номер телефона" placeholder="+7 999 999-99-99" />
					<Input label="Email" placeholder="tim.jennings@example.com" />
				</BodyFields>
				<Button onClick={handlerStart} id="button-start">
          Начать
				</Button>
			</MainPageBody>
		</MainPageWrapper>
	)
}
