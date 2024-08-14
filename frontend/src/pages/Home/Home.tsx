import axios from 'axios'
import React, { useEffect } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { getUser, githubAuthenticate } from '../../app/store/authActions'
import { useAppDispatch, useAppSelector } from '../../app/store/store'
import Header from '../../entities/Header/Header'
import { useTheme } from '../../features/ui/ThemeContext/ThemeContext'
import Loader from '../../shared/Loader/Loader'
import './Home.css'

const Home: React.FC = () => {
	const { theme } = useTheme()

	const gitHubHandler = async () => {
		const { data } = await axios.get(
			'http://localhost:8000/api/auth/o/github/?redirect_uri=http://localhost:5173'
		)
		window.location.assign(data.authorization_url)
	}

	const dispatch = useAppDispatch()
	const [queryParams, setQueryParams] = useSearchParams()
	const userData = useAppSelector(state => state.auth.userData)
	const isLoading = useAppSelector(state => state.auth.isLoading)

	const code = queryParams.get('code')
	const access = localStorage.getItem('token')

	useEffect(() => {
		if (code) {
			dispatch(
				githubAuthenticate({
					code,
				})
			)
		}
		if (access) {
			dispatch(getUser(access))
		}
		setQueryParams('')
		return () => {}
	}, [code, access])
	return (
		<div className='homepage-container flex'>
			{userData ? <Header theme={theme} /> : null}
			<div className='w-full h-screen'>
				{isLoading ? <Loader /> : null}
				{userData ? (
					<Outlet />
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
