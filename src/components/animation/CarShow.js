import {
  OrbitControls,
  PerspectiveCamera,
  CubeCamera,
  Environment,
  ScrollControls,
} from "@react-three/drei";
import { Ground } from "./Ground";
import { Car } from "./Car";
import { Rings } from "./Rings";
import { Boxes } from "./Boxes";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { FloatingGrid } from "./FloatingGrid";
import { Scroll } from "@react-three/drei";

export function CarShow() {
  return (
    <>

      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} enableZoom={false} />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
      <FloatingGrid />
      <Boxes />
      <Rings />

      <EffectComposer>
  
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3} 
          width={300}
          height={300} 
          kernelSize={5} 
          luminanceThreshold={0.15} 
          luminanceSmoothing={0.025} 
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} 
          offset={[0.0005, 0.0012]} 
        />
      </EffectComposer>

      {/* <ScrollControls pages={1} damping={0.25}>
      <Scroll html>
<div className="flex justify-center bg-yellow-500 w-screen">
<h1 className="text-red-500 font-bold text-xl text-center">
  this is me
</h1>
</div>
    </Scroll>
      </ScrollControls> */}
    </>
  );
}
