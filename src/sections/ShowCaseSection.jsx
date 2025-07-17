import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

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
                        start: "top bottom-=80",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Project Worked On"
                    sub="Recent projects"
                />
                <div className="w-full mt-20">
                    <div className="showcaselayout">
                        <div ref={rydeRef} className="first-project-wrapper">
                            <div className="image-wrapper">
                                {/* <img src="/images/project1.png" alt="Ryde App Interface" /> */}
                                {/* <img src="/img/project01.jpg" alt="ZEEQR" /> */}
                                <img src={`${import.meta.env.BASE_URL}img/project01.webp`} alt="ZEEQR" />
                            </div>
                            <div className="text-content">
                                <a href="https://zeeqr.com/" target="_blank" rel="noopener noreferrer">
                                    <h2>
                                        ZEEQR - Digital card Innovations develops eco-friendly Smart NFC & QR Card Platform
                                    </h2>
                                </a>
                                <p className="text-white-50 md:text-xl">
                                    A web application built with React.js, Zustand, Node.js, & TailwindCSS for a fast,
                                    user-friendly experience.
                                </p>
                            </div>
                        </div>

                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={libraryRef}>
                                <div className="image-wrapper bg-[#FFEFDB]">
                                    {/* <img
                                        src="/images/project2.png"
                                        alt="Bharat Auction"
                                    /> */}
                                    <img
                                        // src={`${import.meta.env.BASE_URL}images/project2.png`}
                                        src={`${import.meta.env.BASE_URL}img/auction.webp`}
                                        alt="Bharat Auction"
                                    />
                                </div>
                                <h2>Bharat Auction - Online Bidding Platform</h2>
                            </div>

                            <div className="project" ref={ycDirectoryRef}>
                                <div className="image-wrapper bg-[#FFE7EB]">
                                    {/* <img src="/images/project3.png" alt="Hostec" /> */}
                                    {/* <img src={`${import.meta.env.BASE_URL}images/project3.png`} alt="Hostec" /> */}
                                    <img src={`${import.meta.env.BASE_URL}img/survey.webp`} alt="Hostec" />
                                </div>
                                <h2>Hostec - Client survey and reporting system</h2>
                            </div>
                        </div>


                    </div>
                    <div className="showcaselayout mt-8">

                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={libraryRefMEA}>
                                <div className="image-wrapper bg-[#FFEFDB]">
                                    {/* <img
                                        src="/img/realEstate.jpeg"
                                        alt="MEA International"
                                    /> */}
                                    <img
                                        src={`${import.meta.env.BASE_URL}img/realEstate.webp`}
                                        alt="MEA International"
                                    />
                                </div>
                                <h2>MEA International - Real Estate Platform</h2>
                            </div>

                            <div className="project" ref={ycDirectoryRefCH}>
                                <div className="image-wrapper bg-[#FFE7EB]">
                                    {/* <img src="/img/church-website.png" alt="Community Website" /> */}
                                    <img src={`${import.meta.env.BASE_URL}img/church-website.webp`} alt="Community Website" />
                                </div>
                                <a href="https://www.kannarapalli.com/" target="_blank" rel="noopener noreferrer">
                                    <h2>Kannara church - Community Website</h2>
                                </a>
                            </div>
                        </div>
                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={libraryRefEC}>
                                <div className="image-wrapper bg-[#FFEFDB]">
                                    {/* <img
                                        src="/img/airchip.png"
                                        alt="airchip"
                                    /> */}
                                    <img
                                        src={`${import.meta.env.BASE_URL}img/airchip.webp`}
                                        alt="airchip"
                                    />
                                </div>
                                <h2>Airchip - An Ecommerce website that sells laptops</h2>
                            </div>

                            <div className="project" ref={ycDirectoryRefACH}>
                                <div className="image-wrapper bg-[#FFE7EB]">
                                    {/* <img src="/img/eventive.png" alt="eventive" /> */}
                                    <img src={`${import.meta.env.BASE_URL}img/eventive.webp`} alt="eventive" />
                                </div>
                                <h2>Eventive - A event management application like social media</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCaseSection