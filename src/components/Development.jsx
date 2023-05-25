import React from 'react';
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Reac from "./Reac";
import styled from 'styled-components';

const Desc = styled.div`
  width: 200px;
  height: 140px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  bottom: 150px;
  right: 100px;
`;

const Development = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <OrbitControls enableZoom = {false} autoRotate/>
      <Reac/>
      </Stage>
    </Canvas>
    <Desc>
    Versatile developer skilled in creating robust and scalable software solutions, leveraging cutting-edge technologies and best practices to deliver high-quality applications that drive innovation and meet business needs. 
    </Desc>
    </>
  );
};

export default Development;