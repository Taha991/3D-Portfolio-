import styled from "styled-components";
import { Contact } from "../components/Contact"
import { Main } from "../components/Main"
import { Projects } from "../components/Projects"
import { Who } from "../components/Who"


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  // to remove scroll icon ->
  &::-webkit-scrollbar{
    display: none;
  }

`;
 


function App() {

  return (
   
      <Container>
      <Main/> 
      <Who/>
      <Projects/>
      <Contact/>
      </Container>
      
    
  )
}

export default App
