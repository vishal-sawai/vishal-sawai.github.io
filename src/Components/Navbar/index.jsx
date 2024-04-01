import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useWindowScroll } from 'react-use';


const Navbar = ({ name, page }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { y } = useWindowScroll();

    let bgColor = y > 70 ? 'bg-gray-800' : 'bg-gray-50';
    let textColor = y > 70 ? 'text-white' : 'text-red-500';
    let navColor = y > 70 ? 'text-gray-100' : 'text-gray-500';

    page === "Project" && (bgColor = 'bg-gray-800') && (textColor = 'text-white') && (navColor = 'text-gray-100');


    return (
        <motion.nav className={`${bgColor} fixed w-full z-30 transition-colors duration-500`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className={`${textColor} font-sans text-2xl font-bold`}>{name}</h1>
                        </div>
                        <div className="hidden md:block md:ml-6">
                            <div className="flex space-x-4">
                                <HashLink to="/home" className={`${navColor} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Home</HashLink>
                                {page != "Project" && (<>
                                    <HashLink to="#About" className={`${navColor}  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>About</HashLink>
                                    <HashLink to="#Projects" className={`${navColor}  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Projects</HashLink>
                                    <HashLink to="#Contact" className={`${navColor}  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Contact</HashLink>
                                </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <HashLink to="/home" className={`${navColor} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>Home</HashLink>
                    {page != "Project" && (<>
                        <HashLink to="#About" className={`${navColor} text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>About</HashLink>
                        <HashLink to="#Projects" className={`${navColor} text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>Projects</HashLink>
                        <HashLink to="#Contact" className={`${navColor} text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>Contact</HashLink>
                    </>
                    )}
                </div>
            </div>

        </motion.nav >
    )
}

export default Navbar;