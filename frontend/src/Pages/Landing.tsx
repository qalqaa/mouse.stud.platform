import Tilt from 'react-parallax-tilt'
import TypingName from '../Features/ui/TypingName/TypingName'
import './Landing.css'

function Landing() {
	return (
		<>
			<div className='overflow-hidden w-100 landing-background'>
				<Tilt
					className='flex flex-col gap-5 tilt'
					tiltMaxAngleX={5}
					tiltMaxAngleY={5}
					glareEnable={false}
					glareMaxOpacity={0}
					scale={1}
					transitionSpeed={250}
					gyroscope={true}
				>
					<TypingName text='Mouse Study Platform' speed={70} isTitle={true} />
					<TypingName
						text='Курс по Frontend разработке на React'
						speed={38}
						isTitle={false}
					/>
					<button className='landing-button px-20 py-3'>Перейти к курсу</button>
				</Tilt>
			</div>
		</>
	)
}

export default Landing
