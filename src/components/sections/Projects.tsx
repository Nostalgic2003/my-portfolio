const projects = [
  {
    id: 1,
    title: "WattsApp",
    description: "A smart energy monitoring mobile application that provides real-time tracking of energy usage per room/device. Features include voltage monitoring, current tracking, power factor analysis, and total bill calculation with intuitive data visualization.",
    image: "/figma - project 1.jpg",
    tags: ["UI/UX Design", "Mobile App", "Figma", "Energy Management"],
    colors: {
      primary: "#1565C0",
      secondary: "#FFA000",
      gradient: "from-blue-600 to-blue-800"
    },
    figmaLink: "https://www.figma.com/proto/Ze8zsP2hB4V0Du4ii9bTUq/Smart-Breaker-System?node-id=434-6306&p=f&t=eli5I9WpChyIQ0Fj-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
  },
  {
    id: 2,
    title: "Eco Points",
    description: "A sustainable rewards mobile application that incentivizes eco-friendly behavior. Users collect points by scanning QR codes from recycling bins and can redeem them for rewards. Features include points tracking, transaction history, and QR scanner integration.",
    image: "/figma - project 2.jpg",
    tags: ["UI/UX Design", "Mobile App", "Figma", "Sustainability"],
    colors: {
      primary: "#2E7D32",
      secondary: "#FDD835",
      gradient: "from-green-600 to-green-800"
    },
    figmaLink: "https://www.figma.com/proto/mNAQPGtPqJTTQHS4OH6FnB/Eco-Points?node-id=262-55726&p=f&t=X902qBDv0Zx3oHyY-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
  },
  {
    id: 3,
    title: "Student Portal",
    description: "A comprehensive student management mobile application featuring dashboard overview, status tracking, event notifications, and announcements. Provides real-time access to academic information, campus events, and institutional updates with an intuitive interface.",
    image: "/figma - project 3.png",
    tags: ["UI/UX Design", "Mobile App", "Figma", "Education"],
    colors: {
      primary: "#1E3A8A",
      secondary: "#F97316",
      gradient: "from-blue-900 to-blue-700"
    },
    figmaLink: "https://www.figma.com/proto/Gh9Xxu2OV8Rxe6rt21hkDc/Group-F---Smart-Check-Attendance-High-Fid?node-id=2121-23&p=f&t=SWHD8IWDyibSKFAn-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2121%3A23&show-proto-sidebar=1"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white pt-16 sm:pt-20 pb-10 md:pt-24 md:pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-5 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-full lg:px-20 md:px-12 px-4 sm:px-5 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-block">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 uppercase tracking-widest">Projects</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              My Work
            </h2>
          </div>
          <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-white to-gray-600 rounded-full mt-4 sm:mt-6 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => project.figmaLink !== "#" && window.open(project.figmaLink, "_blank")}
              className="group relative bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 cursor-pointer"
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-linear-to-br ${project.colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Image Container */}
              <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-2.5 sm:p-3">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-1.5">{project.title}</h3>
                <p className="text-white-50 text-[11px] sm:text-xs leading-relaxed mb-2 sm:mb-2.5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium rounded-full bg-white/5 text-white-50 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div 
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: project.colors.primary }}
              ></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;