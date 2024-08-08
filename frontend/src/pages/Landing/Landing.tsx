import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef } from 'react'
import Tilt from 'react-parallax-tilt'
import { useNavigate } from 'react-router-dom'
import TypingName from '../../features/ui/TypingName/TypingName'
import './Landing.css'

const Landing: React.FC = () => {
	const parallax = useRef<IParallax>(null!)
	const url = (name: string, wrap = false) =>
		`${wrap ? 'url(' : ''
		}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''
		}`

	const navigate = useNavigate()

	useEffect(() => {
		const href = location.href
		const origin = location.origin
		const params = href
			.slice(origin.length + 2, undefined)
			.split('&')
			.reduce((prev, cur) => {
				const [name, value] = cur.split('=')
				prev[name] = value
				return prev
			}, {})
		console.log(params);
		const res = fetch(`http://localhost:8000/api/auth/o/github/?code=${params.code}&state=${params.state}`,
			{
				'method': 'POST',
			}
		).then(
			res => res.json()
		).then(data => console.log(data))

	}, [])


	return (
		<>
			<Parallax ref={parallax} pages={3}>
				<ParallaxLayer
					offset={0}
					speed={0}
					factor={3}
					style={{
						backgroundImage: url('stars', true),
						backgroundSize: 'cover',
					}}
				/>
				<ParallaxLayer
					offset={2.2}
					speed={0}
					factor={3}
					className='bg-section-3'
				/>
				<ParallaxLayer offset={0} speed={1}>
					<ParallaxLayer
						offset={6.5}
						speed={-0.4}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							pointerEvents: 'none',
						}}
					>
						<img src={url('earth')} style={{ width: '60%' }} />
					</ParallaxLayer>
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
				<ParallaxLayer speed={-0.3} offset={1} className='comet' />
				<ParallaxLayer speed={-0.3} offset={1} className='comet-1' />
				<ParallaxLayer offset={1} speed={1} className='flex'>
					<div className='flex justify-center items-center gap-16 px-28'>
						<div className='left flex flex-col gap-5 w-1/2 pr-12 text-left items-start'>
							<h2>Об этом курсе</h2>
							<p>
								Добро пожаловать на курс по React от Mouse Study Platform! Этот
								курс разработан для всех, кто хочет освоить один из самых
								популярных и востребованных Frontend фреймворков. В этом курсе
								будет показано как создавать красивые и функциональные сайты с
								помощью React!
							</p>
							<button
								onClick={() => parallax.current.scrollTo(2)}
								className='z-10 px-20 py-3'
							>
								Что такое React?
							</button>
						</div>

						<img src={url('bash')} className='w-1/3 bash' />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={1} className='flex'>
					<div className='flex justify-center items-center gap-10 px-28'>
						<div className='left flex flex-col gap-5 w-1/3 text-left items-start'>
							<h2>Что такое React?</h2>
							<p>
								React — это JavaScript-библиотека для построения
								пользовательских интерфейсов, разработанная Facebook. Она
								позволяет создавать быстрые, интерактивные и масштабируемые
								веб-приложения с минимальным количеством кода.
							</p>
							<button
								onClick={() => navigate('/auth-page')}
								className='z-10 px-20 py-3'
							>
								Зарегистрироваться
							</button>
						</div>

						<img src='../../React-icon.svg' className='w-1/3' />
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	)
}

export default Landing
