import { createSlice } from '@reduxjs/toolkit'
import { githubAuthenticate } from './authActions'

const slice = createSlice({
	name: 'auth',
	initialState: {
		isAuth: false,
		isLoading: false,
	},
	reducers: {
		setAuth(state, action) {
			state.isAuth = action.payload
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
	},
})

export const { setAuth } = slice.actions
export default slice.reducer
