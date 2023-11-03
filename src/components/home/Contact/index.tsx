import Image from 'next/image'
import React from 'react'

export default function Contact() {
  return (
    <section className='max-w-5xl mx-auto bg-white/10 flex gap-5 justify-between px-10 items-center rounded max-md:flex-col'>
      <div className="flex flex-col gap-5 max-md:order-2 max-md:pb-5">
        <h4 className='text-4xl' data-aos="fade-right" data-aos-once>Subscribe Our Newsletters</h4>
        <p className='text-white/50' data-aos="fade-right" data-aos-delay='50' data-aos-once>Lorem ipsum dolor sit amet, consectetur adipisc elit amet ipsum dolor sit amet, consectetur adipisc elit.  Lorem ipsum dolor sit amet.</p>
        <form action="" className='flex w-full' data-aos="fade-right" data-aos-delay='100' data-aos-once>
          <input type="email" placeholder='Enter your email...' className='bg-white/20 rounded-l py-4 px-2 w-full focus:outline-none ring-0 ring-pink-500 focus:ring-2 caret-pink-500'/>
          <button className="px-7 py-4 rounded-r bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80">
              Subscribe
            </button>
        </form>
      </div>
      <Image src={'/images/image4.png'} alt='image' width={400} height={400} className='relative -top-8 max-md:order-1' data-aos="fade-left" data-aos-delay='50' data-aos-once/>
    </section>
  )
}
