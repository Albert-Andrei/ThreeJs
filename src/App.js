import React, { useRef, useState } from 'react'
import logo from './logo.svg';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
// import { useSpring, animated } from 'react-spring'

softShadows();


const SpinningBox = ({ position, args, color, speed }) => {
  const mesh = useRef(0);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  // const [expand, setExpand] = useState(false);

  // const props = useSpring({
  //   scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
  // });

  return (
    <mesh
      // onClick={() => setExpand(!expand)}
      // scale={props.scale}
      castShadow position={position}
      ref={mesh} >

      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={0.6} />
    </mesh>
  );
}

function App() {
  return (
    <>
      <img src={logo} className="react-logo" alt="logo" />

      <Canvas
        shadows
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 80 }}>

        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadowMapHeight={1024}
          shadowMapWidth={1024}
          shadowCameraFar={50}
          shadowCameraLeft={-10}
          shadowCameraRight={10}
          shadowCameraTop={10}
          shadowCameraBottom={-10}
        />

        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.2} />
            {/* <meshStandardMaterial attach='material' color='black' /> */}
          </mesh>

          // Box should be a separat component
          <SpinningBox position={[0, 1, 0]} args={[4, 3, 1]} color='lightblue' speed={2} />
          <SpinningBox position={[-5, 0, -5]} args={[2, 3, 2]} color='yellow' speed={3} />
          <SpinningBox position={[9, 0, -2]} args={[2, 2, 2]} color='red' speed={5} />
        </group>

        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
