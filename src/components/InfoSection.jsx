/** @format */

import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
  // border: 3px solid blue;
`;

const Container = styled.div`
  padding: 1rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  // border: 3px solid red;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 6vw, 2.5rem);
  }

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  title,
  name,
  dob,
  parents,
  siblings,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{title}</h1>
          <h2>{name}</h2>
          <p>{dob}</p>
          <p>{parents}</p>
          <p>{siblings}</p>
          <Button to='/' buttonStyle='btn__secondary'>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <img src={image} alt='home' />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
