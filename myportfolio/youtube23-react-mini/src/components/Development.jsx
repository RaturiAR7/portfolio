

import { OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";
import Atom from "./Atom";


const Development = () => {
    return (
            <Canvas>
                {/* <Stage  intensity={0.6}>
                   <Atom></Atom>
              </Stage> */}
               <Atom></Atom>
              <OrbitControls enableZoom={false} autoRotate/>
            </Canvas>
    );
}

export default Development;
//environment="city"