import ufc_logo from '../assets/UFC_RIZZ Logo.png';
import fb_logo from '../assets/fb-logo.png';
import { ChevronDown } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Facebook } from 'lucide-react';
export default function Header() {

    return (
        <header className="text-white flex flex-row justify-between w-full">
            <img src={ufc_logo} alt="UFC_LOGO" />
            <nav className='flex flex-col space-y-8 w-[80%]'>
                <div className='flex flex-row justify-end w-full'>
                <ul className='flex flex-row justify-evenly lg:text-xl md:text-md font-[200] text-[#FAF8F2] w-[80%]'>
                    <li>Home</li>
                    <li className='flex items-center'>Category  < ChevronDown className='w-6 h-6 '/></li>
                    <li className='flex items-center'>Top Products< ChevronDown className='w-6 h-6 '/></li>
                    <li>Contact us</li>
                    <li>FAQs</li>
                    
                </ul>
                <ul className='flex flex-row space-x-2 justify-end'>
                    <li><Instagram/></li>
                    <li><img src={fb_logo} className='w-6 h-6' alt="fb-logo" /></li>
                </ul>
                </div>
                
                <ul className='flex flex-row space-x-8 justify-end'>
                    <button className='w-fit  text-[#1F1F1F] bg-[#E1C06E] rounded-full px-4 py-1 hover:cursor-pointer'>Sign Up</button>
                    <button className='w-fit text-[#FAF8F2] rounded-full ring-1 ring-[#FAF8F2] px-4 py-2'>Log In</button>
                    <button><ShoppingCart className='w-10'/></button>
                </ul>
            </nav>
        </header>
    )
}