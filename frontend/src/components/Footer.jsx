import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*---- left section ----*/}
            <div>
                <img className='mb-5 w-40 ' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Your health is our priority. At Prescripto, we make it easy to book doctor appointments, access medical records, and consult with trusted healthcare professionals—all from the comfort of your home.</p>
            </div>
            {/*----center section ----*/}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us </li>
                    <li>Contact us</li> 
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/*---- right section ----*/}
            <div>
                <p className='text-xl font-medium mb-5'>Contact</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>prescripto@gmail.com</li>
                </ul>
            </div>
    </div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2025 Prescripto - All Right Reserved.</p>
    </div>
  )
}

export default Footer