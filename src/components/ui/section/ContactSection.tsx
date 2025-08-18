"use client"
import ClientsLayout from '@/layouts/ClientsLayout'
import React, { useState } from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { PiFacebookLogoBold, PiWhatsappLogo } from 'react-icons/pi'

export default function ContactSection() {
  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<any>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contact = [
    {
      icon: <IoCallOutline size={21} />,
      content: "+1234567890",
      href: "tel:+1234567890"
    },
    {
      icon: <MdOutlineMailOutline size={22} />,
      content: "contact@example.com",
      href: "mailto:contact@example.com"
    },
    {
      icon: <PiWhatsappLogo size={22} />,
      content: "+1234567890",
      href: "https://wa.me/1234567890"
    },
    {
      icon: <FiLinkedin size={20} />,
      content: "company-profile",
      href: "https://linkedin.com/company/company-profile"
    },
    {
      icon: <PiFacebookLogoBold size={22} />,
      content: "company.page",
      href: "https://facebook.com/company.page"
    },
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // Add your form submission logic here (API call, etc.)
      alert('Thank you for your message! We will contact you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <section className='w-full h-auto py-12 bg-gray-50'>
      <ClientsLayout>
        <div className='w-full max-w-6xl mx-auto px-4'>
          <h1 className='text-3xl font-bold text-center mb-12 text-gray-800'>Contact Us</h1>
          
          <div className='w-full h-auto md:flex items-start justify-center gap-8'>
            {/* Contact Info Card */}
            <div className='w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6'>
              <h2 className='text-xl font-semibold tracking-wide text-start w-full border-b border-gray-200 pb-3 mb-6'>Need More Help?</h2>

              <div className='w-full h-auto flex flex-col gap-4'> 
                {contact.map((item, index) => (
                  <a 
                    href={item.href} 
                    key={index}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:bg-gray-100 rounded-lg transition-colors duration-200 p-2"
                  >
                    <div className='w-full h-auto flex items-center gap-3'>
                      <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 text-blue-600">
                        {item.icon}
                      </button>
                      <p className='text-gray-600 text-sm md:text-base'>{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-gray-700 mb-2">Our Location</h3>
                <p className="text-gray-600 text-sm">123 Business Street, Suite 100<br />City, State 12345</p>
              </div>

            </div>
            
            {/* Contact Form Card */}
            <div className='w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6 mt-6 md:mt-0'>
              <h2 className='text-xl font-semibold tracking-wide text-start w-full border-b border-gray-200 pb-3 mb-6'>Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className='block text-gray-700 text-sm font-medium mb-1'>Name:</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-12 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="mb-4">
                  <label className='block text-gray-700 text-sm font-medium mb-1'>Email:</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full h-12 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <label className='block text-gray-700 text-sm font-medium mb-1'>Phone Number:</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full h-12 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                  <label className='block text-gray-700 text-sm font-medium mb-1'>Message:</label>
                  <textarea 
                    name="message"
                    placeholder="Enter your message (minimum 10 characters)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit"
                  className='w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 outline-none transition-colors duration-300 cursor-pointer flex items-center justify-center'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </ClientsLayout>
    </section>
  )
}