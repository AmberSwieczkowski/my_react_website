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
  padding: 1rem calc((100vw - 1300px) / 3);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px;
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
  text-align: center;
  margin: auto;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 6vw, 2.5rem);
  }

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  // p {
  //   margin-bottom: 2rem;
  // }
`;

const ColumnCenter = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  order: ${({ reverse }) => (reverse ? '2' : '1')};
  text-align: center;
  margin: auto;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 6vw, 2.5rem);
  }

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 6vw, 1.5rem);
  }

  // p {
  //   margin-bottom: 2rem;
  // }

  @media (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  order: ${({ reverse }) => (reverse ? '2' : '1')};
  text-align: center;
  margin: auto;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 6vw, 2.5rem);
  }

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  // p {
  //   margin-bottom: 2rem;
  // }

  @media (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  }
`;

const LocationSection = ({
  title,
  time,
  locationSpecific,
  location1,
  location2,
  parents,
  siblings,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h2>{time}</h2>
          <p>{siblings}</p>
        </ColumnLeft>
        <ColumnCenter>
          <h1>{title}</h1>
        </ColumnCenter>
        <ColumnRight>
          <p>{locationSpecific}</p>
          <p>{location1}</p>
          <p>{location2}</p>
          <p>{parents}</p>
          <p>{siblings}</p>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default LocationSection;
