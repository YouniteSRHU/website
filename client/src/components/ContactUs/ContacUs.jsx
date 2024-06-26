import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { EarthCanvas } from './Canvas'
import { FaPhone } from 'react-icons/fa'
import './ContactUs.css'
// import { SectionWrapper } from '../hoc'

// template_cdu56mq
// service_j31j3jl
//cwKmOLy55ueDKpiMc

const ContactUs = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send('service_7p8m98n', 'template_b53oh9r',
            {
                from_name: form.name,
                to_name: "Younite Team",
                from_email: form.email,
                to_email: "younite@srhu.edu.in",
                message: form.message
            },{
                publicKey: 'aDrPqyiBouA33coU1',
            }
        ).then(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible");
            setForm({
                name: '',
                email: '',
                message: '',
            })
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong')
        })
    }

    return (
        <div className=' xl:flex-row flex-col-reverse flex gap-10 overflow-hidden form-container'>
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0, y: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', delay: 0.2, duration: 1, ease: 'easeOut' }}
                className="flex-[0.75] form-bg p-8 rounded-2xl"
            >
                <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">Get in touch</p>
                <h3 className="text-[#013D7F] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h3>
                <p className='mt-12 text-[#013D7F] font-bold text-xl flex justify-center gap-2'>
                    <span style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}><FaPhone /></span>
                    <span>8755533876  </span><span>,</span><span>7310696262</span>
                </p>
                <p className=" mt-6 sm:text-[18px] text-[14px] uppercase tracking-wider">OR</p>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt- flex flex-col gap-8"
                >
                    <label className='flex flex-col'>
                        <span className='text-[#013D7F] font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What is your name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                            required
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-[#013D7F] font-medium mb-4'>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What is your email?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                            required
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-[#013D7F] font-medium mb-4'>Your Message</span>
                        <textarea
                            rows='7'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                            required
                        />
                    </label>
                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0, y: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', delay: 0.2, duration: 1, ease: 'easeOut' }}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default ContactUs
