import {useSphere} from "@react-three/cannon";
import {useThree} from "@react-three/fiber";

const Box = ({count = 100}) => {
  const { viewport } = useThree()
  const [ref] = useSphere((index) => ({ mass: 100, position: [4 - Math.random() * 8, viewport.height, 0, 0], args: [1.2] }))
  return (
    <instancedMesh ref={ref} castShadow receiveShadow args={[null, null, count]}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#116466"/>
    </instancedMesh>
  )
}
export default Box