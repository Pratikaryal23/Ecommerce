import React from 'react'
import FlashSaleCard from './FlashSaleCard'

const Flash = () => {
  return (
   <>
   <div className='w-11/12 mx-auto flex flex-col gap-6 bg-white'>
    <p className='text-lg font-medium px-2 py-2'>Flash Sale</p>
    <div>
        <div className='w-full shadow-md flex justify-between py-4 px-3 '>
            <p className='text-[#f57224] font-semibold'>On Sale Now</p>
            <butoon className="w-fit border-2 border-[#f57224] px-3 py-1 text-[#f57224]">Shop All Products</butoon>
        </div>
    </div>
   </div>
   <div>
    <FlashSaleCard/>
   </div>
   </>
  )
}

export default Flash