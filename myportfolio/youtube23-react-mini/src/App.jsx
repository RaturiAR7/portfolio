import styled from "styled-components"
import "./App.css"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Project from "./components/Project"
import Maahi from "./components/Maahi"
import Skill from "./components/skill"

const Container=styled.div`
   height: 100vh;
  //  scroll-snap-type:y mandatory;
  //  scroll-behaviour:smooth;
   overflow-y:auto;
   scrollbar-width:none;
   color:white;
   background:url("./img/bg.jpeg");

   &::-webkit-scrollbar{
    display:none;
   }


`
function App() {

  return (
    <Container>
     
      <Hero></Hero>
      <Who></Who>
      <Works></Works>
      <Maahi></Maahi>
      <Project></Project>
      <Skill></Skill>
      <Contact></Contact>
    </Container>

  )
}

export default App
