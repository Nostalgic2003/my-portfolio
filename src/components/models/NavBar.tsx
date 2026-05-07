import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // listen for modal open/close using custom events
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("modalOpen", handleModalOpen);
    window.addEventListener("modalClose", handleModalClose);

    // cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("modalOpen", handleModalOpen);
      window.removeEventListener("modalClose", handleModalClose);
    };
  }, []);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} ${modalOpen ? "blur" : ""}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          CramDev
        </a>

        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }: { link: string; name: string }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* PH Language Button - Hidden on Mobile */}
          <div className="hidden md:flex">
            <button 
              className="flex items-center gap-1 text-white-50 hover:text-white transition cursor-pointer"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20" />
                <path d="M12 2v20" />
                <ellipse cx="12" cy="12" rx="3" ry="10" />
                <path d="M5.64 5.64a10 10 0 0 1 12.72 0" />
                <path d="M5.64 18.36a10 10 0 0 0 12.72 0" />
              </svg>
              <span className="text-xs sm:text-sm">PH</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-gray-600 mt-2">
          <ul className="flex flex-col gap-4 px-4 py-4">
            {navLinks.map(({ link, name }: { link: string; name: string }) => (
              <li key={name}>
                <a 
                  href={link}
                  onClick={handleNavLinkClick}
                  className="text-white-50 hover:text-white transition text-sm"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;