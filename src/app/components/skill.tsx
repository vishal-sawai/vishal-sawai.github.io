import React from 'react';
import Image from 'next/image';

const Skill = () => {
    const skills = [
        {
            category: 'Languages',
            icon: '/images/skills/language.png',
            items: [{
                name: 'JavaScript',
                icon: '/images/skills/TechStack/js.webp',
            }, {
                name: 'TypeScript',
                icon: '/images/skills/TechStack/typescript.png',
            }, {
                name: 'Python',
                icon: '/images/skills/TechStack/python.webp',
            }, {
                name: 'Java',
                icon: '/images/skills/TechStack/java.png',
            }, {
                name: 'php',
                icon: '/images/skills/TechStack/php.png',
            }],
        },
        {
            category: 'Frontend',
            icon: '/images/skills/frontend.png',
            items: [{
                name: 'React.js',
                icon: '/images/skills/TechStack/react.svg',
            }, {
                name: 'Next.js',
                icon: '/images/skills/TechStack/nextJS.png',
            }, {
                name: 'Redux',
                icon: '/images/skills/TechStack/redux.png',
            }, {
                name: 'Tailwind CSS',
                icon: '/images/skills/TechStack/Tailwind.webp',
            }, {
                name: 'Bootstrap',
                icon: '/images/skills/TechStack/bootstrap.png',
            }, {
                name: 'React Native',
                icon: '/images/skills/TechStack/react Native.png',
            },
            {
                name: 'Framer Motion',
                icon: '/images/skills/TechStack/framer.svg',
            }
            ],
        },
        {
            category: 'Backend',
            icon: '/images/skills/backend.png',
            items: [{
                name: 'Node.js',
                icon: '/images/skills/TechStack/nodeJs.png',
            }, {
                name: 'Express.js',
                icon: '/images/skills/TechStack/express.png',
            }, {
                name: 'Django',
                icon: '/images/skills/TechStack/django.png',
            },],
        },
        {
            category: 'Cloud & Database',
            icon: '/images/skills/cloud.png',
            items: [{
                name: 'VPS',
                icon: '/images/skills/TechStack/vps.png',
            }, {
                name: 'CI/CD',
                icon: '/images/skills/TechStack/cicd.png',
            }, {
                name: 'Firebase',
                icon: '/images/skills/TechStack/firebase.png',
            }, {
                name: 'MongoDB',
                icon: '/images/skills/TechStack/mongoDB.png',
            }, {
                name: 'MySQL',
                icon: '/images/skills/TechStack/sql.png',
            }],
        },
    ];

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