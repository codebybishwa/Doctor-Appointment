import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-5 md:px-20'>

      {/* Page Title */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-12 items-center'>
        <img className='w-full md:max-w-[360px] rounded-lg shadow-md' src={assets.about_image} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to <span className='font-semibold text-gray-800'>MediNexusHealth</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when scheduling doctor appointments and managing health records.</p>
          <p><span className='font-semibold text-gray-800'>MediNexusHealth</span> is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, we are here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-xl my-4 text-center'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-5'>
        {[
          { title: 'EFFICIENCY', desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.' },
          { title: 'CONVENIENCE', desc: 'Access to a network of trusted healthcare professionals in your area.' },
          { title: 'PERSONALIZATION', desc: 'Tailored recommendations and reminders to help you stay on top of your health.' }
        ].map((item, idx) => (
          <div
            key={idx}
            className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-sm'
          >
            <b className='text-gray-800'>{item.title}:</b>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default About
