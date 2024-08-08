import { createAsyncThunk } from '@reduxjs/toolkit'

export const githubAuthenticate = createAsyncThunk(
	'users/githubAuth',
	async ({ code, state }: { state: string; code: string }, thunkAPI) => {
		if (code && !localStorage.getItem('token')) {
			try {
				const res = await fetch(
					`localhost:8000/api/auth/o/github/?code=${code}&state=${state}`,
					{
						method: 'POST',
					}
				)
				const data = await res.json()
				if (res.status === 201) {
					const { dispatch } = thunkAPI
					const { access } = data
					localStorage.setItem('token', access)
					dispatch(getUser(access))

					return data
				} else {
					return thunkAPI.rejectWithValue('github auth failed!')
				}
			} catch (err) {
				return thunkAPI.rejectWithValue('Something went wrong!')
			}
		} else {
			return thunkAPI.rejectWithValue('github auth cancelled!!')
		}
	}
)

export const getUser = createAsyncThunk(
	'users/me',
	async (access: string, thunkAPI) => {
		try {
			const res = await fetch(`localhost:8000/api/auth/users/me/`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					Authorization: `JWT ${access}`,
				},
			})

			const data = await res.json()

			if (res.status === 200) {
				return data
			} else {
				localStorage.removeItem('token')
				return thunkAPI.rejectWithValue(data)
			}
		} catch (err) {
			localStorage.removeItem('token')
			return thunkAPI.rejectWithValue('Something went wrong!')
		}
	}
)
