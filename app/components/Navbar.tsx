'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './ticket-logo.png'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const currentPath = usePathname();

  console.log('currentPath: ', currentPath)
  return (
    <nav>
      <Image 
        src={Logo}
        alt="Tickets Dashboard Logo"
        width={70}
        quality={100}
        placeholder='blur'
      />
      <div className="flex gap-2">
        <Link href="/" className={currentPath === "/" ? "active" : ""}>Dashboard</Link>
        <Link href="/tickets" className={currentPath === "/tickets" ? "active" : ""}>Tickets</Link>
      </div>
    </nav>
  )
}