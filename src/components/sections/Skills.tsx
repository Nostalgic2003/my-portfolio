import { useState } from 'react';

// Icon URLs for technologies using devicon CDN
const techIcons: { [key: string]: string } = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
};

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const allSkills = [
        { name: "React", category: "frontend" },
        { name: "Next.js", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "JavaScript", category: "frontend" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "Node.js", category: "backend" },
        { name: "PHP", category: "backend" },
        { name: "Supabase", category: "backend" },
        { name: "MySQL", category: "backend" },
        { name: "Figma", category: "design" }
    ];

    const filters = [
        { label: "All", value: "all" },
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Design", value: "design" }
    ];

    const filteredSkills = activeFilter === "all" 
        ? allSkills 
        : allSkills.filter(skill => skill.category === activeFilter);

    return (
        <section id="skills" className="bg-black text-white pt-6 pb-10 md:pt-8 md:pb-16 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/5 rounded-full -ml-32 sm:-ml-40 md:-ml-48 -mt-32 sm:-mt-40 md:-mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-white/5 rounded-full -mr-28 sm:-mr-32 md:-mr-40 -mb-28 sm:-mb-32 md:-mb-40 blur-3xl"></div>
            
            <div className="max-w-full lg:px-20 md:px-12 px-4 sm:px-5 relative z-10">
                {/* Section Header */}
                <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                    <div className="inline-block">
                        <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 uppercase tracking-widest">Skills</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            My Expertise
                        </h2>
                    </div>
                    <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-white to-gray-600 rounded-full mt-4 sm:mt-6 mx-auto"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveFilter(filter.value);
                            }}
                            type="button"
                            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border cursor-pointer ${
                                activeFilter === filter.value
                                    ? 'bg-white text-black border-white shadow-lg shadow-white/20'
                                    : 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid with Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative h-32 sm:h-36 md:h-40 lg:h-48 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-500 bg-linear-to-br from-gray-900 to-black transition-all duration-300 hover:shadow-xl hover:shadow-white/10 cursor-pointer"
                        >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-white/10 to-transparent"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-3 sm:p-4 text-center">
                                {/* Icon */}
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    <img 
                                        src={techIcons[skill.name]} 
                                        alt={skill.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                
                                {/* Name */}
                                <h3 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </h3>
                            </div>

                            {/* Border glow on hover */}
                            <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/20 transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* No results message */}
                {filteredSkills.length === 0 && (
                    <div className="flex items-center justify-center py-12 sm:py-16">
                        <p className="text-gray-400 text-base sm:text-lg">No skills found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Skills;