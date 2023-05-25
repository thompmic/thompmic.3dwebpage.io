import React from 'react';
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Datacenter from "./Datacenter";
import styled from 'styled-components';



const Desc = styled.div`
  width: 200px;
  height: 140px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;
`;


const DataBase = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <OrbitControls enableZoom = {true} autoRotate/>
      <Datacenter/>
      </Stage>
    </Canvas>
    <Desc>
    Experienced database specialist proficient in designing and optimizing robust database solutions, ensuring efficient data management and seamless information retrieval for enhanced performance and decision-making  
    </Desc>
    </>
  );
};

export default DataBase;