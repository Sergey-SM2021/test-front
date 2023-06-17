import { useAppSelector } from "app/providers/redux"
import { ModalWrapper, Shadow } from "./Modal.style"
import { ModalContent } from "./ModalContent"
import { useOutsideClick } from "shared/hooks/useOutsideClick"
import { useRef } from "react"
import { close } from "feature/send/model/send"
import { useDispatch } from "react-redux"

export const Modal = () => {
	const { isOpen, error, isLoading } = useAppSelector(
		(state) => state.send.modal
	)
	const dispatch = useDispatch()

	const ref = useRef(null)

	useOutsideClick(ref, () => {
		dispatch(close())
	})

	if (isOpen) {
		return (
			<Shadow>
				<ModalWrapper ref={ref}>
					<ModalContent success={!error.length} />
				</ModalWrapper>
			</Shadow>
		)
	}

	return null
}
