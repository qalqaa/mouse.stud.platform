import Tilt from 'react-parallax-tilt'
import TypingName from '../Features/ui/TypingName/TypingName'
import './Landing.css'

function Landing() {
	return (
		<>
			<div className='overflow-hidden w-100 landing-background relative'>
				<Tilt
					className='flex flex-col gap-5 background-stripes track-on-window'
					tiltMaxAngleX={20}
					tiltMaxAngleY={20}
					glareEnable={false}
					glareMaxOpacity={0}
					scale={1}
					transitionSpeed={1000}
					gyroscope={true}
					trackOnWindow={true}
				>
					<div className='inner-element'>
						<img src='../../gem-5.svg' alt='' />
						<img src='../../gem-2.svg' alt='' />
						<img src='../../gem-4.svg' alt='' />
						<img src='../../gem-2.svg' alt='' />
						<img src='../../gem-5.svg' alt='' />
						<img src='../../gem-3.svg' alt='' />
					</div>
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
