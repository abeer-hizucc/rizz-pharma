import Header from "../Header/Header";
import './Hero.scss';
import SearchBar from "./SearchBar";
export default function Hero() {
    return (
        <div id ='hero' className="w-full px-32 max-md:px-16 max-sm:px-8 pt-4 msd:pt-8">
            
            <section className="flex flex-col w-full space-y-16 max-sm:space-y-8 max-msd:pt-72">
            <div className='flex flex-col py-10 lg:w-[35%] w-[45%] max-msd:w-full max-msd:justify-center space-y-5'>
                <div class="max-msd:text-center text-3xl md:text-4xl lg:text-7xl font-[700] text-white ">
                Prescription Treatments For Your <span class="text-transparent bg-gradient-to-r from-[#C1842D] to-[#ECC974] bg-clip-text inline-block">Health Goals</span>
                </div>
                <div className="w-full flex max-msd:justify-center ">
                <button className ="gradient-button">Find My Treatment</button>
                </div>
                
            
            </div>
                <div className="w-full flex justify-center">
                    <SearchBar />
                </div>
            </section>
           
        </div>
    )
}   