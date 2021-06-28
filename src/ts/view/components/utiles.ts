import * as React from "react";
import * as Fiber from '@react-three/fiber';
import * as Drei from "@react-three/drei";

interface tryAxes {
    x: number;
    y: number;
    z: number;
  }
  
  interface cameraRef {
    position: tryAxes;
  }

  export const useCameraMove = (cameraRef: React.MutableRefObject<cameraRef | undefined>, endAxes: tryAxes): void => {
  
    React.useEffect((): void => {
  
      const loop = (): void => {
  
        // アニメーションループ
        const animationID: number = requestAnimationFrame(loop);
  
        // プロパティを取得するまでリターン
        if (cameraRef.current == null) { return; };
  
        // xの値が3を超えた場合、アニメーション終了
        if (cameraRef.current!.position.x > endAxes.x && cameraRef.current!.position.y > endAxes.y, cameraRef.current!.position.z > endAxes.z) {
          cancelAnimationFrame(animationID);
          return;
        };
  
        cameraRef.current!.position.x += 0.25;
        cameraRef.current!.position.y += 0.25;
        //cameraRef.current!.position.z += 0.25;
      };
  
      loop();
  
    }, []);
};