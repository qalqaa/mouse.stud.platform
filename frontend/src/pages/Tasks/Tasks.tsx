import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store/store'
import { getTask } from '../../app/store/tasksActions'
import Accordion from '../../widgets/Accordion'

const Tasks: React.FC = () => {
	const dispatch = useAppDispatch()
	const taskData = useAppSelector(state => state.tasks.taskData)

	useEffect(() => {
		dispatch(getTask())
	}, [dispatch])
	return (
		<>
			<div className='h-screen'>
				{taskData && <Accordion data={taskData} />}
			</div>
		</>
	)
}

export default Tasks