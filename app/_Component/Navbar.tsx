"use client"
import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex'>
        <Link href={"/home"}>
            Home
        </Link>
        <Link href={"/histroy"}>
            History
        </Link>
    </div>
  )
}

export default Navbar