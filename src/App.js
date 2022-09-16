import {Canvas, useFrame, useThree} from "@react-three/fiber";
import Helpers from "./components/Helpers";
import Light from "./components/Light";
import {Physics, useBox, usePlane, useSphere} from '@react-three/cannon'
import Plane, {Borders} from "./components/Plane";
import Box from "./components/Box";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing"

function Mouse() {
  const { viewport } = useThree()
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [10] }))
  return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 9))
}


function App() {
  return (
    <Canvas gl={{ stencil: false, antialias: false }}  shadows camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}>
      {/*<Helpers/>*/}
      <Light/>

      <Physics gravity={[0, -50, 0]} defaultContactMaterial={{ restitution: .1 }}>
        <group position={[0, 0, -10]}>
          <Mouse/>
          <Box/>
          <Borders/>
        </group>
      </Physics>

      <EffectComposer>
        <SSAO radius={0.4} intensity={50} luminanceInfluence={0.4} color="red" />
        <Bloom intensity={1.25} kernelSize={3} luminanceThreshold={0.5} luminanceSmoothing={0.0} />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
