import React from 'react';
import Image from 'next/image';
import { skills } from '../content/data';

const Skill = () => {


    return (
        <div>
            <section id="skills" className="py-10">
                <div className="bg-[#171F2E] rounded-lg shadow-cyberpunk">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#1A2332] rounded-t-lg">
                        <div className="text-sm text-[#8892B0]">skills.tsx</div>
                        <div className="px-2 py-1 text-xs bg-[#233554] rounded text-[#64FFDA]">5+ Years Experience</div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-category p-4 bg-[#1A2332] rounded-lg">
                                    <h3 className="text-[#64FFDA] text-xl mb-4 flex items-center">
                                        <Image src={skill.icon} width={34} height={34} alt={skill.category} className="mr-2" />
                                        {skill.category}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {skill.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="tech-badge bg-[#233554] p-2 rounded text-center flex flex-col ">
                                                <Image className='mx-auto mb-1' src={item.icon} width={34} height={34} alt={item.name} />
                                                <span className="text-[#c1c7da] text-sm font-medium">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;