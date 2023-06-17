import { configureStore } from "@reduxjs/toolkit"
import { reducer as userReducer } from "entity/user/model/user"
import { reducer as sendReducer } from "feature/send/model/send"
import { PropsWithChildren } from "react"
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const store = configureStore({
	reducer: {
		user: userReducer,
		send: sendReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type IReduxProvider = PropsWithChildren;

export const ReduxProvider = ({ children }: IReduxProvider) => {
	return <Provider store={store}>{children}</Provider>
}

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
