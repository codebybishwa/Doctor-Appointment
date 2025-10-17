import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-gray-50'>
      {/* Top Section */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>

        {/* Brand & Description */}
        <div>
          <h1 className='text-2xl font-bold text-primary mb-4'>
            MediNexus<span className='text-gray-600'>Health</span>
          </h1>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Your trusted platform to book doctor appointments effortlessly. Connect with certified doctors, manage appointments, and get health updates in one place.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-primary cursor-pointer'>Home</li>
            <li className='hover:text-primary cursor-pointer'>About us</li>
            <li className='hover:text-primary cursor-pointer'>Delivery</li>
            <li className='hover:text-primary cursor-pointer'>Privacy policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-primary cursor-pointer'>+1-212-456-7890</li>
            <li className='hover:text-primary cursor-pointer'>support@medinexus.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright 2025 @ MediNexusHealth.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
