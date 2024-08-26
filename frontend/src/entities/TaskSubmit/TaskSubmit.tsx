import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './TaskSubmit.css'

interface ITask {
	id: number
	title: string
	description: string
	status: string
	starts: string
	ends: string
}

const TaskSubmit: React.FC = () => {
	const { id } = useParams()
    const [task, setTask] = useState<ITask | null>(null)


    const getTaskById = async () => {
        const access = localStorage.getItem('token')
        try {
            const res = await fetch(`http://localhost:8000/api/v1/study/tasks/${id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `JWT ${access}`,
                },
            })
            const data = await res.json()
            setTask(data)
            console.log(data)
        } catch (error) {
            console.error('Ошибка при получении задачи:', error)
        }
    }

    const getStatusClass = () => {
		const statusClasses = {
			active: 'activeStatus',
			future: 'futureStatus',
			archived: 'archivedStatus',
		}
		return `status ${statusClasses[task?.status as keyof typeof statusClasses] || ''}`
	}
    
        useEffect(() => {
            getTaskById()
    }, [])
	return (
		<div className='task-submit m-5 py-10 px-10 rounded-lg'>
			<div className='flex w-full justify-between text-center items-center relative'>
				<div className='flex gap-3 items-center'>
                    <img src="../../../arrow-right.svg" className='arrow-right absolute top-5 -left-6 transition rotate-180' alt="Стрелка"  onClick={() => {
                        window.history.back()
                    }}/>
					<h2
					>
						{task?.title}
						</h2>
					<p className={getStatusClass()}>{task?.status}</p>
				</div>
				<p className='text-lg'>
					{task?.starts} — {task?.ends}
				</p>
				</div>
                <div className='flex flex-col gap-5'>
                <div className='text-left'>
					<h4 className='text-xl font-semibold'>Описание</h4>
					<p className='text-lg'>{task?.description}</p>
				</div>
                <input className='w-full' type="text" placeholder='Введите ссылку на решение на гитхабе' />
            </div>
		</div>
	)
}

export default TaskSubmit