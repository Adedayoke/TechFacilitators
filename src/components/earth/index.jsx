import React from 'react';
import EarthDayMap from '../../assets/TCom_BrassPlatesA_header.jpg'
import EarthNormalMap from '../../assets/800px-Solarsystemscope_texture_8k_earth_nightmap.jpg'
import EarthSpecularMap from '../../assets/800px-Solarsystemscope_texture_8k_earth_nightmap.jpg'
import EarthCloudsMap from '../../assets/800px-Solarsystemscope_texture_8k_earth_nightmap.jpg'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

import { OrbitControls } from '@react-three/drei';
export function Earth({props}){
    const [colorMap, specularMap, normalMap, cloudMap] = useLoader(TextureLoader, [EarthDayMap,EarthSpecularMap, EarthNormalMap, EarthCloudsMap ]);
    return <>
        <ambientLight intensity={1} />
        <mesh>
            <sphereGeometry args={[1, 32,32]} />
            <meshPhongMaterial map={normalMap} />
            <meshStandardMaterial map={colorMap} normalMap={normalMap} />
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} rotateSpeed={0.4} />
        </mesh>
        <mesh>
            <sphereGeometry args={[1, 32,32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial map={specularMap} normalMap={normalMap} />
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} rotateSpeed={0.4} />
        </mesh>
    </>
}