// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import TitleHeader from "../components/TitleHeader";
// import { techStackIcons, techStackImgs } from "../constants";
// import TechIcons from "../components/models/techLogos/TechIcons";
// import React, { Suspense } from "react";
// // import { techStackImgs } from "../constants";


// // Enhanced Error Boundary with retry functionality
// class TechIconsErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false, error: null };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true, error };
//     }

//     componentDidCatch(error, errorInfo) {
//         console.error('TechIcons Error:', error, errorInfo);
//     }

//     handleRetry = () => {
//         this.setState({ hasError: false, error: null });
//     };

//     render() {
//         if (this.state.hasError) {
//             return (
//                 <div className="tech-icon-wrapper">
//                     <div className="tech-icons-error">
//                         <div className="error-icon">⚠️</div>
//                         <span>Failed to load 3D model</span>
//                         <button
//                             onClick={this.handleRetry}
//                             className="retry-button"
//                         >
//                             Retry
//                         </button>
//                     </div>
//                 </div>
//             );
//         }

//         return this.props.children;
//     }
// }

// // Enhanced Loading Component
// const LoadingFallback = ({ techIcon }) => (
//     <div className="tech-icon-wrapper">
//         <div className="tech-icons-loading">
//             <div className="loading-spinner"></div>
//             <span>Loading {techIcon.name}...</span>
//         </div>
//     </div>
// );


// function TechStack() {
//     // Animate the tech cards in the skills section
//     useGSAP(() => {
//         // This animation is triggered when the user scrolls to the #skills wrapper
//         // The animation starts when the top of the wrapper is at the center of the screen
//         // The animation is staggered, meaning each card will animate in sequence
//         // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
//         gsap.fromTo(
//             ".tech-card",
//             {
//                 // Initial values
//                 y: 50, // Move the cards down by 50px
//                 opacity: 0, // Set the opacity to 0
//             },
//             {
//                 // Final values
//                 y: 0, // Move the cards back to the top
//                 opacity: 1, // Set the opacity to 1
//                 duration: 1, // Duration of the animation
//                 ease: "power2.inOut", // Ease of the animation
//                 stagger: 0.2, // Stagger the animation by 0.2 seconds
//                 scrollTrigger: {
//                     trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
//                     start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
//                 },
//             }
//         );
//     });

//     return (
//         <div id="skills" className="flex-center section-padding">
//             <div className="w-full h-full md:px-10 px-5">
//                 <TitleHeader
//                     title="How I Can Contribute & My Key Skills"
//                     sub="🤝 What I Bring to the Table"
//                 />
//                 <div className="tech-grid">
//                     {/* Loop through the techStackIcons array and create a component for each item. 
//               The key is set to the name of the tech stack icon, and the classnames are set to 
//               card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
//               classes are only applied on larger screens. */}
//                     {techStackIcons.map((techStackIcon, index) => (
//                         <div
//                             key={techStackIcon.name}
//                             className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
//                         >
//                             {/* The tech-card-animated-bg div is used to create a background animation when the 
//                   component is hovered. */}
//                             <div className="tech-card-animated-bg" />
//                             <div className="tech-card-content">
//                                 {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
//                     which renders the 3D model of the tech stack icon. */}
//                                 {/* <div className="tech-icon-wrapper">
//                                     <TechIcons model={techStackIcon} />
//                                 </div> */}

//                                 <TechIconsErrorBoundary>
//                                     <Suspense
//                                         fallback={<LoadingFallback techIcon={techStackIcon} />}
//                                     >
//                                         <div className="tech-icon-wrapper">
//                                             <TechIcons key={index} model={techStackIcon} />
//                                         </div>
//                                     </Suspense>
//                                 </TechIconsErrorBoundary>


//                                 {/* The padding-x and w-full classes are used to add horizontal padding to the 
//                     text and make it take up the full width of the component. */}
//                                 <div className="padding-x w-full">
//                                     {/* The p tag contains the name of the tech stack icon. */}
//                                     <p>{techStackIcon.name}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     {/* This is for the img part */}
//                     {/* {techStackImgs.map((techStackIcon, index) => (
//                         <div
//                             key={index}
//                             className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
//                         >
//                             <div className="tech-card-animated-bg" />
//                             <div className="tech-card-content">
//                                 <div className="tech-icon-wrapper">
//                                     <img src={techStackIcon.imgPath} alt="" />
//                                 </div>
//                                 <div className="padding-x w-full">
//                                     <p>{techStackIcon.name}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))} */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TechStack

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcons, { preloadModel } from "../components/models/techLogos/TechIcons";
import React, { Suspense, useState, useEffect } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Single comprehensive error boundary
class TechIconsErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('TechIcons Error:', error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
        // Force component re-render
        if (this.props.onRetry) {
            this.props.onRetry();
        }
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="tech-icon-wrapper" style={{ 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}>
                    <div className="tech-icons-error">
                        <div className="error-icon">⚠️</div>
                        <span>Failed to load 3D model</span>
                        <button
                            onClick={this.handleRetry}
                            className="retry-button"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

// Simple loading component
const LoadingFallback = ({ techIcon }) => (
    <div className="tech-icon-wrapper" style={{ 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
    }}>
        <div className="tech-icons-loading">
            <div className="loading-spinner"></div>
            <span>Loading {techIcon.name}...</span>
        </div>
    </div>
);

// Individual tech card component
const TechCard = ({ techStackIcon, index }) => {
    const [retryKey, setRetryKey] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [cardState, setCardState] = useState('loading'); // 'loading', 'loaded', 'error'

    const handleRetry = () => {
        setRetryKey(prev => prev + 1);
        setCardState('loading');
    };

    // Intersection Observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const cardElement = document.querySelector(`[data-tech-card="${index}"]`);
        if (cardElement) {
            observer.observe(cardElement);
        }

        return () => observer.disconnect();
    }, [index]);

    return (
        <div
            data-tech-card={index}
            className="card-border tech-card py-2 overflow-hidden group xl:rounded-full rounded-lg"
            style={{ minHeight: '200px' }}
        >
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
                <TechIconsErrorBoundary onRetry={handleRetry}>
                    <Suspense fallback={<LoadingFallback techIcon={techStackIcon} />}>
                        <div className="tech-icon-wrapper">
                            {/* Only render TechIcons when card is visible */}
                            {isVisible && (
                                <TechIcons 
                                    key={`${index}-${retryKey}`} 
                                    model={techStackIcon}
                                    onLoad={() => setCardState('loaded')}
                                    onError={() => setCardState('error')}
                                />
                            )}
                        </div>
                    </Suspense>
                </TechIconsErrorBoundary>

                <div className="padding-x mb-2 w-full">
                    <p>{techStackIcon.name}</p>
                </div>
            </div>
        </div>
    );
};

function TechStack() {
    const [animationComplete, setAnimationComplete] = useState(false);

    // Preload all models on component mount
    useEffect(() => {
        techStackIcons.forEach((icon) => {
            if (icon.modelPath) {
                try {
                    preloadModel(icon.modelPath);
                } catch (error) {
                    console.warn(`Failed to preload model: ${icon.modelPath}`, error);
                }
            }
        });
    }, []);

    // Animate the tech cards in the skills section
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#skills",
                start: "top center",
                onComplete: () => setAnimationComplete(true),
                once: true
            }
        });

        tl.fromTo(
            ".tech-card",
            {
                y: 50,
                opacity: 0,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
            }
        );

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="How I Can Contribute & My Key Skills"
                    sub="🤝 What I Bring to the Table"
                />
                <div className="tech-grid">
                    {techStackIcons.map((techStackIcon, index) => (
                        <TechCard 
                            key={techStackIcon.name}
                            techStackIcon={techStackIcon}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechStack;