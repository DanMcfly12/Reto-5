import { useVideoTexture } from "@react-three/drei"
import { DoubleSide } from "three"
import {  useState } from "react"



 

  const Video = () => {
  
    
    const playVideo = () =>{
        setPause(true)
    }
    const [play, setPlay] = useState(false);
  
    const props = { start: play, muted: play };
    
   
    const videoTexture = useVideoTexture("./static/maurisio.mp4", props)
  
    return (
        <mesh receiveShadow position-z={0} position-y={ 0 } position-x={0} rotation-y={ Math.PI * 0.5 } onClick={() => {
            setPlay(!play);
          }}>
            <planeGeometry args={[3, 3]} />
            <meshStandardMaterial map={videoTexture}  side={DoubleSide} />
        </mesh>
        
     
    );
  };
  export default Video;