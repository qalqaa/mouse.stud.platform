import React from 'react'
import Accordion from '../../widgets/Accordion'
import sections from '../../widgets/Accordion/testProps'

const Tasks: React.FC = () => {
	return (
		<>
			<div className='h-screen'>
				<Accordion data={sections} />
			</div>
		</>
	)
}

export default Tasks
