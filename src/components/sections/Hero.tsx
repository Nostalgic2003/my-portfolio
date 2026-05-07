import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { words } from "../constants";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="bg.png" alt="" />
      </div>

      <div className="hero-layout mt-10 flex flex-col-reverse lg:flex-row lg:gap-12 lg:items-center items-center lg:items-center">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center w-full lg:px-20 md:px-12 px-4 sm:px-5 flex-1 lg:mt-0 mt-8 sm:mt-10 text-center lg:text-left">
          <div className="flex flex-col gap-2">
            <div className="hero-text">
              <h1>Hi! I'm CramDev</h1>
              <h1>
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 sm:gap-2 gap-1 pb-2"
                      >
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-white-50 lg:text-xl md:text-lg sm:text-base text-sm relative z-10 pointer-events-none max-w-lg mx-auto lg:mx-0">
              As a dedicated BSIT student, I thrive on transforming ideas
              into stunning digital experiences.
              <br className="hidden sm:block" />
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <style>{`
                @keyframes bounce {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(3px); }
                }
                .bounce-arrow {
                  animation: bounce 2s infinite;
                }
              `}</style>
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base">
                See My Work
                <svg className="w-4 h-4 sm:w-5 sm:h-5 bounce-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <button 
                onClick={() => {
                  setShowModal(true);
                  window.dispatchEvent(new Event("modalOpen"));
                }}
                className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm1 1v6h6V4H4zm10-1h8v8h-8V3zm1 1v6h6V4h-6zM3 13h8v8H3v-8zm1 1v6h6v-6H4zm10-1h8v8h-8v-8zm1 1v6h6v-6h-6zm-7 1h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm5 0h1v1h-1v-1zm0 2h1v1h-1v-1zm-3 1h1v1h-1v-1z" />
                </svg>
                Scan My CV
              </button>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-10 sm:mt-12 md:mt-16 text-center justify-center lg:justify-start">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">2+</p>
                <p className="text-xs sm:text-sm text-gray-400">Years Exp</p>
              </div>
              <div className="border-l border-gray-600"></div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">10+</p>
                <p className="text-xs sm:text-sm text-gray-400">Projects</p>
              </div>
              <div className="border-l border-gray-600"></div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">10+</p>
                <p className="text-xs sm:text-sm text-gray-400">Clients</p>
              </div>
            </div>
          </div>
        </header>

        {/* RIGHT: Profile Image */}
        <div className="flex flex-1 justify-center items-center relative z-10 lg:mt-0 mt-20 sm:mt-40 mb-12 sm:mb-16 w-full">
          <style>{`
            @keyframes rotate-frame {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes rotate-frame-reverse {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
            .rotating-frame {
              animation: rotate-frame 8s linear infinite;
              will-change: transform;
              transform-origin: center;
            }
            .rotating-frame-reverse {
              animation: rotate-frame-reverse 8s linear infinite;
              will-change: transform;
              transform-origin: center;
            }
          `}</style>
          <div className="relative w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
            {/* Rotating frame - clockwise */}
            <div className="absolute inset-0 rounded-lg border-4 border-white/30 rotating-frame shadow-lg backdrop-blur-md bg-white/10"></div>
            {/* Rotating frame - counter-clockwise */}
            <div className="absolute inset-0 rounded-lg border-4 border-white/20 rotating-frame-reverse shadow-lg" style={{borderStyle: 'dashed'}}></div>
            {/* Profile image */}
            <img src="/profile.jpg" alt="Profile" className="w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-lg object-cover relative" />
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-gray-600 rounded-lg p-5 sm:p-8 max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg sm:text-xl font-semibold">Scan My CV</h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  window.dispatchEvent(new Event("modalClose"));
                }}
                className="text-white-50 hover:text-white transition cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* QR Code placeholder - replace with actual QR code image */}
            <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 flex justify-center">
              <img 
                src="/my-cv.png" 
                alt="QR Code" 
                className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
              />
            </div>

            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/CV - Romarc Bongcaron.pdf';
                link.download = 'CV - Romarc Bongcaron.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer text-sm sm:text-base"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;