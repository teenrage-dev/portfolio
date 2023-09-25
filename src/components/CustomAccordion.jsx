import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import '../styles/components/_customAccordion.scss';

const items = [
  {
    heading: 'Skills',
    contentTop: 'Lorem ipsum dolor sit amet consectetur ',
    contentBottom:
      'adipisicing elit. Omnis, eius harum. Harum architecto voluptas cumque dolorem eligendi mollitia, dicta sit eaque! Repudiandae recusandae vitae quidem error accusantium? Accusamus labore alias odit dolor obcaecati deleniti unde dolorum quae iusto aut? Nisi deleniti corporis reprehenderit fugiat expedita aspernatur nihil provident laudantium voluptatum! ',
  },
  {
    heading: 'Awards',
    contentTop: 'Lorem ipsum dolor sit amet consectetur ',
    contentBottom:
      'adipisicing elit. Omnis, eius harum. Harum architecto voluptas cumque dolorem eligendi mollitia, dicta sit eaque! Repudiandae recusandae vitae quidem error accusantium? Accusamus labore alias odit dolor obcaecati deleniti unde dolorum quae iusto aut? Nisi deleniti corporis reprehenderit fugiat expedita aspernatur nihil provident laudantium voluptatum! ',
  },
  {
    heading: 'Experience',
    contentTop: 'Lorem ipsum dolor sit amet consectetur ',
    contentBottom:
      'adipisicing elit. Omnis, eius harum. Harum architecto voluptas cumque dolorem eligendi mollitia, dicta sit eaque! Repudiandae recusandae vitae quidem error accusantium? Accusamus labore alias odit dolor obcaecati deleniti unde dolorum quae iusto aut? Nisi deleniti corporis reprehenderit fugiat expedita aspernatur nihil provident laudantium voluptatum! ',
  },
  {
    heading: 'Credentials',
    contentTop: 'Lorem ipsum dolor sit amet consectetur ',
    contentBottom:
      'adipisicing elit. Omnis, eius harum. Harum architecto voluptas cumque dolorem eligendi mollitia, dicta sit eaque! Repudiandae recusandae vitae quidem error accusantium? Accusamus labore alias odit dolor obcaecati deleniti unde dolorum quae iusto aut? Nisi deleniti corporis reprehenderit fugiat expedita aspernatur nihil provident laudantium voluptatum! ',
  },
];

export const CustomAccordion = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleAccordionChange = (index) => {
    setActiveItem(index[0]);
  };

  return (
    <Accordion
      allowZeroExpanded
      className='accordion-list'
      onChange={handleAccordionChange}
    >
      {items.map((item, index) => (
        <AccordionItem
          uuid={index}
          key={item.uuid}
          className={
            activeItem === index
              ? 'accordion-item accordion-item-active'
              : 'accordion-item'
          }
        >
          <AccordionItemHeading className='accordion-item-title'>
            <AccordionItemButton className='accordion-item-title-btn'>
              {item.heading}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='accordion-item-text'>
            <p>{item.contentTop}</p>
            <p>{item.contentBottom}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
