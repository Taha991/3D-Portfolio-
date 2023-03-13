import styled from "styled-components";
import { Contact } from "../components/Contact"
import { Main } from "../components/Main"
import { Projects } from "../components/Projects"
import { Who } from "../components/Who"


const Container = styled.div`
  height: 100vh;
  background: red;

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
