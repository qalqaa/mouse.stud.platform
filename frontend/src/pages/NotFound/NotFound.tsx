import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
	const navigate = useNavigate()
	return (
		<div className='h-screen flex flex-col items-center gap-3 justify-center'>
			<h2>ОШИБКА 404</h2>
			<p className='text-lg'>Страница не найдена</p>
			<button onClick={() => navigate('/')} className='w-1/3'>
				Вернуться на главную
			</button>
		</div>
	)
}

export default NotFound
