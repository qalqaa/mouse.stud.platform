import React from 'react'
import './Header.css'

interface IHeaderProps {
	theme: 'light' | 'dark'
}

const Header: React.FC<IHeaderProps> = ({ theme }) => {
	const REACT_APP_VERSION = '0.0.0'
	return (
		<div className='header-container'>
			<ul className='header-list h-screen px-3 py-10 gap-10 flex flex-col items-center'>
				<div className='flex flex-col gap-3'>
					<img
						className='w-16'
						src={
							theme === 'light'
								? `../../../../react-logo.svg`
								: `../../../../react-logo-inversed.svg`
						}
						alt=''
					/>
					<p className='version'>v{REACT_APP_VERSION}</p>
				</div>
				<li className='flex flex-col justify-center gap-3'>
					<img className='h-5' src='../../../profile.svg' alt='' />
					<a>Профиль</a>
				</li>
				<li className='flex flex-col justify-center gap-3'>
					<img className='h-5' src='../../../tasks.svg' alt='' />
					<a>Задания</a>
				</li>
				<li className='flex flex-col justify-center gap-3'>
					<img className='h-5' src='../../../help.svg' alt='' />
					<a>Помощь</a>
				</li>
				<li className='flex flex-col justify-center gap-3'>
					<img className='h-5' src='../../../rating.svg' alt='' />
					<a>Рейтинг</a>
				</li>
			</ul>
		</div>
	)
}

export default Header
