import React from 'react';
import { Handbag, Lock, RotateCcw } from 'lucide-react';
import Header from './Header';


const Adds = () => {
  return (
    <>
      <div className='flex justify-center align-items-center bg-green-950 text-white p-2.5 border-2 gap-4 w-full'>

        <div className='p-2'>
          <p className='w-full sm:w-70'>
            🎉 Free shipping on Orders over $49
          </p>
        </div>

        <div className='border-s border-r '>
          <p className='w-full sm:w-70'>
            <span className='flex gap-2 justify-center align-items-center' >
              <RotateCcw /> 30 Days return Policy
            </span>
          </p>
        </div>

        <div className='p-2'>
          <p className='w-full sm:w-70'>
            <span className='flex gap-2 justify-center align-items-center' >
              <Lock /> Secure Payments
            </span>
          </p>
        </div>

      </div>

    </>
  );
};

export default Adds;

