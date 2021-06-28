
import * as React from "react";
import * as Fiber from '@react-three/fiber';
import * as Drei from "@react-three/drei";
import Model from "./Model";
import { useCameraMove } from "./utiles";

interface tryAxes {
  x: number;
  y: number;
  z: number;
}

interface cameraRef {
  position: tryAxes;
}

const DrawCanvas: React.FC = () => {
  
  // refオブジェクト定義
  const cameraRef = React.useRef<cameraRef>();

  // カメラ移動のカスタムフック
  useCameraMove(cameraRef, {x: 3, y: 3, z: 3});

  return (
    <React.Suspense fallback={<span>loading...</span>}>
      <Fiber.Canvas>

        {/* camera components */}
        <Drei.PerspectiveCamera makeDefault position={[0, 50, 50]} ref={cameraRef} />
        <Drei.OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        {/* mesh components */}
        <Drei.Stage>
          <Model />
        </Drei.Stage>

      </Fiber.Canvas>
    </React.Suspense>
  );
};

export default DrawCanvas;