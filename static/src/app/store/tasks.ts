import { createSlice } from '@reduxjs/toolkit'
import { getTask } from './tasksActions'

export interface IinitialState {
	isLoading: boolean
	taskData: ItaskData[] | null
}

export interface ItaskData {
	id: number
	title: string
	description: string
	status: string
	starts: string
	ends: string
}

const initialState: IinitialState = {
	isLoading: false,
	taskData: null,
}

const slice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getTask.pending, state => {
				state.isLoading = true
			})
			.addCase(getTask.rejected, state => {
				state.taskData = null
				state.isLoading = false
			})
			.addCase(getTask.fulfilled, (state, action) => {
				state.taskData = action.payload
				state.isLoading = false
			})
	},
})

export default slice.reducer
