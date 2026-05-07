const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-gray-800 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto lg:px-20 md:px-12 px-4 sm:px-5">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="text-center sm:text-left">
                        <p className="text-gray-400 text-sm">
                            © 2026 CramDev. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="text-gray-400 hover:text-white text-sm transition">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
