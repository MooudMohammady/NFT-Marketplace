import Image from 'next/image'
import React from 'react'

export default function ComponySection() {
  return (
    <section className='flex justify-between items-center my-16'>
      <Image src={'/images/Amazon Logo.png'} alt='Amazon Logo' width={150} height={100}/>
      <Image src={'/images/Slack Logo.png'} alt='Slack Logo' width={150} height={100}/>
      <Image src={'/images/Paradigm Logo.png'} alt='Paradigmn Logo' width={150} height={100}/>
      <Image src={'/images/Chase Logo.png'} alt='Chase Logo' width={150} height={100}/>
      <Image src={'/images/Binance Logo.png'} alt='Binance Logo' width={150} height={100}/>
    </section>
  )
}
