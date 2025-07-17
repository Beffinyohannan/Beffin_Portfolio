
import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Calendar, Code, Github, Linkedin, Twitter, Instagram, Facebook, BriefcaseBusinessIcon } from 'lucide-react';
import TitleHeader from '../components/TitleHeader';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = ['React', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5', 'Node.js', 'Tailwind CSS'];

    const socialMedias = [
        { icon: Github, href: 'https://github.com/Beffinyohannan' },
        { icon: Linkedin, href: 'http://www.linkedin.com/in/beffin-yohannan' },
        { icon: Instagram, href: 'https://www.instagram.com/dark_amateur/?utm_source=qr' },
        { icon: Facebook, href: 'https://www.facebook.com/beffinyohannan' },
        { icon: BriefcaseBusinessIcon, href: 'https://zeeqr.info/profile-view/686cb187220890dc60503936' }
    ]

    const personalDetails = [
        { icon: Mail, label: 'Email', value: 'beffinyohannan25@gmail.com' },
        { icon: MapPin, label: 'Location', value: 'Kochi, India' },
        { icon: Calendar, label: 'Experience', value: '2.5+ years' }
    ]

    const roles = [
        "FULL STACK MERN DEVELOPER",
        "FRONTEND DEVELOPER",
        "REACT DEVELOPER",
        "BACKEND DEVELOPER",
        "JAVASCRIPT DEVELOPER",
        "NODEJS DEVELOPER",
    ];

    return (
        <section
            // className="min-h-screen bg-black relative overflow-hidden"
            id="about"
            className='flex-center md:mt-40 mt-20 section-padding xl:px-0'
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="About Me"
                    sub="About myself"
                />
                {/* Subtle background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-600 rounded-full opacity-5 blur-3xl"></div>
                </div>

                {/* Grid dots pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 py-16">
                    <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                        <div className="grid lg:grid-cols-2 gap-16 justify-center items-center">
                            {/* Profile Image Section */}
                            <div className="relative group">
                                <div className="relative transform transition-all duration-500 hover:scale-105">
                                    {/* Glowing border effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

                                    {/* Image container */}
                                    <div className="relative bg-gray-900 rounded-2xl p-2 backdrop-blur-sm border border-gray-800">
                                        <div className="relative overflow-hidden rounded-xl">
                                            <img
                                                // src='/img/pic01.jpg'
                                                src={`${import.meta.env.BASE_URL}img/pic01.webp`}
                                                alt="Beffiny Yohannan - Full Stack Mern Developer"
                                                className="w-full h-[400px] md:h-[600px] object-cover transform transition-all duration-700 group-hover:scale-110"
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Floating tech icons */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <Code className="absolute top-4 right-4 w-8 h-8 text-purple-400 animate-bounce" />
                                                <div className="absolute bottom-4 left-4 w-6 h-6 text-pink-400">
                                                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="space-y-8">
                                {/* Header */}
                                <div className="space-y-6">


                                    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                                        <span className="inline-block animate-fadeInUp">Beffin Yohannan</span>
                                        {/* <br /> */}
                                        {/* <span className="inline-block animate-fadeInUp delay-200">
                                        Yohannan
                                    </span> */}
                                    </h1>
                                    {/* <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        <span className="text-purple-400 font-medium tracking-wider text-sm">FULL STACK MERN DEVELOPER</span>
                                    </div> */}

                                    <div className="hero-text-about relative z-10 pointer-events-none flex flex-col justify-center md:text-[20px] text-[15px] font-semibold">
                                        <h1 className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>

                                            <div className="slide overflow-hidden h-[30px] px-2 md:px-5">
                                                <div className="wrapper animate-slide flex flex-col">
                                                    {roles.map((role, index) => (
                                                        <div
                                                            key={index}
                                                            className="h-[30px] flex items-center text-purple-400 font-medium tracking-wider text-sm md:text-base"
                                                        >
                                                            {role}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </h1>
                                    </div>
                                    <p className="text-xl text-gray-400 leading-relaxed max-w-xl animate-fadeInUp delay-300">
                                        A developer based in India with a passion for code. Passionate and detail-oriented frontend developer with experience in React, JavaScript, and modern UI design.
                                    </p>
                                </div>



                                {/* Details */}
                                <div className="grid grid-cols-1 gap-4 animate-fadeInUp delay-500">
                                    {personalDetails.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
                                        >
                                            <item.icon className="w-5 h-5 text-purple-400" />
                                            <span className="text-sm text-gray-500">{item.label}:</span>
                                            <span className="font-medium w-40 text-wrap">{item.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Skills */}
                                <div className="animate-fadeInUp delay-600">
                                    <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-300 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-4 animate-fadeInUp delay-700">
                                    {socialMedias.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target='_blank'
                                            className="p-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 group"
                                        >
                                            <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </div>
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
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .delay-200 { animation-delay: 200ms; }
                .delay-300 { animation-delay: 300ms; }
                .delay-400 { animation-delay: 400ms; }
                .delay-500 { animation-delay: 500ms; }
                .delay-600 { animation-delay: 600ms; }
                .delay-700 { animation-delay: 700ms; }
            `}</style>
            </div>
        </section>
    );
}

export default About;