import React from 'react';
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Rip from "./Rip";
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


const GameDesign = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <OrbitControls enableZoom = {true} autoRotate/>
      <Rip/>
      </Stage>
    </Canvas>
    <Desc>
    Passionate game designer dedicated to creating immersive and engaging gaming experiences, combining innovative gameplay mechanics, captivating narratives, and stunning visuals to bring unique worlds to life
    </Desc>
    </>
  );
};

export default GameDesign;