import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactDetail from "./ContactDetails";


const Contact = ({ profileData }) => {

    const { about: { address, phoneNumber } = {}, email } = profileData || {};

    const contactDetails = [
        { Icon: FaLocationArrow, title: 'Location', content: address },
        { Icon: FaPhoneAlt, title: 'Phone', content: phoneNumber },
        { Icon: MdEmail, title: 'Mail', content: email },
    ];
    return (
        <>
            <div className="bg-gray-50 px-2 lg:px-20 py-8">
                <div>
                    <div className='px-5'>
                        <div>
                            <h1 className="text-2xl font-bold text-red-600 text-center">Contact Me</h1>
                        </div>
                        <div className="lg:mx-10 mt-5">
                            <p className="text-lg mb-5 text-gray-400 text-bold">Feel free contact if any assistance is needed in the future.</p>

                            <div className="flex flex-wrap justify-center mt-10">

                                {/* Contact Form */}
                                <div className="flex flex-col justify-center lg:mx-5">
                                    <form className="w-full max-w-lg my-auto">
                                        <div className="flex flex-wrap lg:mx-3 mb-6">
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
                                        <div className="flex flex-wrap lg:mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    E-mail
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap lg:mx-3 mb-6">
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
                                </div>

                                {/* contact details*/}
                                <div className="flex flex-col justify-center mx-5 lg:mt-0 mt-2">
                                    {contactDetails.map((detail, index) => (
                                        <ContactDetail key={index} {...detail} />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
export default Contact;