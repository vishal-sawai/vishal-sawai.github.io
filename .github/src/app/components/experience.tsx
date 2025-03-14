import React from 'react'

const Experience = () => {
    return (
        <div>
            <section id="experience" className="py-10">
                <div className="bg-[#171F2E] rounded-lg shadow-cyberpunk">
                    <div className="flex items-center px-4 py-2 bg-[#1A2332] rounded-t-lg">
                        <div className="text-sm text-[#8892B0]">experience.tsx</div>
                    </div>
                    <div className="p-6 space-y-8">
                        <div className="flex items-center text-[#64FFDA]">
                            <span className="mr-2">$</span>
                            <span className="typing-animation">cat work-history.log</span>
                        </div>

                        <div className="space-y-8">
                            <div className="border-l-2 border-[#64FFDA] pl-4">
                                <h3 className="text-xl font-bold text-[#64FFDA]">Front-End Developer</h3>
                                <p className="text-[#8892B0] mt-1">Golain. | June 2024 - Present</p>
                                <ul className="mt-4 text-[#8892B0] space-y-2">
                                    <li>• Developed complete company website using React JS, Tailwind CSS, and Framer Motion</li>
                                    <li>• Implemented a robust authentication system for a client, ensuring secure access and user management.</li>
                                    <li>• Integrated interactive maps into the platform, enhancing data visualization and location-based services.</li>
                                    <li>• Contributed to API integration across the platform, enabling seamless communication between frontend and backend systems</li>
                                    <li>• Refactored code for better performance, readability, and scalability, leading to improved platform efficiency.</li>
                                    <li>• Made multiple enhancements and modifications to the platform, continually improving its functionality and user experience.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience
