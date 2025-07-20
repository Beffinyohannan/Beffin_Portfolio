// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import TitleHeader from "../components/TitleHeader";

// gsap.registerPlugin(ScrollTrigger);

// function ShowCaseSection() {
//     const sectionRef = useRef(null);
//     const rydeRef = useRef(null);
//     const libraryRef = useRef(null);
//     const ycDirectoryRef = useRef(null);
//     const libraryRefMEA = useRef(null);
//     const ycDirectoryRefCH = useRef(null);
//     const libraryRefEC = useRef(null);
//     const ycDirectoryRefACH = useRef(null);

//     useGSAP(() => {
//         // Animation for the main section
//         gsap.fromTo(
//             sectionRef.current,
//             { opacity: 0 },
//             { opacity: 1, duration: 1.5 }
//         );

//         // Animations for each app showcase
//         const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current, libraryRefMEA.current, ycDirectoryRefCH.current, libraryRefEC.current, ycDirectoryRefACH.current];

//         cards.forEach((card, index) => {
//             gsap.fromTo(
//                 card,
//                 {
//                     y: 50,
//                     opacity: 0,
//                 },
//                 {
//                     y: 0,
//                     opacity: 1,
//                     duration: 1,
//                     delay: 0.2 * (index + 1),
//                     scrollTrigger: {
//                         trigger: card,
//                         start: "top bottom-=80",
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <div id="work" ref={sectionRef} className="app-showcase">
//             <div className="w-full h-full md:px-20 px-5">
//                 <TitleHeader
//                     title="Project Worked On"
//                     sub="Recent projects"
//                 />
//                 <div className="w-full mt-20">
//                     <div className="showcaselayout">
//                         <div ref={rydeRef} className="first-project-wrapper">
//                             <div className="image-wrapper">
//                                 {/* <img src="/images/project1.png" alt="Ryde App Interface" /> */}
//                                 {/* <img src="/img/project01.jpg" alt="ZEEQR" /> */}
//                                 <img src={`${import.meta.env.BASE_URL}img/project01.webp`} alt="ZEEQR" />
//                             </div>
//                             <div className="text-content">
//                                 <a href="https://zeeqr.com/" target="_blank" rel="noopener noreferrer">
//                                     <h2>
//                                         ZEEQR - Digital card Innovations develops eco-friendly Smart NFC & QR Card Platform
//                                     </h2>
//                                 </a>
//                                 <p className="text-white-50 md:text-xl">
//                                     A web application built with React.js, Zustand, Node.js, & TailwindCSS for a fast,
//                                     user-friendly experience.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="project-list-wrapper overflow-hidden">
//                             <div className="project" ref={libraryRef}>
//                                 <div className="image-wrapper bg-[#FFEFDB]">
//                                     {/* <img
//                                         src="/images/project2.png"
//                                         alt="Bharat Auction"
//                                     /> */}
//                                     <img
//                                         // src={`${import.meta.env.BASE_URL}images/project2.png`}
//                                         src={`${import.meta.env.BASE_URL}img/auction.webp`}
//                                         alt="Bharat Auction"
//                                     />
//                                 </div>
//                                 <h2>Bharat Auction - Online Bidding Platform</h2>
//                             </div>

//                             <div className="project" ref={ycDirectoryRef}>
//                                 <div className="image-wrapper bg-[#FFE7EB]">
//                                     {/* <img src="/images/project3.png" alt="Hostec" /> */}
//                                     {/* <img src={`${import.meta.env.BASE_URL}images/project3.png`} alt="Hostec" /> */}
//                                     <img src={`${import.meta.env.BASE_URL}img/survey.webp`} alt="Hostec" />
//                                 </div>
//                                 <h2>Hostec - Client survey and reporting system</h2>
//                             </div>
//                         </div>


//                     </div>
//                     <div className="showcaselayout mt-8">

//                         <div className="project-list-wrapper overflow-hidden">
//                             <div className="project" ref={libraryRefMEA}>
//                                 <div className="image-wrapper bg-[#FFEFDB]">
//                                     {/* <img
//                                         src="/img/realEstate.jpeg"
//                                         alt="MEA International"
//                                     /> */}
//                                     <img
//                                         src={`${import.meta.env.BASE_URL}img/realEstate.webp`}
//                                         alt="MEA International"
//                                     />
//                                 </div>
//                                 <h2>MEA International - Real Estate Platform</h2>
//                             </div>

//                             <div className="project" ref={ycDirectoryRefCH}>
//                                 <div className="image-wrapper bg-[#FFE7EB]">
//                                     {/* <img src="/img/church-website.png" alt="Community Website" /> */}
//                                     <img src={`${import.meta.env.BASE_URL}img/church-website.webp`} alt="Community Website" />
//                                 </div>
//                                 <a href="https://www.kannarapalli.com/" target="_blank" rel="noopener noreferrer">
//                                     <h2>Kannara church - Community Website</h2>
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="project-list-wrapper overflow-hidden">
//                             <div className="project" ref={libraryRefEC}>
//                                 <div className="image-wrapper bg-[#FFEFDB]">
//                                     {/* <img
//                                         src="/img/airchip.png"
//                                         alt="airchip"
//                                     /> */}
//                                     <img
//                                         src={`${import.meta.env.BASE_URL}img/airchip.webp`}
//                                         alt="airchip"
//                                     />
//                                 </div>
//                                 <h2>Airchip - An Ecommerce website that sells laptops</h2>
//                             </div>

//                             <div className="project" ref={ycDirectoryRefACH}>
//                                 <div className="image-wrapper bg-[#FFE7EB]">
//                                     {/* <img src="/img/eventive.png" alt="eventive" /> */}
//                                     <img src={`${import.meta.env.BASE_URL}img/eventive.webp`} alt="eventive" />
//                                 </div>
//                                 <h2>Eventive - A event management application like social media</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShowCaseSection


// import { useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { ExternalLink, Info, X } from "lucide-react";
// import TitleHeader from "../components/TitleHeader";
// import { projectData } from "../constants";

// gsap.registerPlugin(ScrollTrigger);



// function ShowCaseSection() {
//     const sectionRef = useRef(null);
//     const rydeRef = useRef(null);
//     const libraryRef = useRef(null);
//     const ycDirectoryRef = useRef(null);
//     const libraryRefMEA = useRef(null);
//     const ycDirectoryRefCH = useRef(null);
//     const libraryRefEC = useRef(null);
//     const ycDirectoryRefACH = useRef(null);

//     const [selectedProject, setSelectedProject] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);



//     const openModal = (projectKey) => {
//         setSelectedProject(projectData[projectKey]);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedProject(null);
//     };

//     const getStatusColor = (status) => {
//         switch (status) {
//             case "Live":
//                 return "bg-green-500";
//             case "In Progress":
//                 return "bg-yellow-500";
//             case "Completed":
//                 return "bg-blue-500";
//             default:
//                 return "bg-gray-500";
//         }
//     };

//     useGSAP(() => {
//         // Animation for the main section
//         gsap.fromTo(
//             sectionRef.current,
//             { opacity: 0 },
//             { opacity: 1, duration: 1.5 }
//         );

//         // Animations for each app showcase
//         const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current, libraryRefMEA.current, ycDirectoryRefCH.current, libraryRefEC.current, ycDirectoryRefACH.current];

//         cards.forEach((card, index) => {
//             gsap.fromTo(
//                 card,
//                 {
//                     y: 50,
//                     opacity: 0,
//                 },
//                 {
//                     y: 0,
//                     opacity: 1,
//                     duration: 1,
//                     delay: 0.2 * (index + 1),
//                     scrollTrigger: {
//                         trigger: card,
//                         start: "top bottom-=50",
//                     },
//                 }
//             );
//         });
//     }, []);

//     const ProjectCard = ({ project, onClick, children, className = "" }) => (
//         <div className={`group cursor-pointer ${className}`}>
//             <div className="relative overflow-hidden rounded-lg">
//                 {children}
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
//                     <div className={`px-3 py-1 rounded-full text-sm font-semibold text-white mb-4 ${getStatusColor(project.status)}`}>
//                         {project.status}
//                     </div>
//                     <div className="flex justify-center  flex-col sm:flex-row gap-2 w-full max-w-xs">
//                         {project.liveUrl && (
//                             <a
//                                 href={project.liveUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
//                                 onClick={(e) => e.stopPropagation()}
//                             >
//                                 <ExternalLink size={16} />
//                                 Live Site
//                             </a>
//                         )}
//                         {project.moreDetails &&
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     onClick();
//                                 }}
//                                 className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm cursor-pointer"
//                             >
//                                 <Info size={16} />
//                                 More Details
//                             </button>
//                         }
//                     </div>
//                 </div>
//             </div>
//             {/* Project Info Outside */}
//             <div className="mt-3 space-y-1">
//                 <h3 className="text-white text-lg font-bold line-clamp-1">{project.title}</h3>
//                 <p className="text-white/70 text-sm line-clamp-1">{project.description}</p>
//             </div>
//         </div>
//     );

//     return (
//         <div id="work" ref={sectionRef} className="app-showcase min-h-screen  py-20">
//             <div className="w-full h-full md:px-20 px-5">
//                 <TitleHeader
//                     title="Project Worked On"
//                     sub="Recent projects"
//                 />
//                 <div className="w-full mt-20">
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                         {/* Main Featured Project */}
//                         <ProjectCard
//                             project={projectData.zeeqr}
//                             onClick={() => openModal('zeeqr')}
//                             className="lg:col-span-2"
//                         >
//                             <div ref={rydeRef} className="h-96 lg:h-[500px] bg-gray-800 rounded-lg overflow-hidden">
//                                 <img
//                                     src={`${import.meta.env.BASE_URL}img/project01.webp`}
//                                     alt="ZEEQR"
//                                     className="w-full h-full object-cover object-center"
//                                 />
//                             </div>
//                         </ProjectCard>

//                         {/* Side Projects */}
//                         <div className="space-y-8">
//                             <ProjectCard
//                                 project={projectData.bharatAuction}
//                                 onClick={() => openModal('bharatAuction')}
//                             >
//                                 <div ref={libraryRef} className="h-44 bg-[#FFEFDB] rounded-lg overflow-hidden">
//                                     <img
//                                         src={`${import.meta.env.BASE_URL}img/auction.webp`}
//                                         alt="Bharat Auction"
//                                         className="w-full h-full object-cover object-center"
//                                     />
//                                 </div>
//                             </ProjectCard>

//                             <ProjectCard
//                                 project={projectData.hostec}
//                                 onClick={() => openModal('hostec')}
//                             >
//                                 <div ref={ycDirectoryRef} className="h-44 bg-[#FFE7EB] rounded-lg overflow-hidden">
//                                     <img
//                                         src={`${import.meta.env.BASE_URL}img/survey.webp`}
//                                         alt="Hostec"
//                                         className="w-full h-full object-cover object-center"
//                                     />
//                                 </div>
//                             </ProjectCard>
//                         </div>
//                     </div>

//                     {/* Second Row of Projects */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//                         <ProjectCard
//                             project={projectData.meaInternational}
//                             onClick={() => openModal('meaInternational')}
//                         >
//                             <div ref={libraryRefMEA} className="h-48 bg-[#FFEFDB] rounded-lg overflow-hidden">
//                                 <img
//                                     src={`${import.meta.env.BASE_URL}img/realEstate.webp`}
//                                     alt="MEA International"
//                                     className="w-full h-full object-cover object-center"
//                                 />
//                             </div>
//                         </ProjectCard>

//                         <ProjectCard
//                             project={projectData.kannaraChurch}
//                             onClick={() => openModal('kannaraChurch')}
//                         >
//                             <div ref={ycDirectoryRefCH} className="h-48 bg-[#FFE7EB] rounded-lg overflow-hidden">
//                                 <img
//                                     src={`${import.meta.env.BASE_URL}img/church-website.webp`}
//                                     alt="Community Website"
//                                     className="w-full h-full object-cover object-center"
//                                 />
//                             </div>
//                         </ProjectCard>

//                         <ProjectCard
//                             project={projectData.airchip}
//                             onClick={() => openModal('airchip')}
//                         >
//                             <div ref={libraryRefEC} className="h-48 bg-[#FFEFDB] rounded-lg overflow-hidden">
//                                 <img
//                                     src={`${import.meta.env.BASE_URL}img/airchip.webp`}
//                                     alt="airchip"
//                                     className="w-full h-full object-cover object-center"
//                                 />
//                             </div>
//                         </ProjectCard>

//                         <ProjectCard
//                             project={projectData.eventive}
//                             onClick={() => openModal('eventive')}
//                         >
//                             <div ref={ycDirectoryRefACH} className="h-48 bg-[#FFE7EB] rounded-lg overflow-hidden">
//                                 <img
//                                     src={`${import.meta.env.BASE_URL}img/eventive.webp`}
//                                     alt="eventive"
//                                     className="w-full h-full object-cover object-center"
//                                 />
//                             </div>
//                         </ProjectCard>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal */}
//             {/* {isModalOpen && selectedProject && (
//                 <div className="fixed inset-0 mt-16 bg-black/80 flex items-center justify-center z-50 p-4">
//                     <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto scrollbar-hide relative">
//                         <div className="p-6">
//                             <div className="flex justify-between items-start mb-4 ">
//                                 <div className="flex items-center gap-3">
//                                     <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
//                                     <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(selectedProject.status)}`}>
//                                         {selectedProject.status}
//                                     </span>
//                                 </div>
//                                 <button
//                                     onClick={closeModal}
//                                     className="text-gray-500 hover:text-gray-700 transition-colors  "
//                                 >
//                                     <X size={24} />
//                                 </button>
//                             </div>

//                             <div className="mb-6">
//                                 <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
//                                     <img
//                                         src={`${import.meta.env.BASE_URL}${selectedProject.image}`}
//                                         alt={selectedProject.title}
//                                         className="w-full h-full object-cover object-top"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="space-y-4">
//                                 <div>
//                                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
//                                     <p className="text-gray-700">{selectedProject.fullDescription}</p>
//                                 </div>

//                                 <div>
//                                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h3>
//                                     <div className="flex flex-wrap gap-2">
//                                         {selectedProject.technologies.map((tech, index) => (
//                                             <span
//                                                 key={index}
//                                                 className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
//                                             >
//                                                 {tech}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
//                                     <ul className="list-disc list-inside space-y-1 text-gray-700">
//                                         {selectedProject.features.map((feature, index) => (
//                                             <li key={index}>{feature}</li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 {selectedProject.liveUrl && (
//                                     <div className="pt-4 border-t flex justify-center">
//                                         <a
//                                             href={selectedProject.liveUrl}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
//                                         >
//                                             <ExternalLink size={20} />
//                                             Visit Live Site
//                                         </a>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )} */}
//             {isModalOpen && selectedProject && (
//                 <div className="fixed inset-0 mt-16 bg-black/80 flex items-center justify-center z-50 p-4">
//                     <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden relative">
//                         {/* Fixed Header */}
//                         <div className="sticky top-0 bg-white p-6 pb-4 border-b border-gray-200 z-10">
//                             <div className="flex justify-between items-start">
//                                 <div className="flex items-center gap-3">
//                                     <h2 className="text-base md:text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
//                                     <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-semibold text-white ${getStatusColor(selectedProject.status)}`}>
//                                         {selectedProject.status}
//                                     </span>
//                                 </div>
//                                 <button
//                                     onClick={closeModal}
//                                     className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
//                                 >
//                                     <X size={24} />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Scrollable Content */}
//                         <div className="overflow-y-auto max-h-[calc(80vh-80px)] pb-10 md:pb-0 scrollbar-hide">
//                             <div className="p-6 pt-4">
//                                 <div className="mb-6">
//                                     <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
//                                         <img
//                                             src={`${import.meta.env.BASE_URL}${selectedProject.image}`}
//                                             alt={selectedProject.title}
//                                             className="w-full h-full object-cover object-top"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="space-y-4">
//                                     <div>
//                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
//                                         <p className="text-gray-700">{selectedProject.fullDescription}</p>
//                                     </div>

//                                     <div>
//                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h3>
//                                         <div className="flex flex-wrap gap-2">
//                                             {selectedProject.technologies.map((tech, index) => (
//                                                 <span
//                                                     key={index}
//                                                     className="px-3 py-1 bg-blue-100 text-white rounded-full text-sm font-medium"
//                                                 >
//                                                     {tech}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
//                                         <ul className="list-disc list-inside space-y-1 text-gray-700">
//                                             {selectedProject.features.map((feature, index) => (
//                                                 <li key={index}>{feature}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                     {selectedProject?.contributions &&
//                                     <div>
//                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Contribution </h3>
//                                         <ul className="list-disc list-inside space-y-1 text-gray-700">
//                                             {selectedProject?.contributions?.map((contribution, index) => (
//                                                 <li key={index}>{contribution}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                     }

//                                     {selectedProject.liveUrl && (
//                                         <div className="pt-4 mb-5 border-t flex justify-center">
//                                             <a
//                                                 href={selectedProject.liveUrl}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
//                                             >
//                                                 <ExternalLink size={20} />
//                                                 Visit Live Site
//                                             </a>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ShowCaseSection;

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Info, X } from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import { projectData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

function ShowCaseSection() {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);
    const libraryRefMEA = useRef(null);
    const ycDirectoryRefCH = useRef(null);
    const libraryRefEC = useRef(null);
    const ycDirectoryRefACH = useRef(null);

    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Add state to track which card is active on mobile
    const [activeCard, setActiveCard] = useState(null);

    const openModal = (projectKey) => {
        setSelectedProject(projectData[projectKey]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Live":
                return "bg-green-500";
            case "In Progress":
                return "bg-yellow-500";
            case "Completed":
                return "bg-blue-500";
            default:
                return "bg-gray-500";
        }
    };

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current, libraryRefMEA.current, ycDirectoryRefCH.current, libraryRefEC.current, ycDirectoryRefACH.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=50",
                    },
                }
            );
        });
    }, []);

    // Handle card interactions for both desktop and mobile
    const handleCardInteraction = (projectKey) => {
        // On mobile, toggle the overlay, on desktop, this won't be called
        if (window.innerWidth <= 768) {
            setActiveCard(activeCard === projectKey ? null : projectKey);
        }
    };

    // Handle clicking outside to close mobile overlay
    const handleCardClick = (e, projectKey) => {
        if (window.innerWidth <= 768 && activeCard !== projectKey) {
            e.preventDefault();
            setActiveCard(projectKey);
        }
    };

    const ProjectCard = ({ project, onClick, children, className = "", projectKey }) => (
        <div
            className={`group cursor-pointer ${className}`}
            onClick={(e) => handleCardClick(e, projectKey)}
        >
            <div className="relative overflow-hidden rounded-lg">
                {children}
                {/* Hover/Active Overlay - Modified for mobile support */}
                <div className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-center items-center p-4 ${
                    // Show overlay on hover for desktop OR when active on mobile
                    window.innerWidth > 768
                        ? 'opacity-0 group-hover:opacity-100'
                        : activeCard === projectKey
                            ? 'opacity-100'
                            : 'opacity-0'
                    }`}>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold text-white mb-4 ${getStatusColor(project.status)}`}>
                        {project.status}
                    </div>
                    <div className="flex justify-center flex-col sm:flex-row gap-2 w-full max-w-xs">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={16} />
                                Live Site
                            </a>
                        )}
                        {project.moreDetails &&
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClick();
                                }}
                                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm cursor-pointer"
                            >
                                <Info size={16} />
                                More Details
                            </button>
                        }
                    </div>
                    {/* Close button for mobile */}
                    {window.innerWidth <= 768 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveCard(null);
                            }}
                            className="absolute top-2 right-2 text-white hover:text-gray-300 bg-black/50 rounded-full p-1"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>
            </div>
            {/* Project Info Outside */}
            <div className="mt-3 space-y-1">
                <h3 className="text-white text-lg font-bold line-clamp-1">{project.title}</h3>
                <p className="text-white/70 text-sm line-clamp-1">{project.description}</p>
            </div>
        </div>
    );

    return (
        <div id="work" ref={sectionRef} className="app-showcase min-h-screen py-20">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Project Worked On"
                    sub="Recent projects"
                />
                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Featured Project */}
                        <ProjectCard
                            project={projectData.zeeqr}
                            onClick={() => openModal('zeeqr')}
                            className="lg:col-span-2"
                            projectKey="zeeqr"
                        >
                            <div ref={rydeRef} className="h-96 lg:h-[500px] bg-gray-800 rounded-lg overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}img/project01.webp`}
                                    alt="ZEEQR"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </ProjectCard>

                        {/* Side Projects */}
                        <div className="space-y-8">
                            <ProjectCard
                                project={projectData.bharatAuction}
                                onClick={() => openModal('bharatAuction')}
                                projectKey="bharatAuction"
                            >
                                <div ref={libraryRef} className="h-44 bg-[#FFEFDB] rounded-lg overflow-hidden">
                                    <img
                                        src={`${import.meta.env.BASE_URL}img/auction.webp`}
                                        alt="Bharat Auction"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </ProjectCard>

                            <ProjectCard
                                project={projectData.hostec}
                                onClick={() => openModal('hostec')}
                                projectKey="hostec"
                            >
                                <div ref={ycDirectoryRef} className="h-44 bg-[#FFE7EB] rounded-lg overflow-hidden">
                                    <img
                                        src={`${import.meta.env.BASE_URL}img/survey.webp`}
                                        alt="Hostec"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </ProjectCard>
                        </div>
                    </div>

                    {/* Second Row of Projects */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <ProjectCard
                            project={projectData.meaInternational}
                            onClick={() => openModal('meaInternational')}
                            projectKey="meaInternational"
                        >
                            <div ref={libraryRefMEA} className="h-48 bg-[#FFEFDB] rounded-lg overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}img/realEstate.webp`}
                                    alt="MEA International"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </ProjectCard>

                        <ProjectCard
                            project={projectData.kannaraChurch}
                            onClick={() => openModal('kannaraChurch')}
                            projectKey="kannaraChurch"
                        >
                            <div ref={ycDirectoryRefCH} className="h-48 bg-[#FFE7EB] rounded-lg overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}img/church-website.webp`}
                                    alt="Community Website"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </ProjectCard>

                        <ProjectCard
                            project={projectData.airchip}
                            onClick={() => openModal('airchip')}
                            projectKey="airchip"
                        >
                            <div ref={libraryRefEC} className="h-48 bg-[#FFEFDB] rounded-lg overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}img/airchip.webp`}
                                    alt="airchip"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </ProjectCard>

                        <ProjectCard
                            project={projectData.eventive}
                            onClick={() => openModal('eventive')}
                            projectKey="eventive"
                        >
                            <div ref={ycDirectoryRefACH} className="h-48 bg-[#FFE7EB] rounded-lg overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}img/eventive.webp`}
                                    alt="eventive"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </ProjectCard>
                    </div>
                </div>
            </div>

            {/* Click outside handler for mobile */}
            {activeCard && (
                <div
                    className="fixed inset-0 z-30 md:hidden"
                    onClick={() => setActiveCard(null)}
                />
            )}

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 mt-16 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden relative">
                        {/* Fixed Header */}
                        <div className="sticky top-0 bg-white p-6 pb-4 border-b border-gray-200 z-10">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-base md:text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                                    <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-semibold text-white ${getStatusColor(selectedProject.status)}`}>
                                        {selectedProject.status}
                                    </span>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto max-h-[calc(80vh-80px)] pb-10 md:pb-0 scrollbar-hide">
                            <div className="p-6 pt-4">
                                <div className="mb-6">
                                    <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                                        <img
                                            src={`${import.meta.env.BASE_URL}${selectedProject.image}`}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                                        <p className="text-gray-700">{selectedProject.fullDescription}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-blue-100 text-white rounded-full text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            {selectedProject.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {selectedProject?.contributions &&
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contribution </h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                {selectedProject?.contributions?.map((contribution, index) => (
                                                    <li key={index}>{contribution}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    }

                                    {selectedProject.liveUrl && (
                                        <div className="pt-4 mb-5 border-t flex justify-center">
                                            <a
                                                href={selectedProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                                            >
                                                <ExternalLink size={20} />
                                                Visit Live Site
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowCaseSection;