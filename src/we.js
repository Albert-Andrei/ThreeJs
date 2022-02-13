import React, { useRef, useState, Suspense } from 'react'
import './App.scss';
import Well from './Well';
import { Canvas, useFrame } from '@react-three/fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls } from '@react-three/drei'

softShadows();

function we() {
    return (
        <>
            {/* <img src={logo} className="react-logo" alt="logo" /> */}
            <div className='well-title'><h1>Well</h1></div>

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

                {/* <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} /> */}

                <group>
                    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
                        <planeBufferGeometry attach='geometry' args={[100, 100]} />
                        <shadowMaterial attach='material' opacity={0.2} />
                        {/* <meshStandardMaterial attach='material' color='black' /> */}
                    </mesh>

                    <Suspense fallback={null}>
                        <Well />
                    </Suspense>
                </group>


                <OrbitControls />
            </Canvas>
        </>
    );
}

export default we;
