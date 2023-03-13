import React from 'react'
import styled from "styled-components";


const Section = styled.div`
  height: 100%;
  
  // to go to middle every time i use scroll
  scroll-snap-align: center;
  }
`;


export const Main = () => {
  return (
    <Section>Main</Section>
  )
}
