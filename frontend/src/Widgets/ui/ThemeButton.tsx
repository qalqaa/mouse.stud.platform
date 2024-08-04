import React from 'react'
import { useTheme } from '../../Features/ui/ThemeContext/ThemeContext'

const ThemeButton: React.FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<button
			className='fixed bottom-4 right-4 h-12 w-12 z-10'
			onClick={toggleTheme}
		>
			<img
				src={theme === 'light' ? '../../../moon.svg' : '../../../sun.svg'}
				alt={'toggle to ' + theme + 'theme'}
			/>
		</button>
	)
}

export default ThemeButton
