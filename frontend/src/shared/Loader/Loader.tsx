import React from 'react'
import { Atom } from 'react-loading-indicators'
import './Loader.css'

const Loader: React.FC = () => {
	return (
		<div className='bg-loader flex h-screen w-full justify-center items-center'>
			<Atom color='#60c4dc' size='large' />
		</div>
	)
}

export default Loader
