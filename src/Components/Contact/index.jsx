import Heading from "../Heading";
import { motion } from "framer-motion";
import { getImageUrl } from "../../Utils/image-util";
import { useFormik } from "formik";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { contactSchema } from "../../Schemas";
import toast, { Toaster } from 'react-hot-toast';

const Contact = ({ profileData }) => {

    const [isLoading, setIsLoading] = useState(false);

    const form = useRef();
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: contactSchema,
            validateOnChange: true,
            validateOnBlur: false,

            onSubmit: (values, actions) => {
                setIsLoading(true);
                emailjs.sendForm('service_a8e3isv', 'template_czb51np', form.current, 'N6jcqnlBvF8iOeGaK')
                    .then((result) => {
                        toast.success('Message Successfully sent')
                        actions.resetForm();
                        setIsLoading(false);
                    }, (error) => {
                        alert("Message not sent please try again later")
                        setIsLoading(false);

                    })
            },

        });

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
            <div id="Contact" className="px-2 xl:px-20 py-10 overflow-x-hidden xl:mx-10">
                <Toaster />
                <div>
                    <div className='xl:px-5 px-2'>
                        {/* Heading */}
                        <Heading title="Contact Me" />
                        <div className="xl:mx-10 mt-10">
                            <div className="flex justify-center mt-1">
                                {/* Contact Img */}
                                <motion.div
                                    initial="hidden"
                                    variants={variantsRight}
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="hidden xl:flex m-auto justify-center h-96">
                                    <img src={getImageUrl(profileData.imgUrl)} alt="contact" />
                                </motion.div>
                                {/* Contact Form */}
                                <motion.div
                                    initial="hidden"
                                    variants={variants}
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.50 }}
                                    className="flex flex-col justify-center lg:mx-10 justify-center grow" >
                                    <form ref={form} onSubmit={handleSubmit} className="w-full px-5">
                                        <div className="flex flex-wrap mx-0 lg:mx-3 mb-3">
                                            <div className="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-first-name">
                                                    First Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="First name" />
                                                {touched.firstName && errors.firstName ? (
                                                    <span className="text-sm text-red-500">{errors.firstName}</span>
                                                ) : null}

                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    Last Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Last name" />

                                                {touched.lastName && errors.lastName ? (
                                                    <span className="text-sm text-red-500">{errors.lastName}</span>
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mx-0 lg:mx-3 mb-3">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Email">
                                                    E-mail
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Email" />
                                                {touched.email && errors.email ? (
                                                    <span className="text-sm text-red-500">{errors.email}</span>
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mx-0 lg:mx-3 mb-3">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Phone">
                                                    Phone
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-tel" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} type="tel" placeholder="Phone" />
                                                {touched.phone && errors.phone ? (
                                                    <span className="text-sm text-red-500">{errors.phone}</span>
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mx-0 lg:mx-3 mb-3">
                                            <div className="w-full px-3 mb-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Message">
                                                    Message
                                                </label>
                                                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white h-40" id="grid-message" name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Your Message" />
                                                {touched.message && errors.message ? (
                                                    <span className="text-sm text-red-500">{errors.message}</span>
                                                ) : null}

                                            </div>
                                            <div className="w-full px-3">
                                                <button
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                                    type="submit"
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? 'Sending...' : 'Send'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
export default Contact;