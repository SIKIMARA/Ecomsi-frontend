import { Rating } from '@material-tailwind/react';
import React from 'react';

const Review = ({ reviews }) => {
    //get The first letter of the user name
    const firstLetter = reviews.user_name.charAt(0);
   

    return (
        <article class="p-6 text-base bg-slate-200 shadow-xl shadow-gray-700 m-5  border border-gray-200 rounded-lg ">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden mx-5 bg-black rounded-full ">
                    <span class=" text-gray-300 font-bold text-xl ">{firstLetter}</span>
                </div>
                    {reviews.user_name}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-06-23"
                        title="June 23rd, 2022">{reviews.date}</time></p>
            </div>
        </footer>
        <Rating value={reviews.rating} readonly />
        <p class="text-black-400 font-bold">{reviews.comment}</p>
        
    </article>
    );
};

export default Review;
