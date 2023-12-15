import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col min-w-full bg-text_primary text-[#ffff] py-[106px] px-[100px] gap-[128px]'>
        <div className='flex flex-col gap-1 text-[42px] font-normal'>
            <span>
                Have an idea?
            </span>
            <span className='underline-offset-4 underline'>
                Let's talk about it
            </span>
        </div>
        <div className='grid grid-cols-3'>
            <div className='col-span-1 flex flex-col gap-8'>
                <span className='text-[25px] '>
                    phamxuantoan2710@gmail.com
                </span>
                <span className='text-[18px] text-text_secondary'>
                    Tan Binh district, Ho Chi Minh. Viet Nam 
                </span>
            </div>

            <div className='col-span-2'>
                <div className='grid grid-cols-3 gap-12'>

                    <Link href={"https://www.facebook.com/xuantoan2710/"}  className=' text-right'>LinkedIn</Link >
                    <Link href={"/"}  className=' text-right'>LinkedIn</Link >
                    <Link href={"/"}  className=' text-right'>LinkedIn</Link >
                    <Link href={"/"}  className=' text-right'>LinkedIn</Link >
                    <Link href={"/"}  className=' text-right'>LinkedIn</Link >
                    <Link href={"/"}  className=' text-right'>LinkedIn</Link >
                </div>
            </div>
        </div>
    </div>
  )
}
