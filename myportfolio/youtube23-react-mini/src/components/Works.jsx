import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import '../App.css';

import Development from "./Development";
import Design from "./Design";
import WebDesign from "./WebDesign";


const data = [
 

  "Development",
  "Web Design",
  "Socials",
];
const Section = styled.div`
   height: 90vh;
   scroll-snap-align:center;
   display:flex;
   justify-content:center;
   position: relative;
   color: black;
   font-size: 14px;
   font-weight: 300;
 `;


const Container = styled.div`
  width:1400px;
  display:flex;
  justify-content:space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`
const Left = styled.div`
   flex:1;
   display:flex;
   align-items:center;
   
   
   @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
   
  }

`

const List = styled.ul`
list-style:none;
display:flex;
flex-direction:column;
gap:60px;

padding-top:5px;
padding-left:40px;

`
const moveTextAnimation = keyframes`
  to {
    width: 100%;
  }
`;
const ListItem = styled.li`

font-size:80px;
font-weight:bold;
cursor:pointer;
color:transparent;
-webkit-text-stroke: 1px white;
position:relative;


&::after{
  content: "${(props) => props.text}";
  position:absolute;
  top:0;
  left:0;
  color:pink;

  width:0px;
  overflow:hidden;
  white-space:nowrap;
}

&:hover::after {
  animation: ${moveTextAnimation} 0.5s linear both;
}
`;




const Right = styled.div`
padding-top:60px;
  height:70%;
   flex:1;
  //  display: flex;
  // align-items: top;
`
const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section id="Works">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Development" ? (<Development></Development>) : work === "Web Design" ? (<WebDesign></WebDesign>) :  (<Design></Design>)}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;

