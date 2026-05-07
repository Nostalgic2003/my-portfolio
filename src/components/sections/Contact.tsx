const Contact = () => {

    return (
        <section id="contact" className="bg-black text-white pt-16 sm:pt-20 pb-10 md:pt-24 md:pb-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-5 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-full lg:px-20 md:px-12 px-4 sm:px-5 relative z-10">
                {/* Section Header */}
                <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                    <div className="inline-block">
                        <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 uppercase tracking-widest">Get in Touch</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Let's Connect
                        </h2>
                    </div>
                    <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-white to-gray-600 rounded-full mt-4 sm:mt-6 mx-auto"></div>
                </div>

                {/* Contact Content */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                        {/* Social Media Containers - Left Side */}
                        <div className="lg:col-span-1">
                            <div className="space-y-4">
                                {/* GitHub */}
                                <a href="https://github.com/Nostalgic2003" target="_blank" rel="noopener noreferrer" className="group block">
                                    <div className="bg-white/5 border border-gray-700 rounded-lg p-4 sm:p-6 hover:bg-white/10 hover:border-gray-500 transition">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 border border-gray-600 flex items-center justify-center group-hover:bg-white/20 transition">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-400 text-xs sm:text-sm font-semibold">GitHub</p>
                                                <p className="text-white text-sm sm:text-base font-semibold truncate group-hover:text-gray-200 transition">Nostalgic2003</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                {/* Gmail */}
                                <a href="mailto:romarcbongcaron@gmail.com" className="group block">
                                    <div className="bg-white/5 border border-gray-700 rounded-lg p-4 sm:p-6 hover:bg-white/10 hover:border-gray-500 transition">
                                        <div className="flex items-start gap-4 min-w-0">
                                            <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 border border-gray-600 flex items-center justify-center group-hover:bg-white/20 transition">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-gray-400 text-xs sm:text-sm font-semibold">Email</p>
                                                <p className="text-white text-sm sm:text-base font-semibold truncate group-hover:text-gray-200 transition">romarcbongcaron@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                {/* Facebook */}
                                <a href="https://www.facebook.com/romarc.uchiha.bongcaron" target="_blank" rel="noopener noreferrer" className="group block">
                                    <div className="bg-white/5 border border-gray-700 rounded-lg p-4 sm:p-6 hover:bg-white/10 hover:border-gray-500 transition">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 border border-gray-600 flex items-center justify-center group-hover:bg-white/20 transition">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-400 text-xs sm:text-sm font-semibold">Facebook</p>
                                                <p className="text-white text-sm sm:text-base font-semibold truncate group-hover:text-gray-200 transition">romarc.uchiha.bongcaron</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/deeznuutss8/" target="_blank" rel="noopener noreferrer" className="group block">
                                    <div className="bg-white/5 border border-gray-700 rounded-lg p-4 sm:p-6 hover:bg-white/10 hover:border-gray-500 transition">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 border border-gray-600 flex items-center justify-center group-hover:bg-white/20 transition">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.798.297-1.474.645-2.15 1.321-.676.676-1.024 1.352-1.321 2.15-.297.788-.498 1.658-.558 2.936C.008 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.936.297.787.645 1.474 1.321 2.15.676.676 1.352 1.024 2.15 1.321.788.297 1.658.499 2.936.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.059 2.148-.261 2.936-.558.787-.297 1.474-.645 2.15-1.321.676-.676 1.024-1.352 1.321-2.15.297-.788.499-1.658.558-2.936.059-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.059-1.277-.261-2.148-.558-2.936-.297-.787-.645-1.474-1.321-2.15-.676-.676-1.352-1.024-2.15-1.321-.788-.297-1.658-.499-2.936-.558C15.667.008 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-400 text-xs sm:text-sm font-semibold">Instagram</p>
                                                <p className="text-white text-sm sm:text-base font-semibold truncate group-hover:text-gray-200 transition">deeznuutss8</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form Container - Right Side */}
                        <div className="lg:col-span-2">
                            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 sm:p-8">
                                <form className="space-y-4 sm:space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-200 mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Your name"
                                                className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition text-sm"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-200 mb-2">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition text-sm"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-200 mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Tell me a bit about your project, timeline, and goals."
                                            rows={5}
                                            className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition resize-none text-sm"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition text-sm"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;