import { useNavigate } from "react-router-dom"
import { Button } from "../../../shared/ui/Button/Button.style"
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
import { useAppDispatch, useAppSelector } from "app/providers/redux"
import { useForm } from "react-hook-form"
import { Stack } from "shared/ui/Stack/Stack.style"
import { InputField } from "shared/ui/Input/Input.style"
import { IUser } from "entity/user/type/user"
import { setPrimaryInfo } from "entity/user/model/user"
import { useState } from "react"
import Edit from "../assets/Edit.svg"

const links = [
	{ name: "Telegram", id: "0" },
	{ name: "Resume", id: "1" },
	{ name: "Github", id: "2" },
]

export const MainPage = () => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const dispatch = useAppDispatch()

	const {
		primaryInfo: { mail, phone },
	} = useAppSelector((state) => state.user)

	const { name, surename } = useAppSelector((state) => state.user.personalData)

	const { register, handleSubmit } = useForm<IUser["primaryInfo"]>({
		defaultValues: { mail, phone },
	})

	const nav = useNavigate()

	const handlerStart = () => {
		nav("/step/1")
	}

	const onSubmit = (values: IUser["primaryInfo"]) => {
		dispatch(setPrimaryInfo(values))
	}

	const handlerEdit = () => {
		setIsDisabled(false)
	}

	return (
		<MainPageWrapper onSubmit={handleSubmit(onSubmit)}>
			<MainPageHeader>
				<HeaderAvatar>
					{name.slice(0, 1)}
					{surename.slice(0, 1)}
				</HeaderAvatar>
				<HeaderContent>
					<HeaderName>
						{name} {surename}
					</HeaderName>
					<HeaderLinks>
						{links.map((el) => (
							<HeaderLink key={el.id}>
								<Folder />
								{el.name}
							</HeaderLink>
						))}
					</HeaderLinks>
				</HeaderContent>
			</MainPageHeader>
			<MainPageBody>
				<BodyFields>
					<Stack vertical>
						<InputField {...register("phone")} disabled={isDisabled} />
					</Stack>
					<Stack vertical>
						<InputField {...register("mail")} disabled={isDisabled} />
					</Stack>
					<Stack align="center" onClick={handlerEdit}>
						<Edit />
						<p>Редактировать</p>
					</Stack>
				</BodyFields>
				<Button variant="solid" onClick={handlerStart} id="button-start">
          Начать
				</Button>
			</MainPageBody>
		</MainPageWrapper>
	)
}
