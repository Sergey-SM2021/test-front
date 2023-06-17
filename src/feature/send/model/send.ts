import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as api from "../api/send"
import { IUser } from "entity/user/type/user"

export const sendData = createAsyncThunk("send", async (data: IUser) => {
	await api.send(data)
})

const send = createSlice({
	name: "send",
	initialState: {
		modal: {
			isOpen: false,
			error: "",
			isLoading: false,
		},
	},
	reducers: {
		close(state) {
			state.modal.isOpen = false
			return state
		},
	},
	extraReducers(builder) {
		builder
			.addCase(sendData.fulfilled, (state) => {
				state.modal.isOpen = true
				state.modal.isLoading = false
				return state
			})
			.addCase(sendData.rejected, (state, payload) => {
				state.modal.isOpen = true
				state.modal.isLoading = false
				state.modal.error = payload.payload ?? "Error"
				return state
			})
			.addCase(sendData.pending, (state) => {
				state.modal.isLoading = true
				return state
			})
	},
})

export const {
	reducer,
	actions: { close },
} = send
