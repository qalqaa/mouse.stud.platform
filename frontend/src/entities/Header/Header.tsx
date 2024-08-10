import React from 'react'
import { Link } from 'react-router-dom'
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
				<li>
					<Link className='flex flex-col justify-center gap-3' to={'/profile'}>
						<div className='flex justify-center '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								className='bi bi-person-circle'
								viewBox='0 0 16 16'
							>
								<path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0' />
								<path
									fill-rule='evenodd'
									d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1'
								/>
							</svg>
						</div>
						<p>Профиль</p>
					</Link>
				</li>
				<li className='flex flex-col justify-center gap-3'>
					<Link className='flex flex-col justify-center gap-3' to={'/tasks'}>
						<div className='flex justify-center '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='#60c4dc'
								className='bi bi-list-task'
								viewBox='0 0 16 16'
							>
								<path
									fill-rule='evenodd'
									d='M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z'
								/>
								<path d='M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z' />
								<path
									fill-rule='evenodd'
									d='M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z'
								/>
							</svg>
						</div>
						<p>Задания</p>
					</Link>
				</li>
				<li className='flex flex-col justify-center gap-3'>
					<Link className='flex flex-col justify-center gap-3' to={'/help'}>
						<div className='flex justify-center '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='#60c4dc'
								className='bi bi-question-square'
								viewBox='0 0 16 16'
							>
								<path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z' />
								<path d='M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94' />
							</svg>
						</div>
						<p>Помощь</p>
					</Link>
				</li>
				<li className='flex flex-col justify-center gap-3'>
					<Link className='flex flex-col justify-center gap-3' to={'/rating'}>
						<div className='flex justify-center '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='#60c4dc'
								className='bi bi-graph-up-arrow'
								viewBox='0 0 16 16'
							>
								<path
									fill-rule='evenodd'
									d='M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5'
								/>
							</svg>
						</div>
						<p>Рейтинг</p>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header
