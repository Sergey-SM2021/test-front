import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser, sex } from "../type/user"

const initialState: IUser = {
	about: "",
	primaryInfo: {
		phone: "89168518338",
		mail: "sergey2003.k.96@gmail.com",
	},
	personalData: {
		name: "Сергей",
		nickname: "",
		sex: sex.man,
		surename: "Кузнецов",
	},
	secondaryData: {
		advantages: [],
		checkbox: [],
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
		setPersonalData(state, payload: PayloadAction<IUser["personalData"]>) {
			state.personalData = payload.payload
			return state
		},
		setSecondaryData(state, payload: PayloadAction<IUser["secondaryData"]>) {
			state.secondaryData = payload.payload
			return state
		},
	},
})

export const {
	actions: { setPrimaryInfo, setPersonalData, setSecondaryData },
	reducer,
} = userSlice
