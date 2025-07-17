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



// import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import { useMediaQuery } from "react-responsive";
// import * as THREE from "three";

// function TechIcons({ model }) {
//     const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

//     return (
//         <Canvas
//             style={{
//                 width: '100%',
//                 height: '100%',
//                 touchAction: isMobile ? 'pan-y' : 'none',
//                 pointerEvents: isMobile ? 'none' : 'auto'
//             }}
//         >
//             <SceneInsideCanvas model={model} />
//         </Canvas>
//     );
// }

// function SceneInsideCanvas({ model }) {
//     // const scene = useGLTF(model.modelPath);
//     const { scene } = useGLTF(model.modelPath);
//     const groupRef = useRef();
//     const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

//     useEffect(() => {
//         if (model.name === "Interactive Developing") {
//             // scene.scene.traverse((child) => {
//             scene.traverse((child) => {
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
//                     {/* <primitive object={scene.scene} /> */}
//                     <primitive object={scene} />
//                 </group>
//             </Float>

//             {/* Only render OrbitControls on desktop */}
//             {!isMobile && (
//                 <OrbitControls
//                     enableZoom={false}
//                     enableRotate={true}
//                     enablePan={false}
//                 />
//             )}
//         </>
//     );
// }

// export default TechIcons;
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

function TechIcons({ model, onLoad, onError }) {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <Canvas
            style={{
                width: '100%',
                height: '100%',
                touchAction: isMobile ? 'pan-y' : 'none',
                pointerEvents: isMobile ? 'none' : 'auto'
            }}
            onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0);
            }}
        >
            <Suspense fallback={null}>
                <SceneInsideCanvas 
                    model={model} 
                    onLoad={onLoad}
                    onError={onError}
                />
            </Suspense>
        </Canvas>
    );
}

function Model({ model, onLoad, onError }) {
    const groupRef = useRef();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [modelLoaded, setModelLoaded] = useState(false);
    
    // This is the proper way to use useGLTF - it should be inside a Suspense boundary
    const gltf = useGLTF(model.modelPath);
    
    useEffect(() => {
        if (!gltf || !gltf.scene) {
            onError?.(new Error('GLTF scene not found'));
            return;
        }

        try {
            // Clone the scene to avoid shared state issues
            const scene = gltf.scene.clone();
            
            // Set up model-specific materials
            if (model.name === "Interactive Developing") {
                scene.traverse((child) => {
                    if (child.isMesh && child.name === "Object_5") {
                        child.material = new THREE.MeshStandardMaterial({ color: "white" });
                    }
                });
            }

            // Ensure all materials are properly set up
            scene.traverse((child) => {
                if (child.isMesh) {
                    if (child.material) {
                        child.material.needsUpdate = true;
                    }
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            // Update the ref to use the cloned scene
            if (groupRef.current) {
                // Clear any existing children
                while (groupRef.current.children.length > 0) {
                    groupRef.current.remove(groupRef.current.children[0]);
                }
                // Add the cloned scene
                groupRef.current.add(scene);
            }

            // Mark as loaded after a short delay
            const timer = setTimeout(() => {
                setModelLoaded(true);
                onLoad?.();
            }, 100);

            return () => clearTimeout(timer);
            
        } catch (error) {
            console.error('Error setting up model:', error);
            onError?.(error);
        }
    }, [gltf, model.name, onLoad, onError]);

    useFrame((state, delta) => {
        if (isMobile && groupRef.current && modelLoaded) {
            groupRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <Float
            speed={isMobile ? 0 : 5.5}
            rotationIntensity={isMobile ? 0 : 0.5}
            floatIntensity={isMobile ? 0 : 0.9}
        >
            <group ref={groupRef} scale={model.scale} position={model.position} rotation={model.rotation}>
                {/* The scene will be added via useEffect */}
            </group>
        </Float>
    );
}

function SceneInsideCanvas({ model, onLoad, onError }) {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
            <Environment preset="city" />
            
            <Model model={model} onLoad={onLoad} onError={onError} />
            
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

// Preload models for better performance
export const preloadModel = (modelPath) => {
    useGLTF.preload(modelPath);
};

export default TechIcons;