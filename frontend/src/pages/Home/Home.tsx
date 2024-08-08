import React, { useState } from 'react'
import Header from '../../entities/Header/Header'
import { useTheme } from '../../features/ui/ThemeContext/ThemeContext'
import './Home.css'

const Home: React.FC = () => {
	const { theme } = useTheme()
	const [isAuth] = useState(false)
	const [jwtToken] = useState<string | null>(null)
	return (
		<div className='homepage-container flex'>
			<Header theme={theme} />
			<div className='w-full h-screen'>
				{isAuth ? (
					<div>
						<p>{jwtToken}</p>
					</div>
				) : (
					<div className='ifNotAuthorized flex flex-col gap-5 h-screen justify-center items-center'>
						<h3>
							Внимание, чтобы продолжить,
							<br /> необходимо авторизоваться через GitHub
						</h3>
						<button className='w-1/4'>Авторизоваться</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
