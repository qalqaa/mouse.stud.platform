import React from 'react'
import { useAppSelector } from '../../app/store/store'

const Profile: React.FC = () => {
	const state = useAppSelector(state => state.auth.userData)
	return (
		<>
			<h2>Profile</h2>
			<div>{state?.id}</div>
			<div>{state?.email}</div>
		</>
	)
}

export default Profile
