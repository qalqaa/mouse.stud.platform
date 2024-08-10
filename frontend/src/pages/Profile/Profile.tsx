import React from 'react'
import { useAppSelector } from '../../app/store/store'

const Profile: React.FC = () => {
	const state = useAppSelector(state => state.auth.userData)
	return <div>{state?.id}</div>
}

export default Profile
