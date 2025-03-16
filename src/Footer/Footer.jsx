import branding from '../assets/Branding.png';
import hipaa from '../assets/hipaa.png';
import inst_footer from '../assets/instagram-footer.png';
import fb_footer from '../assets/fb-footer.png';
import certification from '../assets/certification.png';
import { Send } from 'lucide-react';
export default function Footer() {
    return (
        <footer id ="footer" className="relative bg-gradient-to-b from-[#3D55CC]/70 to-[#1F1F1F]/10 w-full h-[1200px] px-4 md:px-8 lg:px-16 py-5 md:py-16">
            <div className="absolute w-full h-full text-gray-100 top-0 left-0 p-4 text-2xl z-10">
                <div className="flex flex-col">
                    <div className='w-full py-8 flex flex-row max-md:flex-col max-md:space-y-8 justify-evenly'>
                        <div className='w-80 max-md:w-full bg-transparent rounded-xl ring-gray-500 ring-1 p-8 text-center flex flex-col space-y-3'>
                            <h3 className='text-4xl text-white'>Let's Stay In Touch</h3>
                            <p className='text-base'>
                                Keep up to date with our latest news & special offers.
                            </p>
                            <div className="w-full flex justify-between items-center rounded-md ring-1 ring-white p-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-6 bg-transparent outline-none text-base text-white w-full placeholder:text-white placeholder:text-[16px]"
                                />
                                <Send className="w-4 h-4 cursor-pointer" />
                            </div>



                        </div>
                        <div className='flex flex-row space-x-32 max-sm:space-x-16 h-56'>
                            <div className='flex flex-col justify-between'>
                                <p className='text-sm'>Quick Links</p>
                                <ul className='text-base list-none space-y-1'>
                                    <li>Erectile Dysfunction</li>
                                    <li>Weight Loss</li>
                                    <li>Men's Hair Loss</li>
                                </ul>
                                <p className='text-sm'>Contact Info</p>
                                <p className='text-base'><a href="mailto:hello@rizzoharma.com">hello@rizzoharma.com</a></p>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p className='text-sm'> Our Company</p>
                                <ul className='text-base lsit-none space-y-2'>
                                    <li>HIPAA Notice</li>
                                    <li>Privacy Policy</li>
                                    <li>Return & Return Policy</li>
                                    <li>Terms Of Service</li>
                                    <li>CCPA Opt-Out</li>
                                    <li>Opt-Out Preference </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-row max-md:flex-col max-md:space-y-2 pt-8'>
                        <div className='w-1/2 flex justify-center items-end max-md:w-full'>
                            <img src={hipaa} />
                        </div>
                        <div className='w-1/2 flex flex-col space-y-6 max-md:w-full'>
                            <div className='flex flex-row space-x-2 max-md:w-full max-md:justify-center'>
                                <button className='hover:cursor-pointer'><img src={fb_footer} alt="" /></button>
                                <button className='hover:cursor-pointer'><img src={inst_footer} alt="" /></button>
                            </div>
                            <div className='flex flex-row max-md:flex-col items-center max-md:space-y-2 max-md:justify-center max-md:w-full'>
                                <img src={certification} className='w-20 h-16 max-md:mx-auto' />
                                <p className='text-sm w-86 text-center'>Copyright © 2024 Rizz Pharma All Rights Reserved - Built by Business Web Social</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={branding} alt="Branding" className='object-cover' />
                    </div>
                </div>
            </div>
        </footer>
    )
}