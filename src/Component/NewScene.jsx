/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Ground from "./Ground";
import Car from "./Car";
import Ring from "./Ring";
// import { texture } from "three/webgpu";

export default function NewScene() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault fov={50} position={[3, 3, 5]} />

      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh> */}

      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={250} frames={{ Infinity }} near={1} far={1000}>
        {(texture) => {
          <>
            <Environment map={texture} />

            {/* <meshStandardMaterial envMap={texture} /> */}
          </>;
        }}
      </CubeCamera>
      <Car />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={45}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={60}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
      />

      <Ground />
      <Ring />
    </>
  );
}
