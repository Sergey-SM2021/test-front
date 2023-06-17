import { useAppSelector } from "app/providers/redux"
import { ModalWrapper, Shadow } from "./Modal.style"
import { ModalContent } from "./ModalContent"

export const Modal = () => {
	const { isOpen, error, isLoading } = useAppSelector(
		(state) => state.send.modal
	)
	if (isOpen) {
		return (
			<Shadow>
				<ModalWrapper>
					<ModalContent success={!error.length} />
				</ModalWrapper>
			</Shadow>
		)
	}
	return null
}
