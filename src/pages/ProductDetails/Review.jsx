import { Rating } from '@material-tailwind/react';
import React from 'react';
import {motion} from 'framer-motion';

const Review = ({ reviews }) => {
    //get The first letter of the user name upercase
    const firstLetter = reviews.user_name.charAt(0).toUpperCase();
   

    return (
        <motion.article 
            class="p-6 text-base bg-slate-200 shadow-xl shadow-gray-700 m-5  border border-gray-200 rounded-lg "
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
        >
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden mx-5 bg-black rounded-full ">
                    <span class=" text-gray-300 font-bold text-xl ">{firstLetter}</span>
                </div>
                    {reviews.user_name}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-06-23"
                        title="June 23rd, 2022">{reviews.date}</time></p>
                <div class="flex items-center ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span class="ml-1 text-sm text-gray-600 dark:text-gray-400">{reviews.user_email}</span>
                </div>


                
            </div>
        </footer>
        <Rating value={reviews.rating} readonly />
        <p class="text-black-400 font-bold">{reviews.comment}</p>
        
    </motion.article>
    );
};

export default Review;
