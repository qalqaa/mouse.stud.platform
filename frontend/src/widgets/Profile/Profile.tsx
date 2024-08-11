import React from 'react'
import { useAppSelector } from '../../app/store/store'
import './Profile.css'

const Profile: React.FC = () => {
	const state = useAppSelector(state => state.auth.userData)
	return (
		<>
			<div className='fade-component'>
				<div className='flex flex-col items-center justify-center card'>
					<img className='w-16' src='../../../user_photo.svg' alt='' />
					<h3 className='title'>qalqaa</h3>
					<ul className='flex flex-col gap-3 py-5'>
						<li className='list-item'>
							<label htmlFor='id'>Uid</label>
							<p className='item-text' id='uid'>
								{state ? state?.id : 'Тут будет uid'}
							</p>
						</li>
						<li className='list-item'>
							<label htmlFor='email'>Email</label>
							<p className='item-text' id='email'>
								{state ? state?.email : 'Тут будет email'}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Profile
