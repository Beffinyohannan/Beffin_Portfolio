// import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useEffect } from "react";
// import * as THREE from "three";

// function TechIcons({ model }) {
//     const scene = useGLTF(model.modelPath);

//     useEffect(() => {
//         if (model.name === "Interactive Developing") {
//             scene.scene.traverse((child) => {
//                 if (child.isMesh) {
//                     if (child.name === "Object_5") {
//                         child.material = new THREE.MeshStandardMaterial({ color: "white" });
//                     }
//                 }
//             });
//         }
//     }, [scene]);

//     return (
//         <Canvas>
//             <ambientLight intensity={0.3} />
//             <directionalLight position={[5, 5, 5]} intensity={1} />
//             <spotLight
//                 position={[10, 15, 10]}
//                 angle={0.3}
//                 penumbra={1}
//                 intensity={2}
//             />
//             <Environment preset="city" />

//             {/* 
//           The Float component from @react-three/drei is used to 
//           create a simple animation of the model floating in space.
//           The rotationIntensity and floatIntensity props control the
//           speed of the rotation and float animations respectively.

//           The group component is used to scale and rotate the model.
//           The rotation is set to the value of the model.rotation property,
//           which is an array of three values representing the rotation in
//           degrees around the x, y and z axes respectively.

//           The primitive component is used to render the 3D model.
//           The object prop is set to the scene object returned by the
//           useGLTF hook, which is an instance of THREE.Group. The
//           THREE.Group object contains all the objects (meshes, lights, etc)
//           that make up the 3D model.
//         */}
//             <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
//                 <group scale={model.scale} rotation={model.rotation}>
//                     <primitive object={scene.scene} />
//                 </group>
//             </Float>

//             <OrbitControls enableZoom={false} />
//         </Canvas>
//     );
// };

// export default TechIcons




// import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import { useMediaQuery } from "react-responsive";
// import * as THREE from "three";

// function TechIcons({ model }) {
//     return (
//         <Canvas>
//             <SceneInsideCanvas model={model} />
//         </Canvas>
//     );
// }

// function SceneInsideCanvas({ model }) {
//     const scene = useGLTF(model.modelPath);
//     const groupRef = useRef();
//     const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

//     useEffect(() => {
//         if (model.name === "Interactive Developing") {
//             scene.scene.traverse((child) => {
//                 if (child.isMesh && child.name === "Object_5") {
//                     child.material = new THREE.MeshStandardMaterial({ color: "white" });
//                 }
//             });
//         }
//     }, [scene, model.name]);

//     useFrame((state, delta) => {
//         if (isMobile && groupRef.current) {
//             groupRef.current.rotation.y += delta * 0.5;
//         }
//     });

//     return (
//         <>
//             <ambientLight intensity={0.3} />
//             <directionalLight position={[5, 5, 5]} intensity={1} />
//             <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
//             <Environment preset="city" />

//             <Float
//                 speed={isMobile ? 0 : 5.5}
//                 rotationIntensity={isMobile ? 0 : 0.5}
//                 floatIntensity={isMobile ? 0 : 0.9}
//             >
//                 <group ref={groupRef} scale={model.scale} rotation={model.rotation}>
//                     <primitive object={scene.scene} />
//                 </group>
//             </Float>

//             <OrbitControls
//                 enableZoom={false}
//                 enableRotate={!isMobile}
//                 enablePan={false}
//             />
//         </>
//     );
// }

// export default TechIcons;



import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

function TechIcons({ model }) {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <Canvas
            style={{
                width: '100%',
                height: '100%',
                touchAction: isMobile ? 'pan-y' : 'none',
                pointerEvents: isMobile ? 'none' : 'auto'
            }}
        >
            <SceneInsideCanvas model={model} />
        </Canvas>
    );
}

function SceneInsideCanvas({ model }) {
    const scene = useGLTF(model.modelPath);
    const groupRef = useRef();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useEffect(() => {
        if (model.name === "Interactive Developing") {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === "Object_5") {
                    child.material = new THREE.MeshStandardMaterial({ color: "white" });
                }
            });
        }
    }, [scene, model.name]);

    useFrame((state, delta) => {
        if (isMobile && groupRef.current) {
            groupRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
            <Environment preset="city" />

            <Float
                speed={isMobile ? 0 : 5.5}
                rotationIntensity={isMobile ? 0 : 0.5}
                floatIntensity={isMobile ? 0 : 0.9}
            >
                <group ref={groupRef} scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>

            {/* Only render OrbitControls on desktop */}
            {!isMobile && (
                <OrbitControls
                    enableZoom={false}
                    enableRotate={true}
                    enablePan={false}
                />
            )}
        </>
    );
}

export default TechIcons;