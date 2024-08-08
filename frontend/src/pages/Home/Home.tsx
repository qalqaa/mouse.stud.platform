import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

	const getJwtToken = () => {
		const href = location.href
		const origin = location.origin
		const params = href.slice(origin.length + 2, undefined)

		if (params) {
			axios
				.post(`http://localhost:8000/api/auth/o/github/?${params}`)
				.then(res => localStorage.setItem('token', res.data.access))
				.finally(() => {
					navigate('/')
				})
		}
	}

	const verifyToken = () => {
		axios
			.post('http://localhost:8000/api/auth/jwt/verify/', {
				token: localStorage.getItem('token'),
			})
			.then(res =>
				res.status === 200 ? null : localStorage.removeItem('token')
			)
	}

	useEffect(() => {
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
