'use client'
import React, { useRef, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef<HTMLFormElement | null>(null);

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().min(3).max(20).required("Please enter your first name"),
        lastName: Yup.string().min(3).max(20).required("Please enter your last name"),
        email: Yup.string().email().required("Please enter your email"),
        phone: Yup.string().required("Please enter your phone number").matches(/^[6-9]\d{9}$/, { message: 'Phone number is not valid' }),
        message: Yup.string().min(10).max(500).required("Please enter your message")
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, actions) => {
            setIsLoading(true);
            try {
                await emailjs.sendForm(
                    'service_a8e3isv',
                    'template_czb51np',
                    form.current || '',
                    'N6jcqnlBvF8iOeGaK'
                );

                toast.success('Message sent successfully');

                actions.resetForm();
            } catch {
                toast.error('Message not sent. Please try again later');
            } finally {
                setIsLoading(false);
            }
        },
    });

    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <section id="contact" className="py-10">
                <div className="bg-[#171F2E] rounded-lg shadow-cyberpunk">
                    <div className="flex items-center px-4 py-2 bg-[#1A2332] rounded-t-lg">
                        <div className="text-sm text-[#8892B0]">contact.tsx</div>
                    </div>
                    <div className="p-6">
                        <form ref={form} onSubmit={formik.handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[#64FFDA] mb-2">const firstName =</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : ''
                                            }`}
                                        placeholder="'Your First Name'"
                                    />
                                    {formik.touched.firstName && formik.errors.firstName && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-[#64FFDA] mb-2">const lastName =</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : ''
                                            }`}
                                        placeholder="'Your Last Name'"
                                    />
                                    {formik.touched.lastName && formik.errors.lastName && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[#64FFDA] mb-2">const email =</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                                            }`}
                                        placeholder="'your@email.com'"
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-[#64FFDA] mb-2">const phone =</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : ''
                                            }`}
                                        placeholder="'Your Phone Number'"
                                    />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#64FFDA] mb-2">const message =</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''
                                        }`}
                                    placeholder="'Your message...'"
                                ></textarea>
                                {formik.touched.message && formik.errors.message && (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#64FFDA] text-[#0F1624] font-bold py-3 px-6 rounded hover:bg-[#4CD8C4] transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'sending...' : 'sendMessage()'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;