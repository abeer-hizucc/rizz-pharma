import ufc_logo from '../assets/UFC_RIZZ Logo.png';
import { useRef, useState, useEffect } from "react";
import fb_logo from '../assets/fb-logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import { ChevronDownIcon, CircleX, Menu } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import './Header.scss';
export default function Header() {
    const categoryItems = ['Weight Loss', 'Sexual Health', 'Brain Health', 'Testosterone HRT', 'Athletic Performance', 'Beauty and Hair Loss'];
    const topProductItems =['Semaglutide (GLP-1) Injection','Tirzepatide (GLP-2) Injection','Tadalafil','Slidenafil',' Dutasteride 0.5mg ']
    const mobileNavBarRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    function openSidebar() {
        setIsOpen(true);
        if (mobileNavBarRef.current) {
            mobileNavBarRef.current.classList.add("show");
        }
    }
    function toggleSubMenu(event) {
        const button = event.currentTarget;
        const submenu = button.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('show');
        }
    }

    function closeSidebar() {
        setIsOpen(false);
        if (mobileNavBarRef.current) {
            mobileNavBarRef.current.classList.remove("show");
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                mobileNavBarRef.current &&
                !mobileNavBarRef.current.contains(event.target)
            ) {
                closeSidebar();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        
        <div className={`sticky top-0 w-full z-100 transition-all duration-300 px-32 py-6 max-md:px-16 max-md:py-4 max-sm:px-8 ${
            isScrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent"
        }`}>
            <header id="header" className="text-white flex flex-row justify-between w-full">
            <img src={ufc_logo} alt="UFC_LOGO" className='max-msd:w-14 max-msd:h-14' />
            <div className='absolute msd:hidden top-0 right-0 flex flex-row space-x-3 p-4'>
            <button className='w-fit text-[#FAF8F2] rounded-full ring-1 ring-[#FAF8F2] px-6 py-1 hover:cursor-pointer hover:transition ease-in 0.5s hover:text-black hover:bg-[#FAF8F2]'>Log In</button>
            <button><ShoppingCart className='w-6 h-4 hover:cursor-pointer transition ease-in-out delay-50 hover:scale-110' /></button> 
            <button onClick={openSidebar} className='hover:cursor-pointer '><Menu /></button>
            </div>
            
            <nav className='flex flex-col space-y-4 md:space-y-8  w-[80%] nav-item max-msd:hidden'>
                <div className='flex flex-row justify-end w-full'>
                    <ul className='flex flex-row justify-evenly text-base font-[200] text-[#FAF8F2] w-[80%]'>
                        <li><Link to="#hero" smooth>Home</Link></li>
                        <DropdownMenu title="Category" items={categoryItems} link ="#category" />
                        <DropdownMenu title="Top Products" items={topProductItems} link ="#topProduct" />
                        <li><Link to="#footer" smooth>Contact us</Link></li>
                        <li>FAQs</li>

                    </ul>
                    <ul className='flex flex-row space-x-2 justify-end'>
                        <li><Instagram /></li>
                        <li><img src={fb_logo} className='w-6 h-6' alt="fb-logo" /></li>
                    </ul>
                </div>

                <ul className='flex flex-row space-x-6 justify-end'>
                    <button className='w-fit  text-[#1F1F1F] bg-[#E1C06E] rounded-full px-4 py-2 hover:cursor-pointer'>Sign Up</button>
                    <button className='w-fit text-[#FAF8F2] rounded-full ring-1 ring-[#FAF8F2] px-4 py-2 hover:cursor-pointer hover:transition ease-in 0.5s hover:text-black hover:bg-[#FAF8F2]'>Log In</button>
                    <button><ShoppingCart className='w-8 h-8 hover:cursor-pointer transition ease-in-out delay-50 hover:scale-110' /></button>
                </ul>
            </nav>
            <nav ref={mobileNavBarRef} className='mobileNav msd:hidden'>
                <ul className='justify-between flex flex-col h-[80%] w-full py-2 text-sm'>
                    <button onClick={closeSidebar} className='hover:cursor-pointer p-2'><CircleX /></button>
                    <li>Home</li>
                    <li className='flex flex-col'>
                        <button onClick={toggleSubMenu} className='w-full flex justify-center items-center'>
                            Category <ChevronDownIcon></ChevronDownIcon>
                        </button>

                        <ul className='sub-menu'>
                            <div>
                                {categoryItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </div>

                        </ul>
                    </li>
                    <li className='flex flex-col'>
                        <button onClick={toggleSubMenu} className='w-full flex justify-center items-center'>
                            Top Products
                            <ChevronDownIcon></ChevronDownIcon>
                        </button>
                        <ul className='sub-menu'>
                            <div>
                            <div>
                                {topProductItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </div>
                            </div>
                        </ul>
                    </li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <div className='flex flex-row w-full justify-center space-x-4'>
                        <li><Instagram /></li>
                        <li><img src={fb_logo} className='w-6 h-6' alt="fb-logo" /></li>
                    </div>
                    <li><button className='w-fit flex justify-center text-[#1F1F1F] bg-[#E1C06E] rounded-full px-6 py-1 hover:cursor-pointer'>Sign Up</button></li>
                    

                </ul>




            </nav>
        </header>

        </div>
    )
}