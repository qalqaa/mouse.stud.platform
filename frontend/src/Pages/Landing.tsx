import TypingName from '../Features/ui/TypingName/TypingName'
import './Landing.css'

function Landing() {
	return (
		<>
			<div className='landing-background'>
				<TypingName text='Mouse Study Platform' speed={70} isTitle={true} />
				<div className='mb-8'>
					<TypingName
						text='Курс по Frontend разработке на React'
						speed={38}
						isTitle={false}
					/>
				</div>
				<button className='landing-button px-20 py-3'>Перейти к курсу</button>
			</div>
		</>
	)
}

export default Landing
