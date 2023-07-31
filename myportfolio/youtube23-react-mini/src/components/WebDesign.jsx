

import { OrbitControls } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";
import Mac from "./Mac";
import Model from "./Mac";



const WebDesign = () => {
    return (
            <Canvas>
               
             <Model scale={[0.21,0.21,0.21]}/>
              
              <ambientLight intensity={0.4}/>
              {/* <Mac/> */}
            
              <OrbitControls enableZoom={false} autoRotate/>
            </Canvas>
    );
}

export default WebDesign;