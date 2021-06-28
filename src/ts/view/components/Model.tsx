import * as React from "react";
import * as Fiber from '@react-three/fiber';
import * as Drei from "@react-three/drei";

interface Props {
    position?: [number, number,number]
};

const Model: React.FC<Props> = (props) => {
    
    const { scene } = Drei.useGLTF("assets/gltf/model.glb");

  return (
      <group {...props} dispose={null}>
        <primitive scale={[1, 1, 1]} object={scene} />
      </group>
    )
};

export default Model;