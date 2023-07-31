 import React from "react";
import styled from "styled-components";

const Section=styled.div`
  display:flex;
  justify-content:center;
  justify-content:space-between;
  align-items:center;
  
  position:fixed;
  background:#13022e;
  
  // #13022e
  // #210251

`
const Container=styled.div`
width:1540px;
height:90px;
display:flex;
justify-content:center;
  justify-content:space-between;
  align-items:center;
 
 
  
`
const Links=styled.div`
display:flex;
align-items:center;
gap:50px;
`;

const Logo=styled.img`
height:80px;
width:130px;
`

;


const List=styled.ul`
display:flex;
gap:40px;
list-style:none;
`;

const ListItem=styled.li`
cursor:pointer;
`;
const Icons=styled.div`
display:flex;
align-items:center;
gap:20px;
cursor:pointer;
`

const Icon=styled.img`
width:20px;
cursor:pointer;
`;
const Button=styled.button`
width:100px;
padding:10px;
background-color:#da4ea2;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
`;





const Navbar = () => {
    return ( 
        <Section >
          <Container>
          <Links>
          <Logo src="./img/mplogo.png"></Logo>
          {/* <List>
            <ListItem >Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
            

          </List> */}
           <ul id="navbarul" >
      <li id="navbarli">
        <a  href="#Home">Home</a>
      </li>
      <li  id="navbarli">
        <a  href="#Works">About</a>
      </li>
      <li id="navbarli">
        <a  href="#ProjectPage">Works</a>
      </li>    
      <li id="navbarli">
        <a  href="#Contact">Contact</a>
      </li>    
    </ul>
          </Links>
          <Icons>
            <Icon src="./img/search.png"></Icon>
            
          <a className="btn" href="#Contact">Hire now</a>
          </Icons>
         
          </Container> 
         </Section>
       
     );
}
 
export default Navbar;