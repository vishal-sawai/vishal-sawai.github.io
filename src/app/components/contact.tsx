'use client'
import React, { useRef, useState } from 'react'
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef<HTMLFormElement | null>(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const validationSchema = Yup.object({
        firstName: Yup.string().min(3).max(20).required("Please enter your first name"),
        lastName: Yup.string().min(3).max(20).required("Please enter your last name"),
        email: Yup.string().email().required("Please enter your email"),
        phone: Yup.string().required("Please enter your phone number").matches(/^[6-9]\d{9}$/, { message: 'Phone number is not valid' }),
        message: Yup.string().min(10).max(500).required("Please enter your message")
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
            });
            setIsLoading(true);
            await emailjs.sendForm(
                'service_a8e3isv',
                'template_czb51np',
                form.current || '',
                'N6jcqnlBvF8iOeGaK'
            );
            toast.success('Message sent successfully');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const newErrors: any = {};
                err.inner.forEach((error) => {
                    if (error.path) {
                        newErrors[error.path] = error.message;
                    }
                });
                setErrors(newErrors);
            } else {
                toast.error('Message not sent. Please try again later');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Toaster position="top-right" reverseOrder={false} />
            <section id="contact" className="py-10">
                <div className="bg-[#171F2E] rounded-lg shadow-cyberpunk">
                    <div className="flex items-center px-4 py-2 bg-[#1A2332] rounded-t-lg">
                        <div className="text-sm text-[#8892B0]">contact.tsx</div>
                    </div>
                    <div className="p-6">
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[#64FFDA] mb-2">const firstName =</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${errors.firstName ? 'border-red-500' : ''}`}
                                        placeholder="'Your First Name'"
                                    />
                                    {errors.firstName && (
                                        <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-[#64FFDA] mb-2">const lastName =</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${errors.lastName ? 'border-red-500' : ''}`}
                                        placeholder="'Your Last Name'"
                                    />
                                    {errors.lastName && (
                                        <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[#64FFDA] mb-2">const email =</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${errors.email ? 'border-red-500' : ''}`}
                                        placeholder="'your@email.com'"
                                    />
                                    {errors.email && (
                                        <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-[#64FFDA] mb-2">const phone =</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${errors.phone ? 'border-red-500' : ''}`}
                                        placeholder="'Your Phone Number'"
                                    />
                                    {errors.phone && (
                                        <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#64FFDA] mb-2">const message =</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full bg-[#233554] border border-[#2A4163] text-[#64FFDA] px-4 py-2 rounded focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] ${errors.message ? 'border-red-500' : ''}`}
                                    placeholder="'Your message...'"
                                ></textarea>
                                {errors.message && (
                                    <div className="text-red-500 text-sm mt-1">{errors.message}</div>
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