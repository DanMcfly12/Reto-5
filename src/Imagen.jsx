import React, { useState, useRef } from "react";
import { Text, useTexture } from "@react-three/drei";

import { DoubleSide } from "three";

const Imagen= () => {
  const [imagen, setImageSrc] = useState(`/static/1.jpg`)

  const texture = useTexture(imagen);

  const Cambio = () => {
    let index = Math.floor(Math.random() * 6) + 1;
    setImageSrc(`/static/${index}.jpg`)
  };

  return (
    <>
         

      
      <mesh
        position={[1.5, 0, -1.5]}
        scale={3}
        rotation={[0, -Math.PI * 2, 0]}
        onWheel={Cambio}
      >
        <planeGeometry />
        <meshStandardMaterial map={texture} side={DoubleSide}/>
      </mesh>
    </>
  );
};

export default Imagen;