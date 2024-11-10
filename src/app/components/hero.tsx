import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10">
                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#171F2E] rounded-lg shadow-cyberpunk">
                        <div className="flex items-center px-4 py-2 bg-[#1A2332] rounded-t-lg">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFD93D]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#6BCB77]"></div>
                            </div>
                            <div className="ml-4 text-sm text-[#8892B0]">terminal@vishal-portfolio</div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center text-[#64FFDA]">
                                <span className="mr-2">$</span>
                                <span className="typing-animation">echo &quot;Hello World! 👋&quot;</span>
                            </div>
                            <div className="text-[#64FFDA] flex flex-col md:flex-row items-center gap-8">
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#64FFDA] shadow-neon">
                                    <Image
                                        src="/Images/profile.jpg"
                                        alt="Vishal Sawai"
                                        fill
                                        className="object-cover transform hover:scale-110 transition duration-500 w-full h-full"

                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-text="Vishal Sawai">Vishal Sawai</h1>
                                    <p className="text-xl sm:text-2xl text-[#8892B0] glitch-subtitle">Full Stack Developer</p>
                                    <p className="text-md text-[#64FFDA] mt-2 whitespace-normal text-justify">Writing code is like solving a puzzle, where every piece fits together to create something amazing</p>                                </div>
                            </div>
                            <div className="flex items-center text-[#64FFDA] mt-8">
                                <span className="mr-2">$</span>
                                <span className="typing-animation">cat about.txt</span>
                            </div>
                            <div className="text-[#8892B0] leading-relaxed bg-[#1A2332] p-4 rounded-lg border border-[#233554]">
                                <p className="text-[#64FFDA]">Hello, I&apos;m Vishal Sawai! I have a lot of fun creating interesting things, exploring new ideas, and learning new skills. I&apos;m a quick learner and enjoy the process of figuring out solutions to challenges. I get a real kick out of solving problems and facing challenges. It&apos;s like a puzzle, and finding the right solution is pretty thrilling. I truly enjoy what I do because it&apos;s not just about writing code; it&apos;s about making things work in creative and functional ways.</p>
                            </div>
                            {/* Social media linkedin,x,github */}
                            <div className="flex items-center justify-center space-x-4 mt-8">

                                <a
                                    href="https://x.com/vishaldnynasha1"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#8892B0] hover:text-[#64FFDA] transition-all duration-300"
                                >
                                    <Image
                                        src="/Images/x.png"
                                        alt="Twitter"
                                        width={34}
                                        height={34}
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vishal-sawai-5462b9186/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#8892B0] hover:text-[#64FFDA] transition-all duration-300"
                                >
                                    <Image
                                        src="/Images/linkedin.png"
                                        alt="LinkedIn"
                                        width={34}
                                        height={34}
                                    />
                                </a>
                                <a
                                    href="https://github.com/Vishal-Sawai"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#8892B0] hover:text-[#64FFDA] transition-all duration-300"
                                >
                                    <Image
                                        src="/Images/github.png"
                                        alt="GitHub"
                                        width={34}
                                        height={34}
                                    />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </div >
    )
}

export default Hero