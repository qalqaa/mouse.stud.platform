import { createSlice } from '@reduxjs/toolkit'
import { getUser, githubAuthenticate } from './authActions'

export interface IinitialState {
	isLoading: boolean
	userData: IuserData | null
}

export interface IuserData {
	email: string
	id: string
}

const initialState: IinitialState = {
	isLoading: false,
	userData: null,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state) {
			state.userData = null
		},
	},
	extraReducers: builder => {
		builder
			.addCase(githubAuthenticate.pending, state => {
				state.isLoading = true
			})
			.addCase(githubAuthenticate.rejected, state => {
				state.isLoading = false
			})
			.addCase(githubAuthenticate.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(getUser.pending, state => {
				state.isLoading = true
			})
			.addCase(getUser.rejected, state => {
				state.userData = null
				state.isLoading = false
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.userData = action.payload
				state.isLoading = false
			})
	},
})

export const { logout } = slice.actions
export default slice.reducer
