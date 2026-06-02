import { Copyright } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='px-20 pt-16 pb-4 flex flex-col'>
            <div className='flex text-lg'>
                <p className='flex-[8] text-xl'>Wishop is the leading creative partner to startups and new ventures</p>
                <div className='flex flex-1'>
                    <ul className='space-y-1'>
                        <li className='cursor-pointer hover:text-red-850 dark:hover:text-red-400 transition-colors'>Work</li>
                        <li className='cursor-pointer hover:text-red-850 dark:hover:text-red-400 transition-colors'>Clients</li>
                        <li className='cursor-pointer hover:text-red-850 dark:hover:text-red-400 transition-colors'>About</li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <ul className='space-y-1'>
                        <li className='cursor-pointer hover:text-red-850 dark:hover:text-red-400 transition-colors'>Careers</li>
                        <li className='cursor-pointer hover:text-red-850 dark:hover:text-red-400 transition-colors'>Contact</li>
                        <li className='cursor-pointer hover:text-red-850 dark:hover:text-red-400 transition-colors'>
                            <a href="https://waba.wishop.xyz" target="_blank" rel="noopener noreferrer">WABA Onboarding</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex items-end'>
                <div className='flex flex-col flex-[9]'>
                    <p className='text-[200px] leading-[250px]'>WI SHOP</p>
                    <div className='flex '>
                        <div className='flex-[3] flex gap-1'>
                            <Copyright />
                            <p>WiSHOP 2026</p>
                        </div>
                        <Link href="/privacy-policy" className='flex-[4] hover:text-red-850 dark:hover:text-red-400 transition-colors cursor-pointer'>Privacy Policy</Link>
                    </div>
                </div>
                <div className='flex-[1]'>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}

export default Footer