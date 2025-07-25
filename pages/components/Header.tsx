import React from 'react'
import Image from 'next/image'
import TopNavigation from './TopNavigation'

export default function Header() {
  return (
    <div className='flex container justify-between m-auto'>
    <div>
        <Image
          src="/images/Kirk-Tech-Solutions-Logo.png"
          alt="Kirkcommunications"
          width={180}
          height={38}
          priority
        />
       </div>
     <div><TopNavigation/></div> 
    </div>
  )
}


