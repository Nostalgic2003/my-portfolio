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

  const handleNavClick = () => {
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

          {/* Mobile Menu */}
          <div className="md:hidden flex flex-col">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white-50 hover:text-white transition cursor-pointer p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {mobileMenuOpen && (
              <nav className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-50">
                <ul className="flex flex-col">
                  {navLinks.map(({ link, name }: { link: string; name: string }) => (
                    <li key={name}>
                      <a
                        href={link}
                        onClick={handleNavClick}
                        className="block px-4 sm:px-5 py-3 text-white-50 hover:text-white transition border-b border-white/5 last:border-b-0"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div>
            <button 
              className="flex items-center gap-1 text-white-50 hover:text-white transition cursor-pointer px-2 py-2"
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
    </header>
  );
}

export default NavBar;