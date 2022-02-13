import { useGLTF } from '@react-three/drei'
import React, { useRef, useState, Suspense } from 'react'

function Well(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/well.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.02, 19.83, 4.89]} rotation={[0.39, 0, 0]} scale={[20.4, -2.29, 9.2]}>
        <group position={[0.01, 1.42, -1.02]} rotation={[0.73, 0.08, 0.45]} scale={[-0.07, -0.34, -0.39]}>
          <mesh geometry={nodes.Plane075.geometry} material={nodes.Plane075.material} />
          <mesh geometry={nodes.Plane075_1.geometry} material={nodes.Plane075_1.material} />
          <mesh geometry={nodes.Plane075_2.geometry} material={nodes.Plane075_2.material} />
        </group>
        <group position={[0, -0.3, -0.01]} rotation={[-2.98, 0.03, -2.7]} scale={[-0.08, -0.43, -0.15]}>
          <mesh geometry={nodes.Plane056.geometry} material={nodes.Plane056.material} />
          <mesh geometry={nodes.Plane056_1.geometry} material={nodes.Plane056_1.material} />
          <mesh geometry={nodes.Plane056_2.geometry} material={nodes.Plane056_2.material} />
        </group>
      </group>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0, 1.37, 0.04]} />
      <group position={[0, 3.09, 0.04]} rotation={[0, -0.89, 0]} scale={0.9}>
        <mesh geometry={nodes.Cube001_1.geometry} material={nodes.Cube001_1.material} />
        <mesh geometry={nodes.Cube001_2.geometry} material={nodes.Cube001_2.material} />
        <mesh geometry={nodes.Cube001_3.geometry} material={nodes.Cube001_3.material} />
      </group>
      <group position={[0, 4.8, 0.04]} rotation={[3.14, 0.09, -Math.PI]} scale={0.89}>
        <mesh geometry={nodes.Cube002_1.geometry} material={nodes.Cube002_1.material} />
        <mesh geometry={nodes.Cube002_2.geometry} material={nodes.Cube002_2.material} />
        <mesh geometry={nodes.Cube002_3.geometry} material={nodes.Cube002_3.material} />
      </group>
      <group position={[0, 6.56, 0.04]} rotation={[0.03, -1.39, 0.02]} scale={[0.97, 0.79, 0.97]}>
        <mesh geometry={nodes.Cube003_1.geometry} material={nodes.Cube003_1.material} />
        <mesh geometry={nodes.Cube003_2.geometry} material={nodes.Cube003_2.material} />
      </group>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[1.12, 11.19, 0]}
        rotation={[2.74, 0, 1.57]}
        scale={[0.29, -10.74, 0.29]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[11.89, 10.83, 0.06]}
        rotation={[-3.14, -0.02, -1.57]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[12.4, 8, 0]}
        rotation={[2.74, 0, 1.57]}
        scale={[0.22, -0.94, 0.22]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[-0.13, 11.22, 0.01]}
        rotation={[-0.01, 0, -Math.PI / 2]}
        scale={[0.59, -1.67, 0.59]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-0.62, 6.99, 0.15]}
        rotation={[0, -0.74, 0]}
        scale={[-0.1, 4.18, -0.1]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={materials.Gravy}
        position={[0.1, 0.15, 0.88]}
        scale={[17.06, 0.16, 17.06]}
      />
      <mesh
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[6.92, 0.55, 4.35]}
        rotation={[-0.33, -0.07, -0.15]}
        scale={2.16}
      />
      <mesh
        geometry={nodes.Icosphere001.geometry}
        material={nodes.Icosphere001.material}
        position={[5.17, 0.31, 9.14]}
        scale={1}
      />
      <mesh
        geometry={nodes.Icosphere002.geometry}
        material={nodes.Icosphere002.material}
        position={[-0.22, 0.51, 7.1]}
        rotation={[0.44, -0.71, -0.49]}
        scale={[0.3, 0.3, 0.3]}
      />
      <mesh
        geometry={nodes.Icosphere003.geometry}
        material={nodes.Icosphere003.material}
        position={[-5.6, 0.62, 4.48]}
        rotation={[2.95, -0.82, 2.45]}
        scale={[0.37, 0.38, 0.37]}
      />
      <mesh
        geometry={nodes.Icosphere004.geometry}
        material={nodes.Icosphere004.material}
        position={[-11.64, 0.15, 7.19]}
        rotation={[-0.87, -0.53, -1.94]}
        scale={[-1.26, -1.26, -1.26]}
      />
      <mesh
        geometry={nodes.Icosphere005.geometry}
        material={materials['Material.009']}
        position={[-3.91, 0.38, 13.69]}
        scale={0.83}
      />
      <mesh
        geometry={nodes.Icosphere006.geometry}
        material={nodes.Icosphere006.material}
        position={[11.11, 0.38, 3.9]}
        scale={0.83}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[8.56, 11.51, 0.11]}
        scale={[1, 1.21, 1]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[8.59, 1.62, 1.98]}
        rotation={[-0.78, 0, 0]}
        scale={[0.55, 2.45, 0.58]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[8.57, 1.62, -1.69]}
        rotation={[0.75, 0, 0]}
        scale={[0.51, 2.45, 0.58]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[8.55, 20.26, -3.26]}
        rotation={[1.13, 0, 0]}
        scale={[0.55, 3.64, 0.65]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[8.57, 18.55, -1.53]}
        rotation={[2.47, 0, 0]}
        scale={[0.45, 2.45, 0.58]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[8.56, 20.26, 3.36]}
        rotation={[2.01, 0, -3.14]}
        scale={[0.55, 3.64, 0.65]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[8.55, 18.58, 1.49]}
        rotation={[0.67, 0, -3.14]}
        scale={[0.46, 1.95, 0.5]}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[0.12, 18.94, 6.1]}
        rotation={[0.39, 0, 0]}
        scale={[8.9, 0.63, 0.55]}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[0.12, 18.94, -5.81]}
        rotation={[-0.42, 0, 0]}
        scale={[8.9, 0.45, 0.43]}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[0.04, 22.43, 0.11]}
        scale={[11.72, 1.33, 1.21]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[-8.35, 11.51, 0.11]}
        scale={[1, 1.21, 1]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[-8.45, 1.62, 1.98]}
        rotation={[-0.78, 0, 0]}
        scale={[0.52, 2.45, 0.58]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[-8.44, 1.24, -1.07]}
        rotation={[0.01, 0, 0]}
        scale={[0.47, 2, 0.58]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-8.36, 20.26, -2.96]}
        rotation={[1.13, 0, 0]}
        scale={[0.55, 3.64, 0.65]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[-8.35, 18.55, -1.69]}
        rotation={[2.47, 0, 0]}
        scale={[0.45, 2.45, 0.58]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[-8.35, 20.26, 3.36]}
        rotation={[2.01, 0, -3.14]}
        scale={[0.55, 3.64, 0.65]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[-8.36, 18.58, 1.49]}
        rotation={[0.67, 0, 3.13]}
        scale={[0.5, 1.95, 0.5]}
      />
    </group>
  )
}

export default Well