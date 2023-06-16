import Vector from "./assets/Vector.svg"
import { useState, MouseEvent, PropsWithChildren } from "react"
import {
	DropListArrowWrapper,
	DropListList,
	DropListWrapper,
} from "./Select.style"

interface ISelect extends PropsWithChildren {
  onChange: (string: string) => void;
  value: string;
}

export const Select = (props: ISelect) => {
	const { value, onChange, children } = props

	const [isOpen, setIsOpen] = useState(false)

	const handlerOpen = () => {
		setIsOpen((prev) => !prev)
	}

	const handlerClick = (e: MouseEvent<HTMLDivElement>) => {
		onChange((e.target as HTMLInputElement).dataset["label"] as string)
	}

	return (
		<DropListWrapper onClick={handlerOpen}>
			{value ?? "Не выбрано"}
			<DropListArrowWrapper>
				<Vector />
			</DropListArrowWrapper>
			{isOpen ? (
				<DropListList onClick={handlerClick}>{children}</DropListList>
			) : null}
		</DropListWrapper>
	)
}
