import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@material-tailwind/react';
export default function index() {
  return  (
    <div className='bg-gray-50 flex items-center  justify-center'>
    <motion.div
      className='p-16 bg-white  rounded-lg shadow w-3/4 my-10'
      initial={{ opacity: 0, y: -20 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animation state
      exit={{ opacity: 0, y: -20 }} // Exit state
      transition={{ duration: 0.5 }} // Animation duration
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className='text-center text-black font-extrabold text-5xl mb-3'

      >
        Congratulation !! 🎉🎉🎉
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className='text-center text-black  text-3xl mb-3'
      >
        Your order has been placed successfully.
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className='text-center text-black  text-2xl mb-3'
      >
        Thank you for shopping with us. Please check your email for further details.
      </motion.h2>
      <Button
        onClick={() => {
            window.location.href = '/shop';
        }}
        className='
        mt-8
        w-full
        bg-gradient-to-r
        from-orange-400
        to-orange-500-600
        hover:from-orange-600
        hover:to-orange-700
        text-white
        font-bold
        py-3
        rounded-lg
        shadow-lg
        uppercase
        tracking-wider
        focus:outline-none
        focus:ring-2
        focus:ring-orange-600
        focus:ring-opacity-50
        '
        >
        Continue Shopping
        </Button>
        
    </motion.div>
    </div>
  );
}
