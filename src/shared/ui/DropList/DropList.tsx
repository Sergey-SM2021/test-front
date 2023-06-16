import Vector from "./assets/Vector.svg"
import { useState } from "react"
import {
	DropListArrowWrapper,
	DropListItem,
	DropListList,
	DropListWrapper,
} from "./DropList.style"

interface IDropList {
  list: { name: string; id: string }[];
  value: { name: string; id: string };
  onChange: (value: { name: string; id: string }) => void;
}

export const DropList = ({ list, value, onChange }: IDropList) => {
	const [isOpen, setIsOpen] = useState(false)
	const handlerOpen = () => {
		setIsOpen((prev) => !prev)
	}
	return (
		<DropListWrapper onClick={handlerOpen}>
			{value.name ?? "Не выбрано"}
			<DropListArrowWrapper>
				<Vector />
			</DropListArrowWrapper>
			{isOpen ? (
				<DropListList>
					{list.map((el) => (
						<DropListItem
							key={el.id}
							id={el.id}
							onClick={() => {
								onChange(el)
							}}
						>
							{el.name}
						</DropListItem>
					))}
				</DropListList>
			) : null}
		</DropListWrapper>
	)
}
