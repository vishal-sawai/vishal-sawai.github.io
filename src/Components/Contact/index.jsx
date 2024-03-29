import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactDetail from "./ContactDetails";
import Heading from "../Heading";
import { motion } from "framer-motion";

const Contact = ({ profileData }) => {

    const { about: { address, phoneNumber } = {}, email } = profileData || {};

    const contactDetails = [
        { Icon: FaLocationArrow, title: 'Location', content: address },
        { Icon: FaPhoneAlt, title: 'Phone', content: phoneNumber },
        { Icon: MdEmail, title: 'Mail', content: email },
    ];

    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const variantsRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <>
            <div id="Contact" className="bg-gray-50 px-2 xl:px-20 py-10 overflow-x-hidden xl:mx-10">
                <div>
                    <div className='px-5'>
                        {/* Heading */}
                        <Heading title="Contact Me" />
                        <div className="xl:mx-10 mt-5">
                            <p className="text-lg mb-1 text-gray-400 text-bold">Feel free contact if any assistance is needed in the future.</p>

                            <div className="flex flex-col justify-center mt-1">

                                <motion.div
                                    initial="hidden"
                                    variants={variantsRight}
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-wrap justify-center lg:mx-20 my-5 lg:px-5 justify-between">
                                    {contactDetails.map((detail, index) => (
                                        <ContactDetail key={index} {...detail} />
                                    ))}
                                </motion.div>

                                {/* Contact Form */}
                                <motion.div
                                    initial="hidden"
                                    variants={variants}
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.50 }}
                                    className="flex flex-col justify-center lg:mx-20 justify-center grow" >
                                    <form className="w-full px-5">
                                        <div className="flex flex-wrap mx-0 lg:mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    First Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First name" />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    Last Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Last name" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mx-0 lg:mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    E-mail
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mx-0 lg:mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Message
                                                </label>
                                                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-40" id="grid-message" type="text" placeholder="Your Message" />
                                            </div>
                                            <div className="w-full px-3">
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </motion.div>

                                {/* contact details*/}
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
export default Contact;