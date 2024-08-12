import React from 'react';
import './Accordion.css';
import { useState } from 'react';

interface AccordionProps {
  sections: { title: string | number; text: string | number | null }[];
}

export const Accordion: React.FC<AccordionProps> = ({ sections }) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className='accordion_list flex flex-col max-w-96 m-8 p-6 border rounded-xl overflow-hidden	'>
      {sections.map((section, index) => (
        <li className='accordion_item text-2xl' key={index}>
          <h3 onClick={() => toggleSection(index)} className={`accordion_item_title p-4 font-medium ${activeIndex === index ? 'active_title' : ''}`}>{section.title}</h3>
          <p className={`accordion_item_text text-xl px-6 transition-max-height mt-2 duration-500 ease-in-out overflow-hidden border-t ${activeIndex === index ? 'max-h-screen border-b' : 'max-h-0'
            }`}
          >{section.text} </p>
        </li>
      ))}
    </ul>
  );
};