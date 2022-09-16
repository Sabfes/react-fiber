import {useRef} from "react";
import {useHelper} from "@react-three/drei";
import {DirectionalLightHelper} from "three";

const Light = () => {
  const lightRef = useRef()
  useHelper(lightRef, DirectionalLightHelper, 5, 'black')

  return <>
    <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[512, 512]} />
    <ambientLight intensity={1} />
    {/*<directionalLight position={[0, 5, -4]} intensity={4} />*/}
    <directionalLight position={[0, -15, -0]} intensity={4} color="red" />

  </>
}
export default Light