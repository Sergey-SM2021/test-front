import Vector from "./assets/Vector.svg"
import { useState, MouseEvent, PropsWithChildren, useRef } from "react"
import {
	DropListArrowWrapper,
	DropListList,
	DropListWrapper,
} from "./Select.style"
import { useOutsideClick } from "shared/hooks/useOutsideClick"

interface ISelect extends PropsWithChildren {
  onChange: (string: string) => void;
  value: string;
  id: string;
}

export const Select = (props: ISelect) => {
	const { value, onChange, children, id } = props

	const [isOpen, setIsOpen] = useState(false)

	const handlerOpen = () => {
		setIsOpen((prev) => !prev)
	}

	const handlerClick = (e: MouseEvent<HTMLDivElement>) => {
		onChange((e.target as HTMLInputElement).dataset["label"] as string)
	}

	const ref = useRef(null)

	useOutsideClick(ref, () => setIsOpen(false))

	return (
		<DropListWrapper ref={ref} id={id} onClick={handlerOpen}>
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
