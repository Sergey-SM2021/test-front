import { type RefObject, useEffect } from "react"

export const useOutsideClick = (
	ref: RefObject<HTMLElement>,
	cb: () => void
) => {
	useEffect(() => {
		const fn = (e: MouseEvent) => {
			if (!ref.current?.contains(e.target)) {
				cb()
			}
		}

		document.addEventListener("mousedown", fn)
		return () => {
			document.removeEventListener("mousedown", fn)
		}
	}, [])
}
