import * as React from "react";
import * as THREE from 'three';
import * as Fiber from '@react-three/fiber';

export default function SampleBox() {

  return (
    <mesh>
      <boxBufferGeometry attach='geometry' />
      <meshBasicMaterial attach='material' color='hotpink' opacity={0.5} transparent />
    </mesh>
  );
};