import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import Tilt from 'react-parallax-tilt'
import TypingName from '../Features/ui/TypingName/TypingName'
import './Landing.css'

function Landing() {
	const parallax = useRef<IParallax>(null!)
	const url = (name: string, wrap = false) =>
		`${
			wrap ? 'url(' : ''
		}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
			wrap ? ')' : ''
		}`

	return (
		<>
			<Parallax ref={parallax} pages={2}>
				<ParallaxLayer offset={2} speed={1} />
				<ParallaxLayer
					offset={0}
					speed={0}
					factor={2}
					style={{
						backgroundImage: url('stars', true),
						backgroundSize: 'cover',
					}}
				/>
				<ParallaxLayer offset={0} speed={1}>
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

						<button
							onClick={() => parallax.current.scrollTo(1)}
							className='landing-button px-20 py-3'
						>
							О чем будет этот курс
						</button>
					</Tilt>
				</ParallaxLayer>
				<ParallaxLayer offset={1.3} speed={1}>
					<div className='flex justify-center items-center gap-10 px-28'>
						<div className='left flex flex-col gap-5 w-1/3 text-left items-start'>
							<h2>Об этом курсе</h2>
							<p>
								Добро пожаловать на курс по React от Mouse Study Platform! Этот
								курс разработан для всех, кто хочет освоить один из самых
								популярных и востребованных Frontend фреймворков. В этом курсе
								будет показано как создавать красивые и функциональные сайты с
								помощью React!
							</p>
							<button className='z-10 px-20 py-3'>О чем будет этот курс</button>
						</div>

						<img src={url('bash')} className='w-1/3 bash' />
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	)
}

export default Landing
