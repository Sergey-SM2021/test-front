import { useNavigate } from "react-router-dom"
import { Button } from "shared/ui/Button/Button.style"
import Folder from "../assets/Folder.svg"
import {
	BodyFields,
	EditWrapper,
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
import { useEffect, useState } from "react"
import Edit from "../assets/Edit.svg"
import { yupResolver } from "@hookform/resolvers/yup"
import { validation } from "../utils/validation"
import { phoneMask } from "shared/utils/phoneMask"
import { onPhoneInput } from "../utils/onPhoneInput"

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

	const { register, handleSubmit, setValue } = useForm<IUser["primaryInfo"]>({
		defaultValues: { mail, phone },
		resolver: yupResolver(validation),
	})

	const nav = useNavigate()

	const onSubmit = (values: IUser["primaryInfo"]) => {
		dispatch(setPrimaryInfo(values))
		nav("/step/1")
	}

	const handlerEdit = () => {
		setIsDisabled(false)
	}

	useEffect(() => {
		setValue("phone", onPhoneInput(phone))
	}, [])

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
						<InputField
							type="tel"
							ref={register("phone").ref}
							onBlur={register("phone").onBlur}
							name={register("phone").name}
							disabled={isDisabled}
							{...phoneMask}
						/>
					</Stack>
					<Stack vertical>
						<InputField {...register("mail")} disabled={isDisabled} />
					</Stack>
					<EditWrapper align="center" onClick={handlerEdit}>
						<Edit />
						<p>Редактировать</p>
					</EditWrapper>
				</BodyFields>
				<Button variant="solid" id="button-start">
          Начать
				</Button>
			</MainPageBody>
		</MainPageWrapper>
	)
}
