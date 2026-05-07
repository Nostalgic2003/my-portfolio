import { useState, useEffect, useRef } from 'react';

const About = () => {
    const [activeExp, setActiveExp] = useState<number>(0);
    const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

    const experiences = [
        {
            title: "FullStack Web Developer",
            company: "Various Clients",
            period: "2023 - Present",
            description: "Building responsive web applications and managing end-to-end development projects."
        },
        {
            title: "UI/UX Designer",
            company: "Figma Projects",
            period: "2023 - Present",
            description: "Creating modern, user-centered designs and prototypes using Figma."
        },
        {
            title: "Web Application Developer",
            company: "Various Clients",
            period: "2023 - Present",
            description: "Developing custom web applications with React, databases, and modern tech stack."
        }
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = experienceRefs.current.findIndex(ref => ref === entry.target);
                    if (index !== -1) {
                        setActiveExp(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        experienceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="bg-black text-white pt-32 sm:pt-32 md:pt-24 md:pb-0 pb-0 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/5 rounded-full -mr-32 sm:-mr-40 md:-mr-48 -mt-32 sm:-mt-40 md:-mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-white/5 rounded-full -ml-28 sm:-ml-32 md:-ml-40 -mb-28 sm:-mb-32 md:-mb-40 blur-3xl"></div>
            
            <div className="max-w-full lg:px-20 md:px-12 px-4 sm:px-5 relative z-10">
                {/* Section Header */}
                <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                    <div className="inline-block">
                        <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 uppercase tracking-widest">About</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Who I Am
                        </h2>
                    </div>
                    <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-white to-gray-600 rounded-full mt-4 sm:mt-6 mx-auto"></div>
                </div>

                {/* Bio Section with Enhanced Styling */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
                    <div className="space-y-4 sm:space-y-6">
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            I am Romarc U. Bongcaron an enthusiastic full stack developer with more than two years of experience dedicated to designing and implementing exceptional digital experiences. 
                            My journey into the world of web development began with a deep curiosity about the mechanics behind websites and applications. 
                            This initial intrigue has blossomed into a genuine passion for crafting elegant, user-centered solutions that not only meet functional requirements but also enhance the overall user experience.
                        </p>
                        
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            I excel at transforming abstract ideas into tangible applications. 
                            Whether collaborating with teams to gather requirements or troubleshooting code, I am committed to delivering high-quality results that exceed user expectations. 
                            As I advance in this dynamic field, I look forward to embracing new challenges and expanding my skills. 
                            I view every project as an opportunity to learn and innovate, and I am eager to contribute my expertise to create impactful digital solutions.
                        </p>
                    </div>

                    {/* Experience Section */}
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">Experience</h3>
                        <div className="relative">
                            <div className="flex flex-col gap-0">
                                {experiences.map((exp, index) => (
                                    <div 
                                        key={index} 
                                        ref={(el) => { experienceRefs.current[index] = el; }}
                                        className="flex gap-4 relative"
                                    >
                                        {/* Timeline Dot and Line */}
                                        <div className="flex flex-col items-center shrink-0 relative">
                                            {/* Line connecting to next bullet - only if not last item */}
                                            {index < experiences.length - 1 && (
                                                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-full">
                                                    {/* Background line (gray) */}
                                                    <div className="absolute inset-0 bg-gray-700"></div>
                                                    {/* Fill line (white) - shows when scrolled past */}
                                                    <div 
                                                        className={`absolute inset-0 bg-white/60 transition-all duration-300 origin-top ${
                                                            activeExp > index ? 'scale-y-100' : 'scale-y-0'
                                                        }`}
                                                    ></div>
                                                </div>
                                            )}
                                            {/* Bullet */}
                                            <div 
                                                className={`w-3 h-3 rounded-full mt-1.5 transition-all duration-300 relative z-10 ${
                                                    activeExp >= index 
                                                        ? 'bg-white scale-125 shadow-lg shadow-white/50' 
                                                        : 'bg-gray-500'
                                                }`}
                                            >
                                                {activeExp === index && (
                                                    <span className="absolute inset-0 w-3 h-3 rounded-full bg-white/40 animate-ping"></span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className={`pb-16 sm:pb-20 md:pb-24 transition-all duration-300 ${
                                            activeExp >= index ? 'opacity-100' : 'opacity-60'
                                        }`}>
                                            <h4 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                                                activeExp >= index ? 'text-white' : 'text-gray-400'
                                            }`}>{exp.title}</h4>
                                            <p className="text-xs text-gray-400 font-medium mb-2 sm:mb-3">{exp.period}</p>
                                            <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                                                activeExp >= index ? 'text-gray-200' : 'text-gray-500'
                                            }`}>{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
