import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser, sex } from "../type/user"

const initialState: IUser = {
	about: "",
	Advantages: [],
	CheckboxGroup: [],
	name: "Кузнецов Сергей",

	nickname: "",
	RadioGroup: 9,
	sex: sex.man,
	surename: "",
	primaryInfo: {
		phone: "89168518338",
		mail: "sergey2003.k.96@gmail.com",
	},
}

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		setPrimaryInfo(state, paylod: PayloadAction<IUser["primaryInfo"]>) {
			state.primaryInfo = paylod.payload
			return state
		},
	},
})

export const {
	actions: { setPrimaryInfo },
	reducer,
} = userSlice
