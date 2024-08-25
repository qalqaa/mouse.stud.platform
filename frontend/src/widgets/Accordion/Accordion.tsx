import React, { useEffect, useRef, useState } from 'react'
import './Accordion.css'

interface AccordionProps {
	data: AccordionItem[]
}

interface AccordionItem {
	id: number
	title: string
	description: string
	status: string
	starts: string
	ends: string
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleSection = (index: number) => {
		setOpenIndex(prevIndex => (prevIndex === index ? null : index))
	}

	return (
		<div className='px-10 py-5'>
			<ul className='accordion_list rounded-lg py-5 px-10 text-start'>
				{data.map(item => (
					<li key={item.id}>
						<AccordionSection
							{...item}
							isOpen={openIndex === item.id}
							onClick={() => toggleSection(item.id)}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

interface AccordionSectionProps extends AccordionItem {
	isOpen: boolean
	onClick: () => void
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
	title,
	description,
	status,
	starts,
	ends,
	isOpen,
	onClick,
}) => {
	const contentRef = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState<string>('0px')

	const dateStart = new Date(starts).toLocaleDateString('ru-RU')
	const dateEnds = new Date(ends).toLocaleDateString('ru-RU')

	useEffect(() => {
		if (contentRef.current) {
			setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
		}
	}, [isOpen])

	const getStatusClass = () => {
		const statusClasses = {
			active: 'activeStatus',
			future: 'futureStatus',
			archived: 'archivedStatus',
		}
		return `status ${statusClasses[status as keyof typeof statusClasses] || ''}`
	}

	return (
		<div className='my-2'>
			<div className='accordion-title' onClick={onClick}>
				<div className='flex relative'>
					<img
						className={`arrow-right absolute top-2 -left-6 transition ${
							isOpen ? 'rotate-90' : ''
						}`}
						src='../../../arrow-right.svg'
						alt='Стрелка'
					/>
					<div className='flex w-full justify-between text-center items-center'>
						<div className='flex gap-3'>
							<h3
								className={`accordion_item_title font-medium ${
									isOpen ? 'active_title' : ''
								}`}
							>
								{title}
							</h3>
							<p className={getStatusClass()}>{status}</p>
						</div>
						<p className='text-lg'>
							{dateStart} — {dateEnds}
						</p>
					</div>
				</div>
			</div>
			<div
				ref={contentRef}
				className='accordion-content flex flex-col gap-5'
				style={{
					maxHeight: height,
					overflow: 'hidden',
					transition: 'max-height 0.3s ease-in-out',
				}}
			>
				<div className='accordion-content-inner'>
					<h4 className='text-xl font-semibold'>Описание</h4>
					<p className='text-lg'>{description}</p>
				</div>
				<button className='h-12 text-lg ml-1'>Прикрепить решение</button>
			</div>
		</div>
	)
}

export default Accordion
