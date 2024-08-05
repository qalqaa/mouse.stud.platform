import { useEffect, useState } from 'react'
import { useTheme } from '../../../Features/ui/ThemeContext/ThemeContext'
import './TypingName.css'

interface ITypingTextProps {
	text: string
	speed: number
	isTitle: boolean
}

const TypingText: React.FC<ITypingTextProps> = ({ text, speed, isTitle }) => {
	const [displayedText, setDisplayedText] = useState('')
	const [index, setIndex] = useState(0)
	const [showCursor, setShowCursor] = useState(true)
	const { theme } = useTheme()

	useEffect(() => {
		if (index < text.length) {
			const timeoutId = setTimeout(() => {
				setDisplayedText(displayedText + text.charAt(index))
				setIndex(index + 1)
			}, speed)

			return () => clearTimeout(timeoutId)
		} else {
			setTimeout(() => setShowCursor(false), 700)
		}
	}, [index, text, displayedText, speed])

	return (
		<div
			className={`typing-container flex items-center ${
				!showCursor ? 'active' : null
			}`}
		>
			{!showCursor && isTitle ? (
				<img
					className={`h-12 mr-3 inline logo-animation`}
					src={
						theme === 'light'
							? `../../../../react-logo.svg`
							: `../../../../react-logo-inversed.svg`
					}
					alt=''
				/>
			) : null}
			{isTitle ? (
				<h1 className='typing-text'>{displayedText}</h1>
			) : (
				<p className='typing-text'>{displayedText}</p>
			)}
			{showCursor && (
				<span className={`cursor ${!isTitle ? 'paragraph' : null}`}></span>
			)}
		</div>
	)
}

export default TypingText
