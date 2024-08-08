import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { githubAuthenticate } from '../../app/store/authActions'
import { useAppDispatch } from '../../app/store/store'
import Header from '../../entities/Header/Header'
import { useTheme } from '../../features/ui/ThemeContext/ThemeContext'
import './Home.css'

const Home: React.FC = () => {
	const { theme } = useTheme()
	const navigate = useNavigate()
	const [isAuth] = useState(false)

	const gitHubHandler = async () => {
		const { data } = await axios.get(
			'http://localhost:8000/api/auth/o/github/?redirect_uri=http://localhost:5173'
		)
		window.location.assign(data.authorization_url)
	}

	const dispatch = useAppDispatch()
	const [queryParams, setQueryParams] = useSearchParams()

	useEffect(() => {
		const code = queryParams.get('code')
		const state = queryParams.get('state')
		if (code && state) {
			dispatch(
				githubAuthenticate({
					code,
					state,
				})
			)
		}
		return () => {}
	})
	return (
		<div className='homepage-container flex'>
			<Header theme={theme} />
			<div className='w-full h-screen'>
				{isAuth ? (
					<div></div>
				) : (
					<div className='ifNotAuthorized flex flex-col gap-5 h-screen justify-center items-center'>
						<h3>
							Внимание, чтобы продолжить,
							<br /> необходимо авторизоваться через GitHub
						</h3>
						<button onClick={() => gitHubHandler()} className='w-1/4'>
							Авторизоваться
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
