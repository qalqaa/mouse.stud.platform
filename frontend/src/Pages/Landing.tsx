import Tilt from 'react-parallax-tilt'
import TypingName from '../Features/ui/TypingName/TypingName'
import './Landing.css'

function Landing() {
	return (
		<>
			<div className='overflow-hidden w-100 landing-background relative'>
				<Tilt
					className='flex flex-col gap-5 background-stripes track-on-window'
					tiltMaxAngleX={10}
					tiltMaxAngleY={10}
					glareEnable={false}
					glareMaxOpacity={0}
					scale={1}
					transitionSpeed={200}
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

					<a href='#section-2'>
						<button className='landing-button px-20 py-3'>
							Перейти к курсу
						</button>
					</a>
				</Tilt>
			</div>
			<div
				id='section-2'
				className='w-100 landing-background flex items-center'
			>
				<div className='left w-1/2 text-left ml-28'>
					<h2>О курсе</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Perspiciatis id, modi tempore ea nam enim recusandae voluptatum amet
						officia architecto soluta nobis quod ipsam minima laudantium quaerat
						incidunt in molestiae.
					</p>
				</div>
				<div className='right w-1/2 justify-middle'></div>
			</div>
		</>
	)
}

export default Landing
