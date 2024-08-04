import { useEffect, useState } from 'react'
import './TypingText.css'

interface ITypingTextProps {
	text: string
	speed: number
}

const TypingText: React.FC<ITypingTextProps> = ({ text, speed }) => {
	const [displayedText, setDisplayedText] = useState('')
	const [index, setIndex] = useState(0)
	const [showCursor, setShowCursor] = useState(true)

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
		<div className='typing-container'>
			<h1 className='typing-text'>{displayedText}</h1>
			{showCursor && <span className='cursor'></span>}
		</div>
	)
}

export default TypingText
