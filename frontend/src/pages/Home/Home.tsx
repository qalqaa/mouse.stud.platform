import React from 'react'
import Header from '../../entities/Header/Header'
import { useTheme } from '../../features/ui/ThemeContext/ThemeContext'
import './Home.css'

const Home: React.FC = () => {
	const { theme } = useTheme()
	return (
		<div>
			<Header theme={theme} />
			<h2>Home Page</h2>
		</div>
	)
}

export default Home
