import * as React from 'react'
import './Accordion.css';
import { useState } from 'react';

interface AccordionProps {
  sections: { title: string | number; text: string | number | null }[];
}

const Accordion: React.FC<AccordionProps> = ({ sections }) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className='accordion_list flex text-start flex-col m-8 p-6 rounded-xl overflow-hidden	'>
      {sections.map((section, index) => (
        <li className='accordion_item text-2xl' key={index}>
          <h3 onClick={() => toggleSection(index)} className={`accordion_item_title p-4 font-medium ${activeIndex === index ? 'active_title' : ''}`}>{section.title}</h3>
          <p className={`accordion_item_text text-xl px-6 transition-max-height mt-2 overflow-hidden duration-100 ease-in-out ${activeIndex === index ? 'max-h-screen duration-1000 ' : 'max-h-0'
            }`}
          >{section.text} </p>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;