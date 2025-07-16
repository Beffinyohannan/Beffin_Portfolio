// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useMediaQuery } from "react-responsive";

// import { Room } from "./Room";
// import HeroLights from "./HeroLights";
// import Particles from "./Particles";
// import { Suspense } from "react"
// import { SciFiRoom } from "./SciFiRoom";

// function HeroExperience() {
//     const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
//     const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

//     return (
//         <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
//             {/* deep blue ambient */}
//             <ambientLight intensity={0.2} color="#1a1a40" />
//             {/* Configure OrbitControls to disable panning and control zoom based on device type */}
//             <OrbitControls
//                 enablePan={false} // Prevents panning of the scene
//                 enableZoom={!isTablet} // Disables zoom on tablets
//                 // maxDistance={20} // Maximum distance for zooming out
//                 // minDistance={5} // Minimum distance for zooming in
//                 maxDistance={6} // Maximum distance for zooming out
//                 minDistance={1} // Minimum distance for zooming in
//                 minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
//                 maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
//             />

//             <Suspense fallback={null}>
//                 <HeroLights />
//                 <Particles count={100} />
//                 {/* <group
//                     scale={isMobile ? 0.7 : 1}
//                     position={[0, -3.5, 0]}
//                     rotation={[0, -Math.PI / 4, 0]}
//                 > */}
//                 {/* <Room /> */}
//                 {/* </group> */}
//                 <group
//                     scale={isMobile ? 0.8 : 1}
//                     position={isMobile ? [0.2, -0.5, 1] : [0, -0.5, 0]}
//                     rotation={isMobile ? [0, 0.2, 0] : [0, -Math.PI / 100, 0]}
//                 >
//                     <SciFiRoom />
//                 </group>
//             </Suspense>
//         </Canvas>
//     );
// };

// export default HeroExperience


// import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useMediaQuery } from "react-responsive";

// import HeroLights from "./HeroLights";
// import Particles from "./Particles";
// import { Suspense, useRef } from "react"
// import { SciFiRoom } from "./SciFiRoom";

// function HeroExperience() {
//     const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

//     return (
//         <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
//             <ambientLight intensity={0.2} color="#1a1a40" />

//             <ScrollControls pages={2} damping={4}>
//                 <SceneContent isMobile={isMobile} />
//             </ScrollControls>
//         </Canvas>
//     );
// }

// function SceneContent({ isMobile }) {
//     const scroll = useScroll();
//     const groupRef = useRef();

//     // Animate model on scroll
//     useFrame(() => {
//         const offset = scroll.offset; // 0 to 1
//         if (groupRef.current) {
//             groupRef.current.rotation.y = offset * Math.PI * 2; // 360° rotation
//             groupRef.current.position.y = -offset * 2; // move down as you scroll
//         }
//     });

//     return (
//         <>
//             <OrbitControls
//                 enablePan={false}
//                 enableZoom={!isMobile}
//                 enableRotate={!isMobile}
//                 maxDistance={6}
//                 minDistance={1}
//                 minPolarAngle={Math.PI / 5}
//                 maxPolarAngle={Math.PI / 2}
//             />
//             <Suspense fallback={null}>
//                 <HeroLights />
//                 <Particles count={100} />
//                 <group
//                     ref={groupRef}
//                     scale={isMobile ? 0.8 : 1}
//                     position={isMobile ? [0.2, -0.5, 1] : [0, -0.5, 0]}
//                     rotation={isMobile ? [0, 0.2, 0] : [0, -Math.PI / 100, 0]}
//                 >
//                     <SciFiRoom />
//                 </group>
//             </Suspense>
//         </>
//     );
// }

// export default HeroExperience

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense, useRef } from "react"
import { SciFiRoom } from "./SciFiRoom";
import { ScrollControls, useScroll } from "@react-three/drei";

function HeroExperience() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={0.2} color="#1a1a40" />
            <Suspense fallback={null}>
                {isMobile ? (
                    <MobileScene />
                ) : (
                    <ScrollControls pages={2} damping={4}>
                        <DesktopScene />
                    </ScrollControls>
                )}
            </Suspense>
        </Canvas>
    );
}

function DesktopScene() {
    const scroll = useScroll();
    const groupRef = useRef();

    useFrame(() => {
        const offset = scroll.offset;
        if (groupRef.current) {
            groupRef.current.rotation.y = offset * Math.PI * 2;
            groupRef.current.position.y = -offset * 2;
        }
    });

    return (
        <>
            <OrbitControls
                enablePan={false}
                enableZoom={true}
                maxDistance={6}
                minDistance={1}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <HeroLights />
            <Particles count={100} />
            <group
                ref={groupRef}
                scale={1}
                position={[0, -0.5, 0]}
                rotation={[0, -Math.PI / 100, 0]}
            >
                <SciFiRoom />
            </group>
        </>
    );
}

function MobileScene() {
    const groupRef = useRef();

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.5; // smooth auto-rotation
        }
    });

    return (
        <>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={false}
                maxDistance={6}
                minDistance={1}
            />
            <HeroLights />
            <Particles count={50} />
            <group
                ref={groupRef}
                scale={0.8}
                position={[0.2, -0.5, 1]}
                rotation={[0, 0.2, 0]}
            >
                <SciFiRoom />
            </group>
        </>
    );
}


export default HeroExperience