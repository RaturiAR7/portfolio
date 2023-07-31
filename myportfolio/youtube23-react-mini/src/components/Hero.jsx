import styled from "styled-components"
import React from "react";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import {OrbitControls,Sphere ,MeshDistortMaterial,} from "@react-three/drei";
import Who from "./Who";
//import { useState } from 'react';
const Section=styled.div`
   height: 100vh;
  
   scroll-snap-align:center;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:space-between;
   

`
const Container=styled.div`
   height: 100vh;
  
   scroll-snap-align:center;
   width:1400px;
   display:flex;
   justify-content:space-between;
  

`

const Left =styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:30px;
`
const Title =styled.h1`
font-size:80px;

`


const WhatWeDo =styled.div`
display:flex;
align-items:center;
gap:10px;
`

const Line =styled.img`
height:5px;
`
const Subtitle =styled.h2`

color:da4ea2#
`
const Desc =styled.p`
font-size:24px;
color:lightgray;

`

const Right=styled.div`
flex:3;
position:relative;
`
const Img=styled.img`
border-radius:100%;
padding-top:0px;
// width:700px;
// height:520px;
width:680px;
height:480px;
object-fit:contain;
position:absolute;
top:0;
bottom:0;
left:0;
right:0px;
margin:auto;
animation:animate 2s infinite ease alternate;
@keyframes animate{
to
{
   transform:translateY(40px);
}
}

`
const Hero = () => {
 
    return ( 
        <Section id="Home">
         <Navbar></Navbar>
         <Container>
            <Left>
               <Title>Hi,I'm Maahi</Title>
              <WhatWeDo>
                  <Line src="./img/line.png"></Line>
                  <Subtitle>What I Do</Subtitle>
               </WhatWeDo>
               <Desc>I enjoy creating visually appealing websites.Welcome to my digital playground where I turn ideas into reality.</Desc>
               {/* <Button > <a href="#Who"></a> </Button> */}
               <a className="btn" href="#Who">learn more</a>
               </Left> 
               
            <Right>
            <Canvas >
              <OrbitControls enableZoom={false}/>
             <ambientLight intensity={0.3}/>
             <directionalLight position={[3,2,1]}/>
             <Sphere args={[1,800,900]} scale={2.5}>
           <MeshDistortMaterial color="#da4ea2" attach="material" distort={0.3} speed={2}/>
           {/* #da4ea2  #39276b*/}
           </Sphere>
            </Canvas>
            <Img src="./img/pic1.png"></Img> 
           
            </Right>
         </Container>
        </Section>
     );
}
  
export default Hero;