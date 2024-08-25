import { createAsyncThunk } from '@reduxjs/toolkit'

export const getTask = createAsyncThunk(
	'tasks/getTask',
	async (_, thunkAPI) => {
		const access = localStorage.getItem('token')
		try {
			const res = await fetch(`http://localhost:8000/api/v1/study/tasks`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					Authorization: `JWT ${access}`,
				},
			})

			const data = await res.json()

			return data
		} catch (err) {
			return thunkAPI.rejectWithValue('Something went wrong!')
		}
	}
)
