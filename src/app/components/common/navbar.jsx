"use client"
import { Store, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useTheme } from '@/app/context/ThemeProvider'

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className='p-8 px-20 flex items-center'>
            <div className='flex flex-1 gap-1 mr-10 cursor-pointer'>
                <Store />
                <p className='text-xl'>WiSHOP</p>
            </div>
            <div className='flex text-lg flex-[8] gap-8 *:cursor-pointer items-center'>
                <p>Products</p>
                <Link href="#whatsapp-provider" className="hover:text-red-850 dark:hover:text-red-400 transition-colors">WhatsApp API</Link>
                <p>Solutions</p>
                <p>Portfolio</p>
                <p>About</p>
                <a href="https://waba.wishop.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-red-850 dark:hover:text-red-400 transition-colors font-medium text-base border border-red-800/30 px-4 py-1.5 rounded">WABA Console</a>
            </div>
            <div className='flex gap-4 items-center'>
                <button
                    onClick={toggleTheme}
                    className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
                    aria-label='Toggle theme'
                >
                    {theme === 'dark' ? (
                        <Sun className='w-5 h-5' />
                    ) : (
                        <Moon className='w-5 h-5' />
                    )}
                </button>
                <div className='text-center text-lg bg-red-800 text-white duration-200 hover:border-red-800 border border-transparent hover:bg-white hover:text-red-800 transition ease rounded-[5px] cursor-pointer p-3 px-6'>
                    <Link href="#contact" className=''>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar