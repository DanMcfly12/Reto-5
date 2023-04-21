import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 70,


    position: [5, 0,3]
}

root.render(
    <Canvas camera={cameraSettings} shadows={true}>
        <Experience />
    </Canvas>
)