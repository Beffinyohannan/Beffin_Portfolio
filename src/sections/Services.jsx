// import React from 'react'
// import { servicesList } from '../constants'
// import TitleHeader from '../components/TitleHeader'

// function Services() {
//     return (
//         <section
//             id="services"
//             className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
//         >
//             <div className="w-full h-full md:px-20 px-5">
//                 <TitleHeader
//                     title="My Services"
//                     sub="What I Offer"
//                 />
//                 <div className="w-full padding-x-lg mt-20">
//                     <div className="mx-auto grid-3-cols">
//                         {servicesList.map(({ imgPath, title, desc }) => (
//                             <div
//                                 key={title}
//                                 className="card-border rounded-xl p-8 flex flex-col gap-4"
//                             >
//                                 <div className="size-14 flex items-center justify-center rounded-full">
//                                     <img src={imgPath} alt={title} />
//                                 </div>
//                                 <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
//                                 <p className="text-white-50 text-lg">{desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Services

import React, { useState, useEffect, useRef } from 'react';
import { Globe, Smartphone, Palette, Zap, Code, Database, Monitor, Layers } from 'lucide-react';
import TitleHeader from '../components/TitleHeader';

function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    // const services = [
    //     {
    //         icon: Globe,
    //         title: "Web App Development",
    //         description: "Build highly interactive and responsive web applications using React and other modern frontend technologies, tailored to meet your business needs.",
    //         color: "from-pink-500 to-rose-500"
    //     },
    //     {
    //         icon: Smartphone,
    //         title: "Responsive Web Design",
    //         description: "Create mobile-first, responsive websites that adapt flawlessly to any screen size using CSS, Bootstrap, or Tailwind CSS for a consistent experience.",
    //         color: "from-purple-500 to-indigo-500"
    //     },
    //     {
    //         icon: Palette,
    //         title: "UI/UX Design Implementation",
    //         description: "Convert design concepts into pixel-perfect, user-friendly web interfaces, ensuring a seamless and engaging user experience across all devices.",
    //         color: "from-blue-500 to-cyan-500"
    //     },
    //     {
    //         icon: Zap,
    //         title: "API Integration",
    //         description: "Integrate third-party APIs (RESTful, GraphQL) to enhance functionality, such as fetching live data, integrating payment systems, or enabling authentication.",
    //         color: "from-green-500 to-emerald-500"
    //     },
    //     {
    //         icon: Code,
    //         title: "Frontend Optimization",
    //         description: "Optimize web applications for performance, SEO, and accessibility, ensuring fast loading times and excellent user experience across all platforms.",
    //         color: "from-orange-500 to-red-500"
    //     },
    //     {
    //         icon: Database,
    //         title: "Full Stack Development",
    //         description: "End-to-end development using MERN stack (MongoDB, Express, React, Node.js) to create complete web applications with robust backend systems.",
    //         color: "from-teal-500 to-blue-500"
    //     }
    // ];
    const services = [
        {
            icon: Globe,
            title: "Web App Development",
            description:
                "Develop scalable, interactive web applications using React and modern frontend frameworks tailored to your business goals.",
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: Smartphone,
            title: "Responsive Web Design",
            description:
                "Design mobile-friendly, fully responsive interfaces that adapt seamlessly to all screen sizes using Tailwind CSS or Bootstrap.",
            color: "from-purple-500 to-indigo-500"
        },
        {
            icon: Palette,
            title: "UI/UX Design Implementation",
            description:
                "Transform UI/UX designs into clean, accessible, and user-centered interfaces for a consistent experience across devices.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Zap,
            title: "API Integration",
            description:
                "Connect and integrate RESTful or GraphQL APIs to enhance functionality — from authentication to real-time data and payments.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Code,
            title: "Frontend Optimization",
            // description:"Boost site speed, SEO, and accessibility by optimizing assets, structure, and code for fast, user-friendly performance.",
            description: "Optimize web applications for performance, SEO, and accessibility, ensuring fast loading times and excellent user experience across all platforms.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: Database,
            title: "Full Stack Development",
            // description:"Build complete MERN stack applications with secure backends and dynamic frontends — from database to deployment.",
            description: "End-to-end development using MERN stack (MongoDB, Express, React, Node.js) to create complete web applications with robust backend systems.",
            color: "from-teal-500 to-blue-500"
        }
    ];
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stagger card animations
                    services.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleCards(prev => [...prev, index]);
                        }, index * 150);
                    });
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id='services'
            className="min-h-screen bg-black md:mt-40 mt-20 px-6 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full opacity-5 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                {/* <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <span className="text-purple-400 font-medium tracking-wider text-sm">WHAT I OFFER</span>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive web development solutions tailored to bring your digital vision to life
                    </p>
                </div> */}
                <div className='mb-16 text-center'>

                    <TitleHeader
                        title="My Services"
                        sub="What I Offer"
                    />
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                        Comprehensive web development solutions tailored to bring your digital vision to life
                    </p>
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${visibleCards.includes(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                                }`}
                            style={{
                                transitionDelay: `${index * 150}ms`
                            }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Icon */}
                            <div className="relative mb-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover effect border */}
                            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/20 transition-all duration-500"></div>

                            {/* Bottom gradient line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center text-xs md:text-base gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 md:px-8 py-4 hover:border-purple-500/50 transition-all duration-300 group">
                        <span className="text-gray-300 group-hover:text-purple-300 transition-colors">Ready to start your project?</span>
                        <a href="#contact" >
                            <button className="px-3 md:px-6 cursor-pointer py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white  font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
                                Get In Touch
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}

export default Services;