import * as Yup from 'yup';

export const contactSchema = Yup.object({
    firstName: Yup.string().min(3).max(20).required("Please enter your first name"),
    lastName: Yup.string().min(3).max(20).required("Please enter your last name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.string().required("Please enter your phone number").matches(/^[6-9]\d{9}$/, { message: 'Phone number is not valid' }),
    message: Yup.string().min(10).max(500).required("Please enter your message")
})