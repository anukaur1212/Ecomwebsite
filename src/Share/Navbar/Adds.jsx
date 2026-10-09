import React from 'react';
import { Handbag, Lock, RotateCcw } from 'lucide-react';
import Header from './Header';



const Adds = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row justify-center text-center hidden lg:flex  bg-green-950 text-white p-3 sm:p-6 gap-4 sm:gap-10 w-full'>
        <p className='w-full sm:w-70 '>🎉 Free shipping on Orders over $49</p>
        <p className='w-full sm:w-70 sm:border-l sm:border-r sm:p-2'><span className='flex gap-2 justify-center sm:p-2' > <RotateCcw /> 
        30 Days return Policy </span></p>
        <p className='w-full sm:w-70'><span className='flex gap-2' > <Lock /> Secure Payments </span></p>
      </div>

<Header/>

    </>
  );
};

export default Adds;

