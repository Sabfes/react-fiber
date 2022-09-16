import {usePlane} from "@react-three/cannon";
import {useThree} from "@react-three/fiber";

export const Borders = () => {
  const { viewport } = useThree()
  return (
    <>
      <Plane position={[0, -viewport.height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Plane position={[-viewport.width / 2 - 1, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Plane position={[viewport.width / 2 + 1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 5]} rotation={[0, -Math.PI, 0]} />
    </>
  )
}


function Plane({ color, ...props }) {
  usePlane(() => ({ ...props }))

  return null
//     <mesh {...props}>
// <planeGeometry />
//   <meshStandardMaterial color={'#D1E8E2'}/>
// </mesh>
}
