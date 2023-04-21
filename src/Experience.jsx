import { OrbitControls,MeshReflectorMaterial, Sky,Stars } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Imagen from './Imagen'
import Video from './Video'
import { DoubleSide } from "three";



export default function Experience() {


    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />
        <spotLight  castShadow position={[0, 3, -6]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Sky
        distance={10000}
        sunPosition={[-60, 0, -1]}
        inclination={0}
        azimuth={0.25}
        elevation={1}
        rayleigh={3}
      />
      <Stars factor={1} saturation={10} />
        <mesh position-y={-1.5} rotation-x={-Math.PI * 0.5} scale={50}>
          <planeGeometry />
          <MeshReflectorMaterial
            color="black"
            mirror={1}
            blur={[0, 0]}
            resolution={1080}
            side={DoubleSide}
          />
        </mesh>
       <Video/>

       <Imagen/>
    
     
    
    </>
}