import React from 'react'
import Link from 'next/link'
import { Poppins } from "next/font/google";

const poppinsLight = Poppins({subsets:["latin"], weight:"300"})

function NavLinks({links}) {
  return (
    <div className='flex items-center'>
        {links.map(link => {
            return <Link className={`text-dark-gray ml-48 text-h6 ${poppinsLight.className}`} href={`/${link}`}>{link}</Link>
        })}
    </div>
  )
}

export default NavLinks