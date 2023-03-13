import React from 'react'
import styled from "styled-components";


const Section = styled.div`
  height: 100%;
  background-color: blue;
  // to go to middle every time i use scroll
  scroll-snap-align: center;

  }
`;
export const Projects = () => {
  return (
    <Section>Projects</Section>
  )
}
