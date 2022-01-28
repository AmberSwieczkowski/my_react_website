/** @format */

import React, { useState } from 'react';
import { LocationData } from './LocationAccordionData';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #131313;
`;

const AccordionContainer = styled.div`
  position: absolute;
  top: 10%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width: 80vw;
`;

const AccordionWrap = styled.div`
  background: #141414;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const AccordionDropdown = styled.div`
background: maroon;
color: #fff;
width: 100%;
min-height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-bottom: 1px solid #fff;
border-top: 1px solid #fff;

p {
  font-size: 2rem;
  text-align: center;
}
`


const LocationAccordion = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index) {
            // if clicked info is already active, then close it
            return setClicked(null)
        }

        setClicked(index)
    }
  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <AccordionContainer>
          {LocationData.map((item, index) => {
            return (
              <>
                <AccordionWrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </AccordionWrap>
                {clicked === index ? (
                <AccordionDropdown>
                <p>{item.answer}</p>
                </AccordionDropdown>
                ) : null}
              </>
            );
          })}
        </AccordionContainer>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default LocationAccordion;
