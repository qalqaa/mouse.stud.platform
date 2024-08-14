import React, { useEffect, useRef, useState } from 'react'
import './Accordion.css'

interface AccordionProps {
	data: AccordionItem[]
}

interface AccordionItem {
	title: string
	text: string
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleSection = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className='px-10 py-5'>
			<ul className='accordion_list rounded-lg py-5 px-10 text-start'>
				{data.map((item, index) => (
					<li>
						<AccordionSection
							key={index}
							title={item.title}
							text={item.text}
							isOpen={openIndex === index}
							onClick={() => toggleSection(index)}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

interface AccordionSectionProps {
	title: string
	text: string
	isOpen: boolean
	onClick: () => void
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
	title,
	text: content,
	isOpen,
	onClick,
}) => {
	const contentRef = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState<string>('0px')

	useEffect(() => {
		if (contentRef.current) {
			setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
		}
	}, [isOpen])

	return (
		<div className='my-2'>
			<div className='accordion-title' onClick={onClick}>
				<div className='flex relative'>
					<img
						className={`arrow-right absolute top-2 -left-6 transition ${
							isOpen ? 'rotate-90' : ''
						}`}
						src='../../../arrow-right.svg'
					/>
					<h3
						className={`accordion_item_title font-medium ${
							isOpen ? 'active_title' : ''
						}`}
					>
						{title}
					</h3>
				</div>
			</div>
			<div
				ref={contentRef}
				className='accordion-content'
				style={{
					maxHeight: height,
					overflow: 'hidden',
					transition: 'max-height 0.3s ease-in-out',
				}}
			>
				<div className='accordion-content-inner'>
					<p className='text-lg'>{content}</p>
				</div>
			</div>
		</div>
	)
}

export default Accordion
